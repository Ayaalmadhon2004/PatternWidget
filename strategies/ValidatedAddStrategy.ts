import { TaskStrategy } from './TaskStrategy';

export class ValidatedAddStrategy implements TaskStrategy {
  addTask(task: string, add: (task: string) => void) {
    if (!task.trim()) {
      alert('Task cannot be empty');
      return;
    }
    add(task);
  }
}
