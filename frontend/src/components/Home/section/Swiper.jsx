import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    review:
      "This platform has helped me improve my grades tremendously. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Smith",
    review:
      "The teachers are very knowledgeable and supportive. Great experience!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    review: "A fantastic learning experience. I love the interactive sessions!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    name: "Daniel Johnson",
    review:
      "The best platform for students looking for quality education. 10/10!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 5,
    name: "Olivia Brown",
    review: "I found the perfect tutor here. Very satisfied with the service!",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

export const SwiperComponent = () => {
  return (
    <div className="py-4 pt-6">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {testimonials.slice(0, 3).map((testimonial) => (
          <SwiperSlide>
            <div
              key={testimonial.id}
              className="mx-auto dark:bg-gray-800 p-6 rounded-lg shadow-lg lg:w-1/2 w-[80%] transition-transform hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-center mt-3 text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                "{testimonial.review}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
