import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaUser, FaPhone, FaEnvelope, FaThumbtack, FaChevronDown } from 'react-icons/fa';

export default function PartnerManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Sample CSR data
  const csrItems = [
    {
      id: 1,
      username: 'Username',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      email: 'xxxx@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Done',
      pinned: false
    },
    {
      id: 2,
      username: 'Username',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      email: 'xxxx@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Pending',
      pinned: true
    },
    {
      id: 3,
      username: 'Username',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      email: 'xxxx@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Cancel',
      pinned: false
    }
  ];

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === csrItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(csrItems.map(item => item.id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    // This would typically update the backend
    console.log(`Changing status for item ${id} to ${newStatus}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Done':
        return 'text-green-500';
      case 'Pending':
        return 'text-yellow-500';
      case 'Cancel':
        return 'text-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Filter items based on selected status
  const filteredItems = selectedStatus === 'All' 
    ? csrItems 
    : csrItems.filter(item => item.status === selectedStatus);

  const paginationPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-5xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
          Partner Management
        </h1>

        {/* Search and Filter */}
        <div className="flex justify-start items-center gap-3">
          <div className="relative w-1/4 ">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowStatusFilter(!showStatusFilter)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaFilter className="w-4 h-4 text-gray-600" />
              <span className="text-sm" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                {selectedStatus}
              </span>
              <FaChevronDown className="w-3 h-3 text-gray-600" />
            </button>
            
            {showStatusFilter && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setSelectedStatus('All');
                      setShowStatusFilter(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedStatus === 'All' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    All Status
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus('Done');
                      setShowStatusFilter(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedStatus === 'Done' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Done
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus('Pending');
                      setShowStatusFilter(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedStatus === 'Pending' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus('Cancel');
                      setShowStatusFilter(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedStatus === 'Cancel' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* CSR Items */}
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="relative border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  {item.pinned && (
                    <FaThumbtack className="absolute top-2 right-2 text-[#F97316] rotate-45" />
                  )}
                  
                  {/* Header with username and date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaUser className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="font-bold text-lg" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                        {item.username}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                      {item.date}
                    </span>
                  </div>

                  {/* Contact information */}
                  <div className="flex items-center mb-4 space-x-6">
                    <div className="flex items-center">
                      <FaPhone className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-700" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        Contact: {item.contact}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="text-gray-700" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        Email: {item.email}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    {item.description}
                  </p>

                  {/* Status dropdown */}
                  <div className="flex justify-end">
                    <div className="relative  text-left">
                      <select
                        className={`text-sm font-semibold ${getStatusColor(item.status)} `}
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        style={{ fontFamily: "Pally-Regular, sans-serif" }}
                      >
                        <option value="Done" className="text-green-500">Done</option>
                        <option value="Pending" className="text-yellow-500">Pending</option>
                        <option value="Cancel" className="text-red-500">Cancel</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
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
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Management Actions */}
          <div className="w-30 h-48 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col">
            <h3 className="text-sm font-bold text-black mb-3" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
              Manage
            </h3>
            
            <div className="space-y-2">
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Create
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Update
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Delete
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Mark
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
