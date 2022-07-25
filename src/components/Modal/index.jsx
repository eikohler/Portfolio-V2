import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const {name, description, link, github, index} = currentPhoto;
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/portfolio-images/${index}.jpg`)} alt="full preview" />
          <p>{description}</p>
          <div className='mb-4 links'>
            <a href={link} target="_blank" rel="noopener noreferrer"><i className="fa fa-television"></i></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
          </div>
          <button onClick={onClose} type="button">Close this modal</button>
        </div>
    </div>
  );
}

export default Modal;