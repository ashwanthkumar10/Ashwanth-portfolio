import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <div className="bg-black text-white">
     <div className="mx-auto max-w-screen-2xl">
      <Header />
       <Hero />
       <About />
       <Skills />
       <Experience />
       {/* */}
       <Projects />
     
      
      <Footer />   
      </div>
      </div>
    </>
  );
};

export default App;
