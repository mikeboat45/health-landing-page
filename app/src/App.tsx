import HomePage from './pages/HomePage.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100"> {/* Removed flex and justify-center to allow HomePage to take full width */}
      <HomePage />
    </div>
  );
}

export default App;