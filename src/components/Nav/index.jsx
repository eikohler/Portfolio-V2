import React from 'react';

function Nav(props) {
  const {
    setCurrentNav,
    currentNav
  } = props;

  return (
    <header className="container d-flex align-items-center my-3 space-between">
      <h2>
        <a data-testid="link" href="/Portfolio-V2">
          <span role="img" aria-label="camera"> 😊</span> Eric Kohler
        </a>
      </h2>
      <nav>
        <ul className="flex-row mb-0">
          <li className={`mx-2 ${currentNav === 'about' && `navActive`}`}>
            <span onClick={() => setCurrentNav('about')}>About Me</span>
          </li>
          <li className={`mx-2 ${currentNav === 'portfolio' && `navActive`}`}>
            <span onClick={() => setCurrentNav('portfolio')}>Portfolio</span>
          </li>
          <li className={`mx-2 ${currentNav === 'contact' && 'navActive'}`}>
            <span onClick={() => setCurrentNav('contact')}>Contact</span>
          </li>
          <li className={`mx-2 ${currentNav === 'resume' && `navActive`}`}>
            <span onClick={() => setCurrentNav('resume')}>Resume</span>
          </li>          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;