export interface TaskStrategy {
  addTask(task: string, add: (task: string) => void): void;
}
