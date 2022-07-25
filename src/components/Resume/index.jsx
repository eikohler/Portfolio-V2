import React from 'react';

function Resume() {
  return (
    <div className='links'>
      <a href="https://my.indeed.com/p/xqeac6x" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-file-text-o"></i> Resume</a>
      <h3 className='mt-5'>Proficiencies</h3>
      <ul className='dots'>
        <li>
            HTML, CSS, JavaScript
        </li>
        <li>
            Git and GitHub
        </li>
        <li>
            APIs, BootStrap
        </li>
        <li>
            Node.js
        </li>
        <li>
            Object Oriented Programming
        </li>
        <li>
            ExpressJS
        </li>
        <li>
            MySQL, MongoDB
        </li>
        <li>
            React
        </li>
      </ul>
    </div>
  );
}

export default Resume;