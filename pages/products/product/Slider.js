// components/Carousel.js
import Slider from "react-slick";


const images = [
  { src: "../../../images/ap1.png", alt: "Product 1" },
  { src: "../../../images/sec.jpg", alt: "Product 2" },
  { src: "../../../images/wall.jpg", alt: "Product 3" },
];

const Carousel = () => {
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
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
