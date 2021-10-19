import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda1.jpg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda2.jpg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda3.jpeg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda4.jpeg',
    'https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda5.jpg',
  ];
  return (
    <>
      <div className="mx-auto flex flex-wrap justify-center">
        {images.map((url, index) => (
          <img
            onClick={() => {
              setSelectedImage(index);
              setIsOpen(true);
            }}
            src={url}
            className="object-cover h-64 w-96 m-2"
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[selectedImage]}
          nextSrc={images[(selectedImage + 1) % images.length]}
          prevSrc={images[(selectedImage + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          enableZoom={(false)}
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