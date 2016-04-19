import IFactory from './IFactory';
import Task from './task';

class TaskFactory implements IFactory<Task> {
    create(param: string) : Task {
        return new Task(param);
    }
}

export default TaskFactory;