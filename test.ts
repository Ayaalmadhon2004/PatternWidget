import TodoObserver from './observers/TodoObserver';

const printTasks = (tasks: string[]) => {
  console.log('Current Tasks:', tasks);
};

TodoObserver.subscribe(printTasks);

TodoObserver.addTask('TypeScript');
TodoObserver.addTask('Build Next.js Project');
