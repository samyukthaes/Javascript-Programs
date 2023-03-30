class TodoItem {
    description: string;
    dueDate: Date;
    isComplete: boolean;
  
    constructor(description: string, dueDate: Date) {
      this.description = description;
      this.dueDate = dueDate;
      this.isComplete = false;
    }
  
    markComplete(): void {
      this.isComplete = true;
    }
  }
  
  class TodoList {
    items: TodoItem[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: TodoItem): void {
      this.items.push(item);
    }
  
    removeItem(item: TodoItem): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    showItems(): void {
      console.log("To-Do List:");
      this.items.forEach((item, index) => {
        const status = item.isComplete ? "✓" : " ";
        console.log(`${index + 1}. [${status}] ${item.description} (${item.dueDate.toDateString()})`);
      });
    }
  }
  
  function main(): void {
    const todoList = new TodoList();
  
    // Add some items to the list
    const item1 = new TodoItem("Finish homework", new Date("2023-04-02"));
    const item2 = new TodoItem("Buy groceries", new Date("2023-04-04"));
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
  