// @flow

import Canvas from 'canvas-prebuilt';

type plotSize = {
  width: number,
  height: number,
};

type plotAreaOptions = {
  width: ?number,
  height: ?number,
};

export default class PlotArea {
  size: plotSize;
  surface: Canvas;

  constructor(options: plotAreaOptions) {
    // Default to an empty object if no options specified
    const passedOpts: plotAreaOptions = options || {};

    // Store some options in this instance for calculations later on
    this.size = {
      width: passedOpts.width || 250,
      height: passedOpts.height || passedOpts.width || 250, // default to a 250 x 250 square
    };

    // Save the drawing surface to class instance
    this.surface = new Canvas(this.size.width, this.size.height);
  }

  drawBars() {
    const drawingCtx = this.surface.getContext('2d');
    drawingCtx.fillStyle = 'green';
    drawingCtx.fillRect(this.size.width / 2, 0, this.size.width / 10, this.size.height / 10);
    return drawingCtx;
  }

  getDataUri() {
    return this.surface.toDataURL();
  }
}
