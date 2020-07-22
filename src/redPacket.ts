import 'core-js/features/promise';
import 'core-js/features/array/for-each';
import 'core-js/features/array/map';
import requestAnimationFramePolyfill from './raf';

const { requestAnimationFrame, cancelAnimationFrame } = requestAnimationFramePolyfill();
const devicePixelRatio = window.devicePixelRatio > 1 ? 2 : 1; // retina 2倍 普通 1倍
const isTouch = 'ontouchstart' in window;

function getPos(e: any) {
  const position = e.changedTouches ? e.changedTouches[0] : e;
  // console.log(position);
  return {
    x: position.clientX,
    y: position.clientY
  };
}
interface imgDom {
  width: number,
  height: number,
  imgDom: HTMLImageElement
}
interface baseConfig {
  type?: number;
  x: number;
  y: number;
  img: imgDom;
  speed?: number;
  ratio?: number;
  score?: number;
  opacity?: number;
}
function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function loadImgs(arr: Array<string>): Promise<imgDom[]> {
  return new Promise((resolve) => {
    let count = 0;
    // 循环图片数组，每张图片都生成一个新的图片对象
    const len = arr.length;
    const tempList:Array<imgDom> = new Array(len); // 临时数组 保存新对象
    for (let i = 0; i < len; i++) {
      // 创建图片对象
      const image = new Image();
      // 成功的异步回调
      image.onload = (el) => {
        const { width, height } = <HTMLImageElement>el.target;
        count++;
        tempList.splice(i, 1, {
        // 加载完的图片对象都缓存在这里了，canvas可以直接绘制
          imgDom: image,
          width,
          height,
        });
        if (count === len) {
          resolve(tempList);
        }
      };
      image.src = arr[i];
    }
  });
}

// 判断点击位置  是否处于某个coin之中
function isIntersect(
  point: { x: number, y: number },
  shape: { x: number, y: number, width: number, height: number },
  ignore = 0
): boolean {
  const distanceX = point.x - (shape.x + ignore);
  const distanceY = point.y - (shape.y + ignore);
  const withinX = distanceX > 0 && distanceX < shape.width - ignore * 2;
  // 金币图片是长方形的 我们只计算下半部的正方形  不计算金币尾巴
  const withinY = distanceY > 0 && distanceY < shape.height - ignore * 2;
  return withinX && withinY;
}

class Packet {
  readonly type: number;
  x: number;
  y: number;
  readonly width: number;
  readonly ratio: number;
  readonly height: number;
  readonly img: HTMLImageElement;
  readonly speed: number;
  opacity?: number;
  constructor(config: baseConfig) {
    const {
      type, x, y, img, speed, ratio = 1,
    } = config;
    this.type = type;
    this.x = x; // x轴位置
    this.y = y; // y轴位置
    this.ratio = ratio;
    this.width = img.width / 2 * this.ratio;
    this.height = img.height / 2 * this.ratio; // 红包种类
    this.img = img.imgDom; // 前面缓存好的金币图片
    this.speed = speed; // 金币的下落速度
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height,
    );
    this.y += this.speed;
    this.x -= this.speed * 0.3;
  }
}

class Meteor extends Packet {
  // constructor(config) {
  //   super(config);
  // }
}

class Firework {
  readonly type?: number;
  readonly ratio: number;
  readonly config: baseConfig;
  protected scale: number;
  opacity: number;
  readonly img: HTMLImageElement;
  readonly score: any;
  width: number;
  height: number;
  x: number;
  y: number;
  constructor(config: baseConfig) {
    // x y 为 红包中心 要算一下烟花起点
    this.x = config.x; // x轴位置
    this.y = config.y; // y轴位置
    this.ratio = random(0.5, 1.2);
    this.config = config;
    this.scale = 0.2;
    this.opacity = 1;
    this.update();
    this.img = config.img.imgDom; // 前面缓存好的金币图片
    this.score = config.score || 1; // 1分 不展示x分数
  }

  protected update() {
    if (this.scale >= 1) {
      this.opacity -= 0.05;
    } else {
      this.scale += 0.2;
    }
    this.width = this.config.img.width / 2 * this.scale * this.ratio;
    this.height = this.config.img.height / 2 * this.scale * this.ratio; // 红包种类
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height,
    );
    if (this.score > 1) {
      ctx.font = '22px DINAlternate-Bold';
      // // 设置颜色
      ctx.fillStyle = '#fff';
      // // 绘制文字（参数：要写的字，x坐标，y坐标）
      ctx.fillText(`x${this.score}`, this.x + 16, this.y - 30);
    }
    this.update();
  }
}

