import React, { useState } from "react";
import axios from "axios";

const Contact = ({darkMode}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // State to manage loading icon

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when email is being sent
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false when email is delivered
    }
  };

  return (
    <div className={`${darkMode ? "bg-black text-white":"bg-white text-black"} min-h-screen flex items-center justify-center py-12`}>
      <div className="bg-white shadow-md rounded-lg p-8 m-4 max-w-md w-full relative">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Contact Me</h1>
        {loading && ( // Conditionally render the icon when loading is true
          <div className="absolute top-0 right-0 mt-4 mr-4">
            {/* Replace this with your loading icon */}
            <svg
              className="animate-spin h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-1.657 0-3.164-.64-4.303-1.709l1.303-1.303zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291l-1.303 1.303A7.962 7.962 0 0116 12h4c0-4.418-3.582-8-8-8v4z"
              ></path>
            </svg>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-indigo-600 text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-indigo-600 text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-indigo-600 text-white"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Sending..." : "Submit"} {/* Change button text based on loading state */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
