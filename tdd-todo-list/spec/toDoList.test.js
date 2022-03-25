const ToDoList = require("../toDoList");

describe("ToDoList", () => {
  it("gets initialized as empty", () => {
    let list = new ToDoList();

    expect(list.getNumberOfToDos()).toEqual(0);
  });

  it("allows you to add an item to your To Do List", () => {
    let list = new ToDoList();

    list.addToDo("Grocery Shopping");
    expect(list.getNumberOfToDos()).toEqual(1);
  });

  it("allows you to check for specific To Do items", () => {
    let list = new ToDoList();
    expect(list.getNumberOfToDos()).toEqual(0);
    expect(list.containsToDo("Mow Lawn")).toEqual(false);

    list.addToDo("Mow Lawn");
    list.addToDo("Dust Ceiling Fan");
    list.addToDo("Laundry");
    expect(list.getNumberOfToDos()).toEqual(3);
    expect(list.containsToDo("Mow Lawn")).toEqual(true);
  });

  it("allows you to delete a To Do item if the item is present", () => {
    let list = new ToDoList();
    list.addToDo("Mop Wood Floors");
    list.addToDo("Organize Garage");
    expect(list.getNumberOfToDos()).toEqual(2);

    const deletionResult = list.deleteToDo("Mop Wood Floors");
    expect(deletionResult).toEqual(true);
    expect(list.getNumberOfToDos()).toEqual(1);
  });

  it("tells you a deletion failed if the item was not on the list", () => {
    let list = new ToDoList();
    list.addToDo("Laundry");
    list.addToDo("Unload Dishwasher");
    expect(list.getNumberOfToDos()).toEqual(2);

    const deletionResult = list.deleteToDo("Make Bed");
    expect(deletionResult).toEqual(false);
    expect(list.getNumberOfToDos()).toEqual(2);
  });

  it("prevents adding duplicate to do items", () => {
    let list = new ToDoList();

    list.addToDo("Make bed");
    list.addToDo("Make bed");
    expect(list.getNumberOfToDos()).toEqual(1);
  });

  it("allows you to optionally add due dates to to dos", () => {
    let list = new ToDoList();

    list.addToDo("Pay Phone Bill", "Friday");
    list.addToDo("Wash Car");
    list.addToDo("Pay Credit Card Bill", "Wednesday");

    expect(list.getToDosWithDueDates()).toEqual([
      { toDoItem: "Pay Phone Bill", dueDate: "Friday" },
      { toDoItem: "Pay Credit Card Bill", dueDate: "Wednesday" },
    ]);
  });

  it("prints a list of all toDos", () => {
    let list = new ToDoList();
    list.addToDo("Wash Dishes");
    list.addToDo("Pay Taxes", "Tuesday");
    list.addToDo("Buy Dog Food");
    list.addToDo("Make Dinner Reservations", "Thursday");

    expect(list.printAllToDos()).toEqual(
      "To Do: Wash Dishes, Pay Taxes (by Tuesday), Buy Dog Food, Make Dinner Reservations (by Thursday)."
    );
  });

  it("prints a list of all toDos due today", () => {
    let list = new ToDoList();
    let today = "Tuesday";
    list.addToDo("Mow Lawn", "Tuesday");
    list.addToDo("Vacuum Rugs");
    list.addToDo("Pay Phone Bill", "Tuesday");
    list.addToDo("Laundry");
    list.addToDo("Get Dog Food", "Friday");

    expect(list.getNumberOfToDos()).toEqual(5);
    expect(list.toDosDueToday(today)).toEqual(
      "Due Today: Mow Lawn, Pay Phone Bill"
    );
  });

  it("allows you to update the status of an item", () => {
    let list = new ToDoList();

    list.addToDo("Make Dinner Reservations");
    list.addToDo("Pay Taxes", "Friday");
    list.addToDo("Laundry");

    list.updateStatusToDone("Pay Taxes");
    expect(list.items["Pay Taxes"].status).toEqual("done");
  });

  it("allows you to see a list of all completed items", () => {
    let list = new ToDoList();

    list.addToDo("Mow Lawn", "Tuesday");
    list.addToDo("Vacuum Rugs");
    list.addToDo("Pay Phone Bill", "Tuesday");
    list.addToDo("Laundry");

    list.updateStatusToDone("Laundry");
    list.updateStatusToDone("Vacuum Rugs");

    expect(list.getListOfCompletedTasks()).toEqual(
      "Completed Items: Laundry, Vacuum Rugs"
    );
  });
});
