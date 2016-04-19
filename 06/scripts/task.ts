class Task {
    isCompleted: boolean
    
    constructor(public name: string) {
        this.isCompleted = false;
    }
    
    completeTask() {        
        this.isCompleted = !this.isCompleted;
        console.log(this.name + "is now completed:" + this.isCompleted);
        
    }
}

export default Task;
