import React from "react";

const ContactUs = () => {
  return (
    <section className=" text-gray-300 py-12 px-6 mb-5">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
        <p className="mb-6 text-gray-400">
          Have any questions or feedback? Fill out the form below and we'll get
          back to you soon.
        </p>

        {/* Contact Form */}
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
