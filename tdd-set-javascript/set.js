class GalvanizeSet {
  constructor() {
    this.values = {};
  }
  get allValues() {
    return Object.keys(this.values);
  }
  insert(item) {
    // console.log(`adding `, item, `to set`);
    this.values[item] = true;
  }
  getSize() {
    return this.allValues.length;
  }
  contains(value) {
    return value in this.values;
  }
  delete(value) {
    if (value in this.values) {
      delete this.values[value];
      return true;
    }
    return false;
  }
}

module.exports = GalvanizeSet;