class RedPacket {
  readonly canvasDom: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  protected countdownTime: number;
  protected remainTime: number;
  readonly onDurationCallBack: any;
  readonly onEndedCallBack: any;
  readonly onStartCallBack: any;
  protected count: number;
  protected imgList: { rain: any; binggo: any; meteor: any; countdownBg: any; countdown: any; countBg: any; };
  protected rainList: (Packet | Meteor | Firework)[];
  protected finished: boolean;
  protected moveAnimation: any;
  readonly imgUrl: string;
  readonly rainType: { score: number; speed: number; useless?: number; ratio: number; }[];

  constructor(config: {
    imgUrl: string,
    rainType: ({ score: number; speed: number; useless?: number; ratio: number; })[],
    container: string,
    countdownTime: number,
    remainTime: number,
    onDuration?: (remainTime: number, count: number) => void,
    onEnded?: (count: number) => void,
    onStart?: () => void,
  }) {
    const canvas = <HTMLCanvasElement>document.getElementById(config.container);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    if (!canvas.getContext) {
      return;
    }
    this.canvasDom = canvas;
    this.imgUrl = config.imgUrl;
    this.rainType = config.rainType; // 红包雨种类
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
    this.countdownTime = config.countdownTime || 0;
    this.remainTime = config.remainTime || 30;
    this.onDurationCallBack = config.onDuration || function () {};
    this.onEndedCallBack = config.onEnded || function () {};
    this.onStartCallBack = config.onStart || function () {};
    this.count = 0;
    this.init();
  }

  protected async init() {
    // 图片预加载
    const temp = await loadImgs(this.rainType.map((item, index) => `${this.imgUrl}raindrop${index + 1}.png`).concat([
      `${this.imgUrl}bingo.png`,
      `${this.imgUrl}meteor.png`,
      `${this.imgUrl}countdown-bg.png`,
      `${this.imgUrl}countdown.png`,
      `${this.imgUrl}count-bg.png`,
    ]));
    this.onStartCallBack();
    this.imgList = {
      rain: temp.splice(0, this.rainType.length),
      binggo: temp.shift(),
      meteor: temp.shift(),
      countdownBg: temp.shift(),
      countdown: temp.shift(),
      countBg: temp.shift(),
    };
    this.rainList = [];
    this.finished = false;
    // 倒计时
    this.countDown();
  }

  protected countDown() {
    const bg = this.imgList.countdownBg;
    const countdownBg = this.imgList.countdown;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.drawImage(
      bg.imgDom,
      (window.innerWidth - bg.width / 2) / 2,
      (window.innerHeight - bg.height / 2) / 2,
      bg.width / 2,
      bg.height / 2,
    );
    this.ctx.drawImage(
      countdownBg.imgDom,
      0,
      (5 - this.countdownTime) * countdownBg.height / 6,
      countdownBg.width,
      countdownBg.height / 6,
      (window.innerWidth - countdownBg.width / 2) / 2,
      (window.innerHeight - countdownBg.height / 6 / 2) / 2 + 130,
      countdownBg.width / 2,
      countdownBg.height / 6 / 2,
    );
    setTimeout(() => {
      if (this.finished) {
        return;
      }
      if (this.countdownTime > 0) {
        this.countdownTime--;
        this.countDown();
      } else {
        this.start();
      }
    }, 1000);
  }

  protected start() {
    this.add();
    const addTimer = setInterval(() => {
      if (this.finished) {
        clearInterval(addTimer);
        return;
      }
      this.add();
    }, 600);
    this.onDurationCallBack(this.remainTime, this.count);
    const gameTimer = setInterval(() => {
      this.remainTime--;
      if (this.remainTime <= 0 || this.finished) {
        // 结束
        clearInterval(gameTimer);
        this.onEnded();
        return;
      }
      if (this.onDurationCallBack) {
        this.onDurationCallBack(this.remainTime, this.count);
      }
    }, 1000);
    this.drop();
    this.onClick();
  }

