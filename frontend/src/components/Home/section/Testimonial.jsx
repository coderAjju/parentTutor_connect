import React from "react";
import { SwiperComponent } from "./Swiper";

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

const TestimonialSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Testimonials
      </h2>
      <SwiperComponent />
    </div>
  );
};

export default TestimonialSection;
