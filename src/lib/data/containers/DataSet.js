/**
 * DataSet.js
 *
 * Aggregates multiple DataLists (or raw Arrays) in preparation for plotting or performing simple
 * calculations.
 */

// @flow

import DataList from './DataList';

export default class DataSet {
  set: Array<DataList>;

  constructor() {
    this.set = [];
  }

  /**
   *
   *
   * @param {(Array<number> | DataList)} newList
   * @returns
   * @memberof DataSet
   */
  push(newList: Array<number> | DataList) {
    if (newList instanceof DataList) {
      return this.set.push(newList);
    } else if (newList instanceof Array) {
      return this.set.push(new DataList(newList));
    }
    return this.set.push(new DataList());
  }
}
