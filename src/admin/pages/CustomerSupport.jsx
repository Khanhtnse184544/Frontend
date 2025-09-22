import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaSearch, FaFilter, FaUser, FaStar, FaComment, FaShareAlt, FaEye, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CustomerSupport() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeedbacks, setSelectedFeedbacks] = useState([]);

  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      username: 'Username',
      date: '7 July 2025',
      rating: 5,
      comments: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      username: 'Username',
      date: '6 July 2025',
      rating: 4,
      comments: 1,
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      username: 'Username',
      date: '5 July 2025',
      rating: 5,
      comments: 5,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    }
  ];

  const handleSelectFeedback = (feedbackId) => {
    setSelectedFeedbacks(prev => 
      prev.includes(feedbackId) 
        ? prev.filter(id => id !== feedbackId)
        : [...prev, feedbackId]
    );
  };

  const handleSelectAll = () => {
    if (selectedFeedbacks.length === feedbacks.length) {
      setSelectedFeedbacks([]);
    } else {
      setSelectedFeedbacks(feedbacks.map(feedback => feedback.id));
    }
  };

  const handleShare = () => {
    console.log('Sharing feedback');
  };

  const handleHideFeedback = (feedbackId) => {
    console.log(`Hiding feedback ${feedbackId}`);
  };

  const handleDeleteFeedback = (feedbackId) => {
    console.log(`Deleting feedback ${feedbackId}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const paginationPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AdminLayout>
      <div className="space-y-6 mb-10">
        {/* Page Title */}
        <h1 className="text-5xl font-bold ms-10" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
          Customer Support
        </h1>

        <div className="flex gap-1 h-[70vh] px-1">
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col">
            {/* Feedback Management Title */}
            <h2 className="text-4xl font-bold text-black text-center mb-6" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
              Feedback Management
            </h2>

            {/* Search and Filter Bar */}
            <div className="flex items-center justify-end mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search feedback..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-20 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="ml-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FaFilter className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Feedback List */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {feedbacks.map((feedback) => (
                <div key={feedback.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FaUser className="w-5 h-5 text-black" />
                      <div>
                        <div className="text-lg font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                          {feedback.username}
                        </div>
                        <div className="text-sm text-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                          {feedback.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {renderStars(feedback.rating)}
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <span className="text-sm" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                          {feedback.comments}
                        </span>
                        <FaComment className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    {feedback.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>

                {paginationPages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-full text-sm font-medium ${
                      currentPage === page
                        ? 'bg-[#D1D5DC] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Management Actions */}
          <div className="w-35 h-60 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col">
            {/* Share Button */}
            <button
              onClick={handleShare}
              className="w-full bg-orange-500 text-white text-center py-3 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors mb-4"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              <FaShareAlt className="w-4 h-4" />
              Share
            </button>

            {/* Management Actions */}
            <div className="space-y-3">
              <button
                onClick={() => handleHideFeedback(1)}
                className="w-full flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                <FaEye className="w-4 h-4" />
                Hide Feedback
              </button>
              <button
                onClick={() => handleDeleteFeedback(1)}
                className="w-full flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                <FaTrash className="w-4 h-4" />
                Delete Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
