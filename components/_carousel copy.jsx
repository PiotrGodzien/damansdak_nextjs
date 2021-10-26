import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div>
      <Carousel infiniteLoop showThumbs={false} transitionTime={1000} autoPlay>
        <div>
          <img className="object-cover h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg" />
        </div>
        <div>
          <img className="object-cover h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" />
        </div>
        <div>
          <img className="object-cover h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg" />
        </div>
      </Carousel>
    </div>
  );
}