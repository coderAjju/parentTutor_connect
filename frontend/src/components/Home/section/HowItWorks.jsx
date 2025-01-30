import React, { useState } from "react";
import { UserPlus, Search, Calendar, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    icon: UserPlus,
    description:
      "Create your free account in minutes. Tell us about your child and their learning needs.",
    color: "blue",
  },
  {
    id: 2,
    title: "Search Tutors",
    icon: Search,
    description:
      "Browse through our verified tutors, read reviews, and find the perfect match for your child.",
    color: "indigo",
  },
  {
    id: 3,
    title: "Book Sessions",
    icon: Calendar,
    description:
      "Schedule sessions at your preferred time. Start your childs journey to academic success.",
    color: "violet",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting started with EduConnect is easy. Follow these simple steps
            to find the perfect tutor for your child.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative p-8 border-2 border-blue-500 md:border-0  rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                activeStep === step.id ? "ring-2 ring-blue-500 :scale-105" : ""
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
            >
              <div className="absolute -top-6 left-8">
                <div
                  className={`w-12 h-12 rounded-full bg-${step.color}-100 flex items-center justify-center`}
                >
                  <step.icon className={`w-6 h-6 text-blue-600`} />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <span className={`text-blue-600 font-bold mr-2`}>
                    Step {step.id}
                  </span>
                  <ArrowRight className={`w-4 h-4 text-blue-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              <div
                className={`mt-6 flex justify-end ${
                  activeStep === step.id ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
