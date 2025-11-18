import './App.css'
import { useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from "./components/About";
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';

function App() {
  const waitlistRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <Hero waitlistRef={waitlistRef} />
      <About />
      <Waitlist ref={waitlistRef} />
      <Footer />
    </div>
  );
}

export default App
