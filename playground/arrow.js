const tasks = {
    tasks: [
        {text: 'Grocery Shopping', completed: true},
        {text: 'Clean Yard', completed: false},
        {text: 'Film ourse', completed: false},
        {text: 'GroceryShopping', completed: false},
    ],
    getTaskToDo () {
        return this.tasks.filter(task => !task.completed)
    }
}

console.log(tasks.getTaskToDo())