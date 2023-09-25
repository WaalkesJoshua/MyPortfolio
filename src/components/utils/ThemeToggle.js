// ThemeToggle.js
import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
