// @flow

type svgSize = {
  width: number,
  height: number,
};

type svgNs = {
  xmlns: string,
  ns: string,
};

type svgStyle = {
  fill: string,
  stroke: string,
  strokeWidth: number,
}

type svgWrapper = {
  open: string,
  close: string,
}

type circleData = {
  radius: number,
  cx: number,
  cy: number,
  style: svgStyle,
}

export default class SVG {
  size: svgSize;
  ns: svgNs;
  wrapper: svgWrapper;
  constructor(options) {
    const passedOpts = options || {};
    this.viewBox = {
      minx: passedOpts.minx || 0,
      miny: passedOpts.miny || 0,
      width: passedOpts.width || 100,
      height: passedOpts.height || passedOpts.width || 100, // default to a 250 x 250 square
    };

    this.ns = {
      xmlns: passedOpts.xmlns || 'http://www.w3.org/2000/xmlns/',
      ns: passedOpts.ns || 'http://www.w3.org/2000/svg',
    };

    this.wrapper = {
      open: `<svg xmlns="${this.ns.xmlns}" xmlns:svg="${this.ns.ns}" height="${this.size.height}" width="${this.size.width}">`,
      close: '</svg>',
    };
  }
}


export class Circle extends SVG {
  constructor() {
    super();
    this.svg = {};
    this.svg.viewBox = `${this.viewBox.minx} ${this.viewBox.miny} ${this.viewBox.width} ${this.viewBox.height}`;
    this.svg.ns = this.ns.xmlns;
    this.svg.ns = this.ns.ns;
    this.svg.width = this.size.width;
    this.svg.height = this.size.height;
  }
  default(options : circleData) {
    return new Promise((resolve, reject) => {
      if (!options) {
        return reject(new Error('No values given!'));
      }
      this.svg.circle = {};
      this.svg.circle.cx = options.cx || 0;
      this.svg.circle.cy = options.cy || 0;
      this.svg.circle.r = options.radius || 50;
      this.svg.circle.stroke = options.style.stroke || '#232323';
      this.svg.circle.strokeWidth = options.style.strokeWidth || 2;
      this.svg.circle.fill = options.style.fill || '';
      return resolve(this.svg);
    });
  }
}
