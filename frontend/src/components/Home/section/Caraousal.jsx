// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules

// Import Swiper styles
import "swiper/css";

export const Caraousal = ({ teachers }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // Add modules here
      spaceBetween={50}
      breakpoints={{
        320: { slidesPerView: 1 }, // Small screens
        640: { slidesPerView: 2 }, // Medium screens
        1024: { slidesPerView: 3 }, // Large screens
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {teachers.map((teacher) => (
        <SwiperSlide>
          <div
            key={teacher.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-60 object-cover object-center"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {teacher.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {teacher.subject}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Experience:{" "}
                <span className="font-medium">{teacher.experience}</span>
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-lg">
                  ★ {teacher.rating}
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  ({teacher.reviews} reviews)
                </span>
              </div>
              <p className="mt-2 text-sm text-blue-500 font-medium">
                Availability: {teacher.availability}
              </p>

              {/* Book Appointment Button */}
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
                Book Appointment
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
