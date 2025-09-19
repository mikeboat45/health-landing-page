import HomePage from './pages/HomePage.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx'; // New import

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;