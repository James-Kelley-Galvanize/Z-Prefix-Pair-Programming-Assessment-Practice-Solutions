class ToDoList {
  constructor() {
    this.toDos = [];
    this.completed = {};
  }
  get items() {
    return this.toDos.reduce((obj, task) => {
      obj[task.toDoItem] = { ...task, status: this.completed[task.toDoItem] };
      return obj;
    }, {});
  }
  getNumberOfToDos() {
    return this.toDos.length;
  }
  addToDo(toDoItem, dueDate) {
    if (!this.containsToDo(toDoItem)) {
      this.toDos.push({ toDoItem, dueDate });
      this.completed[toDoItem] = false;
    }
  }
  containsToDo(item) {
    return !!this.toDos.find((task) => task.toDoItem === item);
  }
  deleteToDo(item) {
    if (this.containsToDo(item)) {
      this.toDos = this.toDos.filter((task) => task.toDoItem !== item);
      return true;
    } else {
      return false;
    }
  }
  getToDosWithDueDates() {
    return this.toDos.filter((task) => task.dueDate);
  }
  printAllToDos() {
    return this.toDos.reduce((list, task, index, toDoList) => {
      list += `${task.toDoItem}${task.dueDate ? ` (by ${task.dueDate})` : ``}${
        index === this.toDos.length - 1 ? `.` : `, `
      }`;
      return list;
    }, "To Do: ");
  }
  toDosDueToday(today) {
    return `Due Today: ${this.toDos
      .filter((task) => task.dueDate === today)
      .map((task) => task.toDoItem)
      .join(", ")}`;
  }
  updateStatusToDone(item) {
    if (this.containsToDo(item)) this.completed[item] = "done";
  }
  getListOfCompletedTasks() {
    let out = `Completed Items: ${this.toDos
      .reduce((list, task) => {
        if (this.completed[task.toDoItem] === "done") list.push(task.toDoItem);
        return list;
      }, [])
      .reverse()
      .join(", ")}`;

    return out;
  }
}

module.exports = ToDoList;
