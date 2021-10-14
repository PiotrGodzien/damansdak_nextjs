import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    'https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg',
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {images.map((url, index) => (
          <img
            onClick={() => {
              setSelectedImage(index);
              setIsOpen(true);
            }}
            src={url}
            className="object-cover h-64 m-2 w-128"
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[selectedImage]}
          nextSrc={images[(selectedImage + 1) % images.length]}
          prevSrc={images[(selectedImage + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setSelectedImage(
              (selectedImage + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImage((selectedImage + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default Gallery;