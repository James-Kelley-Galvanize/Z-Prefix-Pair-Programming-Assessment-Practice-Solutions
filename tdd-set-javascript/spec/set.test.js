const GalvanizeSet = require("../set");

describe("Set", () => {
  it("gets initialized as empty", () => {
    let set = new GalvanizeSet();

    expect(set.getSize()).toEqual(0);
  });
  //
  it("allows you to insert an item", () => {
    let set = new GalvanizeSet();

    set.insert(1);
    expect(set.getSize()).toEqual(1);
  });
  //
  it("allows you to insert multiple items", () => {
    let set = new GalvanizeSet();
    let setSize = 10;

    for (let i = 0; i < setSize; i++) {
      set.insert(i);
    }

    expect(set.getSize()).toEqual(setSize);
  });
  //
  it("allows you to check for contents when empty", () => {
    let set = new GalvanizeSet();

    expect(set.contains(1)).toEqual(false);
  });
  //
  it("allows you to check for for missing contents", () => {
    let set = new GalvanizeSet();
    let setSize = 10;

    for (let i = 0; i < setSize; i++) {
      set.insert(i);
    }

    expect(set.contains(11)).toEqual(false);
  });
  //
  it("allows you to check for contents", () => {
    let set = new GalvanizeSet();
    let setSize = 10;

    for (let i = 0; i < setSize; i++) {
      set.insert(i);
    }
    expect(set.contains(1)).toEqual(true);
  });
  //
  it("tells you a deletion failed on an empty set", () => {
    let set = new GalvanizeSet();
    const deletionResult = set.delete(1);
    expect(deletionResult).toEqual(false);
    expect(set.getSize()).toEqual(0);
  });

  it("tells you deletion failed if an item is not present", () => {
    let set = new GalvanizeSet();
    let setSize = 10;

    for (let i = 0; i < setSize; i++) {
      set.insert(i);
    }

    const deletionResult = set.delete(11);
    expect(deletionResult).toEqual(false);
    expect(set.getSize()).toEqual(setSize);
  });

  it("tells you deletion succeeded if the item was present", () => {
    let set = new GalvanizeSet();
    let setSize = 10;

    for (let i = 0; i < setSize; i++) {
      set.insert(i);
    }

    const deletionResult = set.delete(5);
    expect(deletionResult).toEqual(true);
    expect(set.contains(5)).toEqual(false);
    expect(set.getSize()).toEqual(setSize - 1);
  });
  //
  it("prevents inserting duplicates", () => {
    let set = new GalvanizeSet();

    set.insert(1);
    set.insert(1);
    expect(set.getSize()).toEqual(1);
  });
});
