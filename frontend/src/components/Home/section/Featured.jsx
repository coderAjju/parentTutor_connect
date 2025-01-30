import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  GraduationCap,
  Clock,
  Award,
} from "lucide-react";
import { Caraousal } from "./Caraousal";

const tutors = [
  {
    id: 1,
    name: "Sarah Johnson",
    subject: "Mathematics",
    experience: "8 years",
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Mon-Fri",
  },
  {
    id: 2,
    name: "Michael Chen",
    subject: "Physics",
    experience: "6 years",
    rating: 4.8,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Weekends",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    subject: "English Literature",
    experience: "10 years",
    rating: 5.0,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Flexible",
  },
  {
    id: 4,
    name: "David Kim",
    subject: "Chemistry",
    experience: "7 years",
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Evenings",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    subject: "Biology",
    experience: "9 years",
    rating: 4.9,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availability: "Mon-Sat",
  },
];

export function FeaturedTutors() {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">
            Featured Tutors
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from our highly qualified and experienced tutors who are
            passionate about education
          </p>
        </div>

        <Caraousal teachers={tutors} />
      </div>
    </section>
  );
}
