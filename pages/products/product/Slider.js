// components/Carousel.js
import Slider from "react-slick";
import Image from "next/image"
const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    showThumbs: false,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} className="carousel-image" width="400px"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
