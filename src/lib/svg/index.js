// @flow

const ns = 'http://www.w3.org/2000/svg';
const xmlns = 'http://www.w3.org/2000/xmlns/';

type svgSize = {
    width: number,
    height: number,
  };

type svgNs = {
    xmlns: string,
    ns: string,
};

type svgWrapper = {
    open: string,
    close: string,
}

type circleData = {
    radius: number,
    cx: number,
    cy: number,
}

export default class SVG {
    size: svgSize;
    ns: svgNs;
    wrapper: svgWrapper;
    constructor(options) {
      const passedOpts = options || {};
      this.size = {
        width: passedOpts.width || 250,
        height: passedOpts.height || passedOpts.width || 250, // default to a 250 x 250 square
      };

      this.ns = {
        xmlns: passedOpts.xmlns || xmlns,
        ns: passedOpts.ns || ns,
      };

      this.wrapper = {
        open: `<svg xmlns="${this.ns.xmlns}" xmlns:svg="${this.ns.ns}" height="${this.size.height}" width="${this.size.width}">`,
        close: '</svg>',
      };
    }

    circle(inputData: circleData) {
      const circle = {};
      return new Promise((resolve, reject) => {
        if (!inputData) {
          return reject(new Error('No values given!'));
        }
        const cx = this.size.width / 2;
        const cy = this.size.height / 2;
        const r = inputData.radius || this.size.width > this.size.height ? this.size.height : this.size.width;
        circle.elem = `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
        circle.svg = this.wrapper.open + circle.elem + this.wrapper.close;
        return resolve(circle);
      });
    }
}
