'use client';
import { useState } from 'react';
import AppConfig from '../lib/AppConfig';
import TodoWidget from '../components/TodoWidget';
import { withBorder } from '../decorators/withBorder';
import { useAdaptive } from '../hooks/useAdaptive';

const DecoratedWidget = withBorder(TodoWidget);

export default function Home() {
  const size = useAdaptive();
  const config = AppConfig.getInstance();

  const [theme, setTheme] = useState(config.theme);

  const toggleTheme = () => {
    config.toggleTheme();   
    setTheme(config.theme);
  };

  return (
    <div
      style={{
        padding: size === 'mobile' ? '15px' : '40px',
        background: theme === 'light' ? '#f4f4f4' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
      }}
    >
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>

      <DecoratedWidget />
    </div>
  );
}
