'use client';

import React, { useEffect, useState } from 'react';
import BaseWidget from './BaseWidget';
import TodoObserver from '@/observers/TodoObserver';
import { SimpleAddStrategy } from '@/strategies/SimpleAddStrategy';
import { ValidatedAddStrategy } from '@/strategies/ValidatedAddStrategy';
import { TaskStrategy } from '@/strategies/TaskStrategy';
import { NewsAdapter } from '@/lib/Adapter';

const mockNews = [{ headline: 'Adapter Pattern Working!' }];

const TodoWidget = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [strategy, setStrategy] = useState<TaskStrategy>(
    new SimpleAddStrategy()
  );

  useEffect(() => {
    TodoObserver.subscribe(setTasks);
    NewsAdapter.adapt(mockNews);
  }, []);

  const addTask = (task: string) => {
    TodoObserver.addTask(task);
  };

  const handleAdd = () => {
    const input = document.getElementById('task') as HTMLInputElement;
    strategy.addTask(input.value, addTask);
    input.value = '';
  };

  return (
    <BaseWidget>
      <h2>Pattern Widget</h2>

      <select
        onChange={(e) =>
          setStrategy(
            e.target.value === 'validated'
              ? new ValidatedAddStrategy()
              : new SimpleAddStrategy()
          )
        }
      >
        <option value="simple">Simple Strategy</option>
        <option value="validated">Validated Strategy</option>
      </select>

      <div>
        <input id="task" placeholder="Enter task" />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </BaseWidget>
  );
};

export default TodoWidget;
