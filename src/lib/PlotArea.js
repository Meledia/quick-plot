export default class PlotArea {
  constructor(options) {
    // Default to an empty object if no options specified
    const passedOpts = options || {};

    // Store some options in this instance for calculations later on
    this.size = {
      width: passedOpts.width || 250,
      height: passedOpts.height || passedOpts.width || 250, // default to a 250 x 250 square
    };
  }
}
