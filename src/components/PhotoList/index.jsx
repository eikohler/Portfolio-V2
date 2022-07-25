import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList(){

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }    
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section>
      <div>
        {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
        <div className="flex-row">
          {photos.map((image, i) => (
            <img
              src={require(`../../assets/small/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoList;