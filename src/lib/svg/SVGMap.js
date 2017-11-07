// @flow

import { SVG } from './index';

type Size = {
  width: number,
  height?: number,
};

type MapInitOptions = {
  size?: Size,
  viewBoxSize?: Size,
};

const DEFAULT_XML_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
const DEFAULT_SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export default class SVGMap extends Array<SVG> {
  size: Size;
  viewBoxSize: Size;
  xmlNamespace: string;
  svgNamespace: string;

  constructor(options?: MapInitOptions) {
    super();

    if (options) {
      // Initialization options provided - override defaults if provided
      this.viewBoxSize = options.viewBoxSize || {
        width: 100,
      };
      this.size = options.size || {
        width: 200,
      };
    } else {
      // Assign default values
      // Default ViewBox proportioning
      this.viewBoxSize = {
        width: 100,
      };

      // Default SVG size in pixels
      this.size = {
        width: 200,
      };
    }

    // Always set the XML and SVG namespaces on our own for now
    this.svgNamespace = DEFAULT_SVG_NAMESPACE;
    this.xmlNamespace = DEFAULT_XML_NAMESPACE;
  }

  serialize(): string {
    // Reduce map to a string representation based on stored SVG type
    const SVGInner = this.reduce((accumSVG, currentSVG) => {
      if (currentSVG instanceof SVG) {
        return `${accumSVG}  ${currentSVG.toString()}\r\n`;
      }
      // If the current item isn't an SVG shape, skip it
      return accumSVG;
    }, '');

    return `<svg\r\n  xmlns="${this.xmlNamespace}"\r\n  xmlns:svg="${this
      .svgNamespace}"\r\n  width="${this.size.width}"\r\n  height="${this.size.height ||
      this.size.width}"\r\n  viewBox="0 0 ${this.viewBoxSize.width} ${this.viewBoxSize.height ||
      this.viewBoxSize.width}"\r\n>\r\n${SVGInner}</svg>`;
  }
}
