/*!
 * @autots/redpacket v1.0.0
 * Last Modified @ 2020-6-10 2:51:47 ├F10: PM┤
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RedPacket"] = factory();
	else
		root["AutoTs"] = root["AutoTs"] || {}, root["AutoTs"]["RedPacket"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
var raf_1 = __importDefault(__webpack_require__(4));
var _a = raf_1.default(), requestAnimationFrame = _a.requestAnimationFrame, cancelAnimationFrame = _a.cancelAnimationFrame;
var devicePixelRatio = window.devicePixelRatio > 1 ? 2 : 1; // retina 2倍 普通 1倍
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function loadImgs(arr) {
    return new Promise(function (resolve) {
        var count = 0;
        // 循环图片数组，每张图片都生成一个新的图片对象
        var len = arr.length;
        var tempList = new Array(len); // 临时数组 保存新对象
        var _loop_1 = function (i) {
            // 创建图片对象
            var image = new Image();
            // 成功的异步回调
            image.onload = function (el) {
                var _a = el.target, width = _a.width, height = _a.height;
                count++;
                tempList.splice(i, 1, {
                    // 加载完的图片对象都缓存在这里了，canvas可以直接绘制
                    imgDom: image,
                    width: width,
                    height: height,
                });
                if (count === len) {
                    resolve(tempList);
                }
            };
            image.src = arr[i];
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
// 判断点击位置  是否处于某个coin之中
function isIntersect(point, shape, ignore) {
    if (ignore === void 0) { ignore = 0; }
    var distanceX = point.x - (shape.x + ignore);
    var distanceY = point.y - (shape.y + ignore);
    var withinX = distanceX > 0 && distanceX < shape.width - ignore * 2;
    // 金币图片是长方形的 我们只计算下半部的正方形  不计算金币尾巴
    var withinY = distanceY > 0 && distanceY < shape.height - ignore * 2;
    return withinX && withinY;
}
var Packet = /** @class */ (function () {
    function Packet(config) {
        var type = config.type, x = config.x, y = config.y, img = config.img, speed = config.speed, _a = config.ratio, ratio = _a === void 0 ? 1 : _a;
        this.type = type;
        this.x = x; // x轴位置
        this.y = y; // y轴位置
        this.ratio = ratio;
        this.width = img.width / 2 * this.ratio;
        this.height = img.height / 2 * this.ratio; // 红包种类
        this.img = img.imgDom; // 前面缓存好的金币图片
        this.speed = speed; // 金币的下落速度
    }
    Packet.prototype.draw = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.y += this.speed;
        this.x -= this.speed * 0.3;
    };
    return Packet;
}());
var Meteor = /** @class */ (function (_super) {
    __extends(Meteor, _super);
    function Meteor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Meteor;
}(Packet));
var Firework = /** @class */ (function () {
    function Firework(config) {
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
    Firework.prototype.update = function () {
        if (this.scale >= 1) {
            this.opacity -= 0.05;
        }
        else {
            this.scale += 0.2;
        }
        this.width = this.config.img.width / 2 * this.scale * this.ratio;
        this.height = this.config.img.height / 2 * this.scale * this.ratio; // 红包种类
    };
    Firework.prototype.draw = function (ctx) {
        ctx.drawImage(this.img, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        if (this.score > 1) {
            ctx.font = '22px DINAlternate-Bold';
            // // 设置颜色
            ctx.fillStyle = '#fff';
            // // 绘制文字（参数：要写的字，x坐标，y坐标）
            ctx.fillText("x" + this.score, this.x + 16, this.y - 30);
        }
        this.update();
    };
    return Firework;
}());
var RedPacket = /** @class */ (function () {
    function RedPacket(config) {
        var canvas = document.getElementById(config.container);
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
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
        this.onDurationCallBack = config.onDuration || function () { };
        this.onEndedCallBack = config.onEnded || function () { };
        this.onStartCallBack = config.onStart || function () { };
        this.count = 0;
        this.init();
    }
    RedPacket.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loadImgs(this.rainType.map(function (item, index) { return _this.imgUrl + "raindrop" + (index + 1) + ".png"; }).concat([
                            this.imgUrl + "bingo.png",
                            this.imgUrl + "meteor.png",
                            this.imgUrl + "countdown-bg.png",
                            this.imgUrl + "countdown.png",
                            this.imgUrl + "count-bg.png",
                        ]))];
                    case 1:
                        temp = _a.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    RedPacket.prototype.countDown = function () {
        var _this = this;
        var bg = this.imgList.countdownBg;
        var countdownBg = this.imgList.countdown;
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.ctx.drawImage(bg.imgDom, (window.innerWidth - bg.width / 2) / 2, (window.innerHeight - bg.height / 2) / 2, bg.width / 2, bg.height / 2);
        this.ctx.drawImage(countdownBg.imgDom, 0, (5 - this.countdownTime) * countdownBg.height / 6, countdownBg.width, countdownBg.height / 6, (window.innerWidth - countdownBg.width / 2) / 2, (window.innerHeight - countdownBg.height / 6 / 2) / 2 + 130, countdownBg.width / 2, countdownBg.height / 6 / 2);
        setTimeout(function () {
            if (_this.finished) {
                return;
            }
            if (_this.countdownTime > 0) {
                _this.countdownTime--;
                _this.countDown();
            }
            else {
                _this.start();
            }
        }, 1000);
    };
    RedPacket.prototype.start = function () {
        var _this = this;
        this.add();
        var addTimer = setInterval(function () {
            if (_this.finished) {
                clearInterval(addTimer);
                return;
            }
            _this.add();
        }, 600);
        this.onDurationCallBack(this.remainTime, this.count);
        var gameTimer = setInterval(function () {
            _this.remainTime--;
            if (_this.remainTime <= 0 || _this.finished) {
                // 结束
                clearInterval(gameTimer);
                _this.onEnded();
                return;
            }
            if (_this.onDurationCallBack) {
                _this.onDurationCallBack(_this.remainTime, _this.count);
            }
        }, 1000);
        this.drop();
        this.onClick();
    };
    RedPacket.prototype.draw = function () {
        for (var i = 0; i < this.rainList.length; i++) {
            var item = this.rainList[i];
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
    };
    RedPacket.prototype.drop = function () {
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
    };
    RedPacket.prototype.getTypeByRatio = function (random) {
        var sum = 0;
        for (var i = 0; i < this.rainType.length; i++) {
            sum += this.rainType[i].ratio;
            if (random <= sum) {
                return i;
            }
        }
    };
    RedPacket.prototype.add = function () {
        // 一次落下 随机 1-3个
        var boundary = window.innerWidth - 1200 <= 200 ? 100 : (window.innerWidth - 1200) / 2;
        var count = Math.floor(random(1, 4));
        var meteor = new Meteor({
            x: random(boundary, window.innerWidth - boundary),
            y: -10,
            img: this.imgList.meteor,
            speed: random(5, 8),
            ratio: random(0.5, 1.2),
        });
        this.rainList.push(meteor);
        for (var i = 0; i < count; i++) {
            var randomNum = random(0, 10);
            var type = this.getTypeByRatio(randomNum);
            var rain = new Packet({
                type: type,
                x: random(boundary, window.innerWidth - boundary),
                y: -10,
                img: this.imgList.rain[type],
                speed: random(1, 3) + this.rainType[type].speed,
            });
            this.rainList.push(rain);
        }
    };
    RedPacket.prototype.onClick = function () {
        var _this = this;
        // 修改成mousedown事件
        this.canvasDom.addEventListener('mousedown', function (e) {
            if (_this.finished) {
                return;
            }
            var pos = {
                x: e.clientX,
                y: e.clientY,
            };
            var clickedPacket = [];
            _this.rainList.forEach(function (item, index) {
                // 判断点击位置是否在该金币范围内
                if (item.constructor === Packet
                    && isIntersect(pos, item, (_this.rainType[item.type].useless || 0) / 2)) {
                    clickedPacket.push(__assign(__assign({}, item), { 
                        // 索引很重要，用于删除this.rainList内的红包
                        index: index }));
                }
            });
            // 如果点击中了重叠的红包，只最后一个  也只删除第一个  count也只增加一次
            if (clickedPacket.length > 0) {
                var targetPacket = clickedPacket.pop();
                var firework = new Firework({
                    x: targetPacket.x + targetPacket.width / 2,
                    y: targetPacket.y + targetPacket.height / 2,
                    img: _this.imgList.binggo,
                    score: _this.rainType[targetPacket.type].score,
                });
                // 移除被点中的红包对象
                _this.rainList.splice(targetPacket.index, 1);
                _this.rainList.push(firework);
                _this.count += _this.rainType[targetPacket.type].score;
            }
        });
    };
    RedPacket.prototype.onEnded = function () {
        this.finished = true;
        if (this.remainTime <= 0) {
            this.onEndedCallBack(this.count);
        }
    };
    RedPacket.prototype.remain = function () {
        this.ctx.font = '28px DINAlternate-Bold';
        // // 设置颜色
        this.ctx.fillStyle = '#fff';
        // // 绘制文字（参数：要写的字，x坐标，y坐标）
        var xPos = window.innerWidth - 1200 > 0 ? (window.innerWidth - 1200) / 2 : 0;
        this.ctx.fillText("\u5269\u4F59\uFF1A" + this.remainTime + "s", xPos, 115);
    };
    RedPacket.prototype.close = function () {
        this.finished = true;
    };
    RedPacket.prototype.counting = function () {
        var img = this.imgList.countBg;
        var imgXPos = (window.innerWidth - img.width / 2) / 2 - 40;
        this.ctx.drawImage(img.imgDom, imgXPos, 70, img.width / 2, img.height / 2);
        this.ctx.shadowColor = 'rgba(228,57,28,1)';
        this.ctx.shadowBlur = 20;
        this.ctx.font = 'bold 44px bold';
        // // 设置颜色
        this.ctx.fillStyle = '#fff';
        // // 绘制文字（参数：要写的字，x坐标，y坐标）
        this.ctx.fillText(String(this.count), imgXPos + img.width / 2, 120);
        this.ctx.shadowBlur = 0;
    };
    return RedPacket;
}());
exports.default = RedPacket;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/features/promise");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("core-js/features/array/for-each");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/features/array/map");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function requestAnimationFramePolyfill() {
    var requestAnimationFrame = window.requestAnimationFrame, cancelAnimationFrame = window.cancelAnimationFrame;
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        var lastTime_1 = 0;
        requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime_1 + 16, now);
            return setTimeout(function () {
                callback(lastTime_1 = nextTime);
            }, nextTime - now);
        };
        cancelAnimationFrame = clearTimeout;
    }
    return {
        requestAnimationFrame: requestAnimationFrame,
        cancelAnimationFrame: cancelAnimationFrame,
    };
}
exports.default = requestAnimationFramePolyfill;


/***/ })
/******/ ])["default"];
});