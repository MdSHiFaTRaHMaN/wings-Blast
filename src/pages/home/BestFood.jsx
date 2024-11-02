import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BestFood = () => {
  // Initialize ref with useRef hook
  const sliderRef = useRef(null);

  // Slider settings with responsiveness for sm: 1 card, md: 2 cards, lg: 3 cards
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,  // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 786,  // For screens < 1024px (lg)
        settings: {
          slidesToShow: 2,  // Show 2 slides for medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,  // For screens < 768px (md)
        settings: {
          slidesToShow: 1,  // Show 1 slide for small screens
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="text-black body-font w-full lg:w-8/12 mx-auto">
      <div className="container px-5 py-4 md:py-5 lg:py-24 mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-black text-5xl">For You</h1>
          <span className="my-5">Curated by Your Flavor Experts</span>
        </div>

        <div className="slider-container">
          {/* Attach ref to Slider component */}
          <Slider ref={sliderRef} {...settings} className="">
            <div className="p-4 cursor-pointer">
              <Link to="/details">
                <div className="h-full border-2 py-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-36 md:h-36 w-44 mx-auto object-cover object-center"
                    src="https://i.ibb.co/QN6L0cy/colorful-removebg-preview.png"
                    alt="Chicken Sandwich Combo"
                  />
                  <div className="px-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Chicken Sandwich Combo
                    </h1>
                    <p className="leading-relaxed text-sm mb-3">
                      1 crispy, juicy chicken sandwich with pickles in your choice of flavor, regular fries or veggie sticks, 1 dip and a 20oz drink
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 font-bold lg:mb-0">
                        CUSTOMIZE IT
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Duplicate the items to fill the slider */}
            <div className="p-4 cursor-pointer">
              <Link to="/details">
                <div className="h-full border-2 py-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-36 md:h-36 w-44 mx-auto object-cover object-center"
                    src="https://i.ibb.co/QN6L0cy/colorful-removebg-preview.png"
                    alt="Chicken Sandwich Combo"
                  />
                  <div className="px-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Chicken Sandwich Combo
                    </h1>
                    <p className="leading-relaxed text-sm mb-3">
                      1 crispy, juicy chicken sandwich with pickles in your choice of flavor, regular fries or veggie sticks, 1 dip and a 20oz drink
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 font-bold lg:mb-0">
                        CUSTOMIZE IT
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Duplicate the items to fill the slider */}
            <div className="p-4 cursor-pointer">
              <Link to="/details">
                <div className="h-full border-2 py-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-36 md:h-36 w-44 mx-auto object-cover object-center"
                    src="https://i.ibb.co/QN6L0cy/colorful-removebg-preview.png"
                    alt="Chicken Sandwich Combo"
                  />
                  <div className="px-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Chicken Sandwich Combo
                    </h1>
                    <p className="leading-relaxed text-sm mb-3">
                      1 crispy, juicy chicken sandwich with pickles in your choice of flavor, regular fries or veggie sticks, 1 dip and a 20oz drink
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 font-bold lg:mb-0">
                        CUSTOMIZE IT
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Duplicate the items to fill the slider */}
            <div className="p-4 cursor-pointer">
              <Link to="/details">
                <div className="h-full border-2 py-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-36 md:h-36 w-44 mx-auto object-cover object-center"
                    src="https://i.ibb.co/QN6L0cy/colorful-removebg-preview.png"
                    alt="Chicken Sandwich Combo"
                  />
                  <div className="px-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Chicken Sandwich Combo
                    </h1>
                    <p className="leading-relaxed text-sm mb-3">
                      1 crispy, juicy chicken sandwich with pickles in your choice of flavor, regular fries or veggie sticks, 1 dip and a 20oz drink
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 font-bold lg:mb-0">
                        CUSTOMIZE IT
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestFood;
