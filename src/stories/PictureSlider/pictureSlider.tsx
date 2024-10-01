import React, { useState } from "react";

import styling from "./picture.module.css";

export interface PictureSliderProps {
  images: string[];
  imgStyle?: React.CSSProperties;
  thumbnailStyle: React.CSSProperties;
}

const PictureSlider: React.FC<PictureSliderProps> = ({
  images,
  imgStyle,
  thumbnailStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styling.container}>
      <div className={styling.display_section}>
        <img
          className={styling.display_image}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div>
          <button className={styling.left_arrow} onClick={prevImage}>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727811633/Vector_gngqpf.svg"
              alt=""
            />
          </button>
          <button className={styling.right_arrow} onClick={nextImage}>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727811633/Vector_gngqpf.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <div style={{ overflowX: "hidden" }}>
        <div className={styling.thumbnail}>
          {images.map((image, index) => (
            <div className={styling.thumbnail_image}>
              <img
                key={index}
                style={{
                  cursor: "pointer",
                }}
                className={
                  index === currentIndex ? styling.images_hover : styling.images
                }
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureSlider;
