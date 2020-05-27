import 'core-js/features/promise';
import 'core-js/features/array/for-each';
import 'core-js/features/array/map';
interface imgDom {
    width: number;
    height: number;
    imgDom: HTMLImageElement;
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
declare class Packet {
    readonly type: number;
    x: number;
    y: number;
    readonly width: number;
    readonly ratio: number;
    readonly height: number;
    readonly img: HTMLImageElement;
    readonly speed: number;
    opacity?: number;
    constructor(config: baseConfig);
    draw(ctx: CanvasRenderingContext2D): void;
}
declare class Meteor extends Packet {
}
declare class Firework {
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
    constructor(config: baseConfig);
    protected update(): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
declare class RedPacket {
    readonly canvasDom: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    protected countdownTime: number;
    protected remainTime: number;
    readonly onDurationCallBack: any;
    readonly onEndedCallBack: any;
    readonly onStartCallBack: any;
    protected count: number;
    protected imgList: {
        rain: any;
        binggo: any;
        meteor: any;
        countdownBg: any;
        countdown: any;
        countBg: any;
    };
    protected rainList: (Packet | Meteor | Firework)[];
    protected finished: boolean;
    protected moveAnimation: any;
    readonly imgUrl: string;
    readonly rainType: {
        score: number;
        speed: number;
        useless?: number;
        ratio: number;
    }[];
    constructor(config: {
        imgUrl: string;
        rainType: ({
            score: number;
            speed: number;
            useless?: number;
            ratio: number;
        })[];
        container: string;
        countdownTime: number;
        remainTime: number;
        onDuration?: (remainTime: number, count: number) => void;
        onEnded?: (count: number) => void;
        onStart?: () => void;
    });
    protected init(): Promise<void>;
    protected countDown(): void;
    protected start(): void;
    protected draw(): void;
    protected drop(): void;
    protected getTypeByRatio(random: number): number;
    protected add(): void;
    protected onClick(): void;
    protected onEnded(): void;
    protected remain(): void;
    close(): void;
    protected counting(): void;
}
export default RedPacket;
