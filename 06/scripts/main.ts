import Elements from "./elements";
import TaskFactory from "./taskFactory";
import Task from "./task";

class Main {
    private _taskFactory: TaskFactory;
    private tasks: Array<Task>;

    constructor() {
        this._taskFactory = new TaskFactory();
        this.tasks = [];
    }

    createNewTask(name: string): Task {
        var amountOfTasks = this.tasks.length;
        var task = this._taskFactory.create(name);
        if (this.checkIfExists(task)) return null;
        this.tasks[amountOfTasks] = task;
        return this.tasks[amountOfTasks];
    }

    completeTask(task: Task) {
        task.completeTask();
    }

    deleteTask(task: Task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index);

        console.log(this.tasks);
    }

    deleteAllTasks() {
        this.tasks = [];
    }

    deleteAllCompleted() {
        for (var index = 0; index < this.tasks.length; index++) {
            if (this.tasks[index].isCompleted) {
                var task = this.tasks[index];
                this.deleteTask(task);
                Elements.deleteTableRow(task);
            }
        }
    }

    run() {
        this.createElementFunctions();
    }

    private checkIfExists(task: Task): boolean {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].name === task.name)
                return true;
        }

        return false;
    }

    private createElementFunctions() {
        Elements.addBtn.onclick = () => {
            if (Elements.taskName.value == "") return;
            var task = this.createNewTask(Elements.taskName.value);
            if (task == null) return;
            Elements.createAndAppendTableRow(task);
            Elements.clearValue(Elements.taskName);
        };

        Elements.delAllBtn.onclick = () => {
            this.deleteAllTasks();
            Elements.tasksTable.innerHTML = "";
        }

        Elements.delComBtn.onclick = () => {
            this.deleteAllCompleted();
        }
    }
}

var main = new Main();
main.run();
