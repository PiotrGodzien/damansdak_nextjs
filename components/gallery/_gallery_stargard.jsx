import { useState } from "react";
import Lightbox from "react-image-lightbox";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "/realizacje/stargard/stargard_damansdak.jpg",
    // "https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda2.jpg",
    // "https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda3.jpeg",
    // "https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda4.jpeg",
    // "https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska/ruda5.jpg",
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto">
        {images.map((url, index) => (
          <img
            onClick={() => {
              setSelectedImage(index);
              setIsOpen(true);
            }}
            src={url}
            className="object-cover h-64 m-2 w-96"
            alt={`Realizacja w Rudzie Śląskiej ${index}`}
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[selectedImage]}
          nextSrc={images[(selectedImage + 1) % images.length]}
          prevSrc={images[(selectedImage + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          enableZoom={false}
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
