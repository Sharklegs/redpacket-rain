export default function requestAnimationFramePolyfill(): {
    requestAnimationFrame: ((callback: FrameRequestCallback) => number) & typeof globalThis.requestAnimationFrame;
    cancelAnimationFrame: ((handle: number) => void) & typeof globalThis.cancelAnimationFrame;
};
