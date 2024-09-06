import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
