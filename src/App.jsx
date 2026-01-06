import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import PracticeAreas from './components/sections/PracticeAreas';
import Team from './components/sections/Team';
import NotableCases from './components/sections/NotableCases';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import FeeStructure from './components/sections/FeeStructure';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <PracticeAreas />
        <Team />
        <NotableCases />
        <Testimonials />
        <Process />
        <FeeStructure />
        <Resources />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
