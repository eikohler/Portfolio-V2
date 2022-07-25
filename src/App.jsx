import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import PhotoList from './components/PhotoList';

function App() {  
  const [currentNav, setCurrentNav] = useState('about');

  return (
    <>
      <Nav
        setCurrentNav={setCurrentNav}
        currentNav={currentNav}
      ></Nav>
      <main className='container my-5'>
      {currentNav === 'about' && <About />}
      {currentNav === 'portfolio' && <PhotoList />}
      {currentNav === 'contact' && <ContactForm />}      
      {currentNav === 'resume' && <About />}
      </main>
    </>
  );
}

export default App;