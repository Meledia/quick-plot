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

type rectData = {
  x: number,
  y: number,
  width: number,
  height: number,
  rx: number,
  ry: number,
  style: svgStyle,
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
      const cx = inputData.cx || this.size.width / 2;
      const cy = inputData.cy || this.size.height / 2;
      const r = inputData.radius || this.size.width > this.size.height ? this.size.height : this.size.width;
      const fill = inputData.style.fill || '#232323';
      const stroke = inputData.style.stroke || '#232323';
      const strokeWidth = inputData.style.strokeWidth || 0;
      circle.elem = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
      circle.svg = this.wrapper.open + circle.elem + this.wrapper.close;
      return resolve(circle);
    });
  }

  rect(inputData: rectData) {
    const rect = {};
    return new Promise((resolve, reject) => {
      if (!inputData) {
        return reject(new Error('No values given!'));
      }
      const width = inputData.width || this.size.width;
      const height = inputData.height || this.size.height;
      const x = inputData.x || 0;
      const y = inputData.y || 0;
      const rx = inputData.rx || 0;
      const ry = inputData.ry || 0;
      const fill = inputData.style.fill || '#232323';
      const stroke = inputData.style.stroke || '#232323';
      const strokeWidth = inputData.style.strokeWidth || 0;
      rect.elem = `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" ry="${ry} fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
      rect.svg = this.wrapper.open + rect.elem + this.wrapper.close;
      return resolve(rect);
    });
  }
}