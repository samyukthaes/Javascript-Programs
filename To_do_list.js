var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    TodoItem.prototype.markComplete = function () {
        this.isComplete = true;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    TodoList.prototype.showItems = function () {
        console.log("To-Do List:");
        this.items.forEach(function (item, index) {
            var status = item.isComplete ? "✓" : " ";
            console.log("".concat(index + 1, ". [").concat(status, "] ").concat(item.description, " (").concat(item.dueDate.toDateString(), ")"));
        });
    };
    return TodoList;
}());
function main() {
    var todoList = new TodoList();
    // Add some items to the list
    var item1 = new TodoItem("Finish homework", new Date("2023-04-02"));
    var item2 = new TodoItem("Buy groceries", new Date("2023-04-04"));
    todoList.addItem(item1);
    todoList.addItem(item2);
    // Show the current items in the list
    todoList.showItems();
    // Mark an item as complete and remove another item
    item1.markComplete();
    todoList.removeItem(item2);
    // Show the updated items in the list
    todoList.showItems();
}
main();
