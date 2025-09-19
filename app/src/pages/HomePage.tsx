import Hero from '../components/landing/Hero.tsx';
import About from '../components/landing/About.tsx';
import Services from '../components/landing/Services.tsx';
import Contact from '../components/landing/Contact.tsx';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}