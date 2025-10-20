import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ContactUsPopup({ isOpen, onClose, onSubmit }) {
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

    // Auto-resize textarea
    if (e.target.name === 'message') {
      const textarea = e.target;
      textarea.style.height = 'auto';
      const computedStyles = window.getComputedStyle(textarea);
      const lineHeight = parseInt(computedStyles.lineHeight || '20', 10);
      const maxLines = 6; // limit to 3 lines
      const maxHeight = lineHeight * maxLines;
      const newHeight = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = newHeight + 'px';
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form after submission
    setFormData({
      contact: "",
      subject: "",
      message: ""
    });
    onClose();
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      contact: "",
      subject: "",
      message: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[30px] p-15 max-w-3xl w-full h-[550px] mx-4 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-8 text-[#D68C45] text-4xl hover:text-[#B87A3A] transition-colors"
        >
          ×
        </button>

        {/* Title */}
        <h2
          className="text-4xl font-bold text-[#D68C45] mb-6"
          
        >
          Liên hệ
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Phone or Email Field */}
          <div>
            <label
              className="block text-gray-500 text-xl font-semibold mb-2"
              
            >
              Số điện thoại hoặc email
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Số điện thoại hoặc email"
              className="w-full px-0 py-2 text-sm border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent"
              
              required
            />
          </div>

          

           {/* Message Field */}
           <div>
             <label
               className="block text-gray-500 text-xl font-semibold mb-2"
               
             >
               Nội dung
             </label>
             <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung"
                  rows="1"
                  className="w-full px-0 py-2 text-sm border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent leading-6 resize-none"
                  
                  required
                />
              
             </div>
           </div>

          {/* Send Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#D68C45] text-white w-[300px] text-lg py-2 rounded-xl font-bold flex items-center justify-center hover:bg-[#B87A3A] transition-colors duration-300 shadow-lg mt-2"
              
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
