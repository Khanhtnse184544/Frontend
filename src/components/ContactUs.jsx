import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ContactUs({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    contact: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-xl font-bold"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#D68C45] mb-6" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
          Contact us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone or Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
              Your Phone or Email
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent"
              style={{ fontFamily: 'Pally-Regular, sans-serif' }}
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
              What about
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent appearance-none"
              style={{ fontFamily: 'Pally-Regular, sans-serif' }}
            >
              <option value="">--- ---</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
              Note
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent resize-none"
              style={{ fontFamily: 'Pally-Regular, sans-serif' }}
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#D68C45] text-white px-6 py-3 rounded-lg font-bold flex items-center space-x-2 hover:bg-[#B87A3A] transition-colors duration-300 shadow-lg"
              style={{ fontFamily: 'Pally-Bold, sans-serif' }}
            >
              <FaHeart className="text-sm" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
