export interface IPopupClientRect {
  width: number;
  height: number;
  top: number;
  left: number;
}

/**
 * Center a new popup window even on dualscreen
 * @link http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
 */
export default function getPopupClientRect(width: number, height: number): IPopupClientRect {
  const systemZoom = window.innerWidth / window.screen.availWidth;

  const finalWidth = width / systemZoom;
  const finalHeight = height / systemZoom;
  const left = (window.innerWidth - width) / 2 / systemZoom + window.screenLeft;
  const top = (window.innerHeight - height) / 2 / systemZoom + window.screenTop;

  return {
    width: finalWidth,
    height: finalHeight,
    top,
    left,
  };
}
