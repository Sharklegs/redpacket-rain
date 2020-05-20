/**
 * requestAnimationFrame polyfill
 */
declare const setTimeout: (handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]) => number
export default function requestAnimationFramePolyfill () {
  let { requestAnimationFrame, cancelAnimationFrame } = window;
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    let lastTime = 0;
    requestAnimationFrame = function (callback: FrameRequestCallback) {
      const now = Date.now();
      const nextTime = Math.max(lastTime + 16, now);
      return setTimeout(() => {
        callback(lastTime = nextTime);
      }, nextTime - now);
    }
    cancelAnimationFrame = clearTimeout;
  }
  return {
    requestAnimationFrame,
    cancelAnimationFrame,
  }
}
