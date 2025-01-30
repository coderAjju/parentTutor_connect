import { ArrowRight, Star, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const user = true;
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 lg:mt-0 mt-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
            Connect with Expert Tutors for Your Child's Success
          </h1>
          <p className="text-xl text-gray-600">
            Find qualified tutors who can provide personalized learning
            experiences and help your child excel in their studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={"/search/tutors"}>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                Find a Tutor
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            {!user && (
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
                Become a Tutor
              </button>
            )}
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">1000+ Tutors</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">4.9/5 Rating</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Tutor helping student"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Join 2000+ parents</p>
                <p className="text-gray-500">who trust our tutors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
