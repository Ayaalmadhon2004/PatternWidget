import { TaskStrategy } from './TaskStrategy';

export class SimpleAddStrategy implements TaskStrategy {
  addTask(task: string, add: (task: string) => void) {
    add(task);
  }
}
