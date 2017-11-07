// @flow

// Reuseable types for all SVG
type SVGSize = {
  width: number,
  height?: number,
};

type SVGStyle = {
  fill: string,
  stroke: string,
  strokeWidth: number,
};

type SVGPosition = {
  horizontal: number,
  vertical: number,
};

export class SVG {
  size: SVGSize;
  tag: string;

  constructor(size?: SVGSize) {
    this.tag = 'svg'; // default HTML tag for SVG

    this.size = size || {
      width: 25, // default to 25x25 square
    };
  }

  getElementAttributes() {
    return `    width="${this.size.width}"\r\n    height="${this.size.height || this.size.width}"`;
  }

  toString(): string {
    return `<${this.tag}\r\n${this.getElementAttributes()}\r\n  />`;
  }
}

// Circle-specific SVG types

type CircleInitOptions = {
  radius?: number,
  position?: SVGPosition,
  style?: SVGStyle,
};

export class Circle extends SVG {
  position: SVGPosition;
  style: ?SVGStyle;

  constructor(options?: CircleInitOptions) {
    const passedOpts = options || {};

    // Call SVG constructor with size if provided - simply set the size width to the desired radius
    super(passedOpts.radius ? { width: passedOpts.radius } : { width: 50 });

    // Default to centering on a 100x100 viewBox
    this.position = passedOpts.position || {
      horizontal: 50,
      vertical: 50,
    };

    // Pass along any style attributes, defined or not
    this.style = passedOpts.style;

    // Set the tag for a circle
    this.tag = 'circle';
  }

  getElementAttributes() {
    return `    cx="${this.position.horizontal}"\r\n    cy="${this.position
      .vertical}"\r\n    r="${this.size.width}"`;

    // TODO: Add style attributes if defined
  }
}
