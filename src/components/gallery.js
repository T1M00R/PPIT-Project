import React from 'react';
import muscles from '../images/muscles.jpg';
import workout from '../images/workout.jpg'
import { useState } from 'react';

const Gallery = () => {


const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };
  return (
    <div className="gallery">
      <div className="gallery-item">
      <img src={muscles} alt="Image 1" width={300} onClick={handleImageClick}/>
      </div>
      <div className="gallery-item">
      <img src={workout} alt="Image 2" width={300} onClick={handleImageClick}/>
      </div>
      {selectedImage && (
        <div className="image-modal" onClick={handleImageClose}>
          <img src={selectedImage} alt="Selected Image" width={800}/>
        </div>
      )}
    </div>

  );
};

export default Gallery;
