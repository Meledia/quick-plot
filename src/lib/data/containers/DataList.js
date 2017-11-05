// @flow

type DataListInitObject = {
  numbers?: Number[],
  units?: String,
};

export default class DataList {
  numbers: Number[];
  units: ?String;

  /**
   * Creates a new DataList with initial settings and data if provided.
   * @param {Number[] | Number | DataListInitObject} inputData Accepts an initialization settings
   * object or initial data as an array of numbers or a single number.
   */
  constructor(inputData?: Number[] | Number | Object) {
    if (inputData) {
      if (inputData instanceof Number) {
        // Wrap the initial datum in an array and save it
        this.numbers = [inputData];
      } else if (inputData instanceof Array) {
        // Save initial data set
        this.numbers = inputData;
      } else {
        const init: DataListInitObject = inputData;
        // Sort through input data and set up class instance properties accordingly
        this.numbers = init.numbers || []; // default to empty array if not defined
        this.units = init.units;
      }
    } else {
      // No setup data provided, at least set numbers to empty array
      this.numbers = [];
    }
  }
}
