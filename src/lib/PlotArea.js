// @flow

import Canvas from 'canvas-prebuilt';
import DataSet from './data/containers/DataSet';

type plotSize = {
  width: number,
  height: number,
};

export type PlotAreaOptions = {
  width: ?number,
  height: ?number,
};

export default class PlotArea {
  size: plotSize;
  surface: Canvas;

  constructor(options: PlotAreaOptions) {
    // Default to an empty object if no options specified
    const passedOpts: PlotAreaOptions = options || {};

    // Store some options in this instance for calculations later on
    this.size = {
      width: passedOpts.width || 250,
      height: passedOpts.height || passedOpts.width || 250, // default to a 250 x 250 square
    };

    // Save the drawing surface to class instance
    this.surface = new Canvas(this.size.width, this.size.height);
  }

  plotBars(inputData: DataSet): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log(this.size);
      if (!inputData) {
        return reject(new Error('No values given!'));
      }
      return setTimeout(() => resolve(true), 1000);
    });
  }

  /**
   * Export the drawing surface as a data URL that can be converted to binary format or displayed
   * directly in a HTML <img> tag.
   *
   * @returns {Promise<string>} A Promise that resolves with the data URL for the image since
   * encoding more complex plots may take some time.
   * @memberof PlotArea
   */
  getDataUri(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.surface.toDataURL('image/png', (err: Error, png: string) => {
        if (err) {
          return reject(err.message);
        }

        return resolve(png);
      });
    });
  }
}