  protected draw() {
    for (let i = 0; i < this.rainList.length; i++) {
      const item = this.rainList[i];
      this.ctx.globalAlpha = item.opacity || 1;
      item.draw(this.ctx);
      if (item.opacity <= 0
        || item.x + item.width < 0
        || item.y - item.height > window.innerHeight) {
        // 画面以外 删除
        this.rainList.splice(i, 1);
        i--;
      }
    }
    this.ctx.globalAlpha = 1;
  }

  protected drop() {
    // 清空canvas
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // 绘制新的一帧动画
    this.draw();
    this.counting();
    this.remain();
    // 不断执行绘制，形成动画
    this.moveAnimation = requestAnimationFrame(this.drop.bind(this));
    if (this.finished) {
      cancelAnimationFrame(this.moveAnimation);
      return;
    }
  }

  protected getTypeByRatio(random: number) {
    let sum = 0;
    for (let i = 0; i < this.rainType.length; i++) {
      sum += this.rainType[i].ratio;
      if (random <= sum) {
        return i
      }
    }
  }

  protected add() {
    // 一次落下 随机 1-3个
    const boundary = window.innerWidth - 1200 <= 200 ? 100 : (window.innerWidth - 1200) / 2;
    const count = Math.floor(random(1, 4));
    const meteor = new Meteor({
      x: random(boundary, window.innerWidth - boundary),
      y: -10,
      img: this.imgList.meteor,
      speed: random(5, 8),
      ratio: random(0.5, 1.2),
    });
    this.rainList.push(meteor);
    for (let i = 0; i < count; i++) {
      const randomNum = random(0, 10);
      const type = this.getTypeByRatio(randomNum);
      const rain = new Packet({
        type,
        x: random(boundary, window.innerWidth - boundary),
        y: -10,
        img: this.imgList.rain[type],
        speed: random(1, 3) + this.rainType[type].speed,
      });
      this.rainList.push(rain);
    }
  }

  protected onClick() {
    // 修改成mousedown事件
    this.canvasDom.addEventListener(isTouch ? 'touchstart' : 'mousedown', (e) => {
      if (this.finished) {
        return;
      }
      const pos = getPos(e);
      const clickedPacket: any[] = [];
      this.rainList.forEach((item, index) => {
      // 判断点击位置是否在该金币范围内
        if (item.constructor === Packet
          && isIntersect(pos, item, (this.rainType[item.type].useless || 0) / 2)) {
          clickedPacket.push({
            ...item,
            // 索引很重要，用于删除this.rainList内的红包
            index,
          });
        }
      });
      // 如果点击中了重叠的红包，只最后一个  也只删除第一个  count也只增加一次
      if (clickedPacket.length > 0) {
        const targetPacket = clickedPacket.pop();
        const firework = new Firework({
          x: targetPacket.x + targetPacket.width / 2,
          y: targetPacket.y + targetPacket.height / 2,
          img: this.imgList.binggo,
          score: this.rainType[targetPacket.type].score,
        });
        // 移除被点中的红包对象
        this.rainList.splice(targetPacket.index, 1);
        this.rainList.push(firework);
        this.count += this.rainType[targetPacket.type].score;
      }
    });
  }

  protected onEnded() {
    this.finished = true;
    if (this.remainTime <= 0) {
      this.onEndedCallBack(this.count);
    }
  }

  protected remain() {
    this.ctx.font = '28px DINAlternate-Bold';
    // // 设置颜色
    this.ctx.fillStyle = '#fff';
    // // 绘制文字（参数：要写的字，x坐标，y坐标）
    const xPos = window.innerWidth - 1200 > 0 ? (window.innerWidth - 1200) / 2 : 0;
    this.ctx.fillText(`剩余：${this.remainTime}s`, xPos, 115);
  }

  close() {
    this.finished = true;
  }

  protected counting() {
    const img = this.imgList.countBg;
    const imgXPos = (window.innerWidth - img.width / 2) / 2 - 40;
    this.ctx.drawImage(
      img.imgDom,
      imgXPos,
      70,
      img.width / 2,
      img.height / 2,
    );
    this.ctx.shadowColor = 'rgba(228,57,28,1)';
    this.ctx.shadowBlur = 20;
    this.ctx.font = 'bold 44px bold';
    // // 设置颜色
    this.ctx.fillStyle = '#fff';
    // // 绘制文字（参数：要写的字，x坐标，y坐标）
    this.ctx.fillText(String(this.count), imgXPos + img.width / 2, 120);
    this.ctx.shadowBlur = 0;
  }
}

export default RedPacket;