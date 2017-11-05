// @flow

type DataListInitObject = {
  numbers?: number[],
  units?: string,
  independent?: boolean,
};

export default class DataList {
  numbers: number[];
  units: ?string;
  independent: boolean;

  /**
   * Creates a new DataList with initial settings and data if provided.
   * @param {number[] | number | DataListInitObject} inputData Accepts an initialization settings
   * object or initial data as an array of numbers or a single number.
   */
  constructor(inputData?: number[] | number | Object) {
    // Initialize instance with bare essential defaults before checking for input
    this.numbers = [];
    this.independent = false;

    if (inputData) {
      if (typeof inputData === 'number') {
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
        this.independent = Boolean(init.independent);
      }
    }
  }
}
