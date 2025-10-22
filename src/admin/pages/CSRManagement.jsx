import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import Pagination from '../components/Pagination';
import { FaSearch, FaFilter, FaUser, FaPhone, FaEnvelope, FaThumbtack, FaChevronDown } from 'react-icons/fa';

export default function CSRManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Sample CSR data - now using state so it can be updated
  const [csrItems, setCsrItems] = useState([
    {
      id: 1,
      contactname: 'Minh',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Done',
      pinned: false
    },
    {
      id: 2,
      contactname: 'Username',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Pending',
      pinned: true
    },
    {
      id: 3,
      contactname: 'Username',
      date: '7 July 2025',
      contact: '09xxxxxxxx',
      
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Cancel',
      pinned: false
    }
  ]);

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
    setCsrItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, status: newStatus }
          : item
      )
    );
    console.log(`Status updated for item ${id} to ${newStatus}`);
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Done':
        return 'text-green-600';
      case 'Pending':
        return 'text-yellow-600';
      case 'Cancel':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  

  // Filter items based on selected status and search term
  const filteredItems = csrItems.filter(item => {
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesSearch = searchTerm === '' || 
      item.contactname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });


  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-6xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
          Contact Management
        </h1>

        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Search and Filter */}
            <div className="flex items-center justify-end mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for contact"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-20 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button 
                onClick={() => setShowStatusFilter(!showStatusFilter)}
                className="ml-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <FaFilter className="w-4 h-4 text-gray-600" />
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
            {/* CSR Items */}
            <div className="space-y-6">
              {filteredItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    No contacts found matching your search criteria.
                  </p>
                </div>
              ) : (
                filteredItems.map((item) => (
                <div key={item.id} className="relative border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  {item.pinned && (
                    <div className="absolute top-2 right-2  text-yellow-500 p-1.5 rounded-full ">
                      <FaThumbtack className="w-3 h-3 rotate-45" />
                    </div>
                  )}
                  
                  {/* Header with username and date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaUser className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="font-bold text-lg" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                        {item.contactname}
                      </span>
                    </div>
                    <span className="text-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
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
                    
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    {item.description}
                  </p>

                  {/* Status dropdown */}
                  <div className="flex justify-end">
                    <div className="relative">
                      <select
                        className={`appearance-none bg-white border border-gray-300 rounded-lg py-1.5 px-5 pr-8 text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${getStatusTextColor(item.status)}`}
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        style={{ fontFamily: "Pally-Medium, sans-serif" }}
                      >
                        <option value="Done" className=" text-green-500">Done</option>
                        <option value="Pending" className=" text-yellow-500">Pending</option>
                        <option value="Cancel" className=" text-red-500">Cancel</option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))
              )}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          {/* Sidebar - Management Actions */}
          <div className="w-35 h-60 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col">
            <h3 className="text-sm font-bold text-black mb-3" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
              Manage
            </h3>
            
            <div className="space-y-2">
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border-1  transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
              Create
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border-1  transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
              Update
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border-1  transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
              Delete
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-1 px-3 rounded-xl text-xs hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border-1  transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
              Mark
              </button>
              
            </div>
          </div>

          
        </div>
      </div>
    </AdminLayout>
  );
}
