import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 mt-20 my-5 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-5">
        <h1 className="text-4xl font-bold text-white mb-4">
          About Our Tutor-Parent Platform
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Connecting parents with expert tutors to help students excel in their
          studies. Our platform makes it easy to find the right tutor for your
          child's needs.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-5 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Expert Tutors
              </h3>
              <p className="mt-2 text-gray-300">
                Verified and highly experienced tutors to provide the best
                learning experience.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Personalized Learning
              </h3>
              <p className="mt-2 text-gray-300">
                Match tutors based on subject, experience, and teaching style.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Flexible Scheduling
              </h3>
              <p className="mt-2 text-gray-300">
                Choose a tutor based on availability that fits your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-white">1. Sign Up</h3>
              <p className="mt-2 text-gray-300">
                Parents and tutors create profiles with their details.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-white">
                2. Find a Match
              </h3>
              <p className="mt-2 text-gray-300">
                Parents browse tutors based on qualifications & subjects.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-white">
                3. Start Learning
              </h3>
              <p className="mt-2 text-gray-300">
                Connect with tutors and schedule sessions easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-5 bg-gray-800">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Sign up now and connect with expert tutors for personalized learning.
        </p>
        <Link to={"/search/tutors"}>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </Link>{" "}
      </section>
    </div>
  );
};

export default AboutPage;
