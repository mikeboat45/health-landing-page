import Hero from '../components/landing/Hero.tsx';
import About from '../components/landing/About.tsx';
import Services from '../components/landing/Services.tsx';
import Contact from '../components/landing/Contact.tsx';
import ThemeToggle from '../components/ui/ThemeToggle.tsx'; // New import

export default function HomePage() {
  return (
    <div>
      <div className="absolute top-4 right-4 z-10"> {/* Position ThemeToggle */}
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}