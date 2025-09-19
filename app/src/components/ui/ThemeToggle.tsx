import { useTheme } from '../../context/ThemeContext.tsx';
import Toggle from './Toggle.tsx'; // Assuming Toggle.tsx is in the same directory

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      isOn={theme === 'dark'}
      onToggle={toggleTheme}
      label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    />
  );
}