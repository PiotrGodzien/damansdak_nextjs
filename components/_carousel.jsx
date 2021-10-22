import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div>
      <Carousel infiniteLoop showThumbs={false} autoPlay>
        <div>
          <img className="h-screen object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg" />
        </div>
        <div>
          <img className="h-screen object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" />
        </div>
        <div>
          <img className="h-screen object-cover" src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg" />
        </div>
      </Carousel>
    </div>
  );
}