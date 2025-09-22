import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

export default function PartnerVoucher() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVouchers, setSelectedVouchers] = useState([]);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Sample voucher data
  const vouchers = [
    {
      id: 1,
      type: 'Discount',
      name: 'Voucher 1',
      code: 'xxxxxx',
      validDate: 'dd/mm/yyyy',
      expireDate: 'dd/mm/yyyy',
      brand: 'Brand 1',
      remaining: 'Unlimited',
      used: 50,
      status: 'Active'
    },
    {
      id: 2,
      type: 'Game',
      name: 'Voucher 2',
      code: 'xxxxxx',
      validDate: '09/04/2004',
      expireDate: '09/04/2004',
      brand: 'Brand 2',
      remaining: 100,
      used: 40,
      status: 'Inactive'
    },
    {
      id: 3,
      type: 'Discount',
      name: 'Voucher 2',
      code: 'xxxxxx',
      validDate: '09/04/2004',
      expireDate: '09/04/2004',
      brand: 'Brand 2',
      remaining: 0,
      used: 200,
      status: 'Inactive'
    }
  ];

  const handleSelectVoucher = (voucherId) => {
    setSelectedVouchers(prev => 
      prev.includes(voucherId) 
        ? prev.filter(id => id !== voucherId)
        : [...prev, voucherId]
    );
  };

  const handleSelectAll = () => {
    if (selectedVouchers.length === vouchers.length) {
      setSelectedVouchers([]);
    } else {
      setSelectedVouchers(vouchers.map(voucher => voucher.id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Changing status for voucher ${id} to ${newStatus}`);
  };

  // Filter vouchers based on selected status
  const filteredVouchers = selectedStatus === 'All' 
    ? vouchers 
    : vouchers.filter(voucher => voucher.status === selectedStatus);

  const paginationPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-6xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
          Partner & Voucher
        </h1>

        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col">
            {/* Header with actions and search */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                Voucher
              </h2>
              <div className="flex items-center gap-3">
                <button className="bg-[#2C2C2C] text-white px-4 py-2 rounded-lg text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  Create
                </button>
                <button className="bg-[#2C2C2C] text-white px-4 py-2 rounded-lg text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  Update
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  Delete
                </button>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search for user"
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 text-gray-400" />
                  <button className="ml-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <FaFilter className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Voucher Table */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="text-left py-3 px-2">
                      <input
                        type="checkbox"
                        checked={selectedVouchers.length === vouchers.length}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Voucher Type
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Voucher
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Code
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Valid Date
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Expire Date
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Sponsored Brand
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Remaining quantity
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Used quantity
                    </th>
                    <th className="text-left py-3 px-2 font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVouchers.map((voucher) => (
                    <tr key={voucher.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <input
                          type="checkbox"
                          checked={selectedVouchers.includes(voucher.id)}
                          onChange={() => handleSelectVoucher(voucher.id)}
                          className="rounded border-gray-300"
                        />
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.type}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.name}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.code}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.validDate}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.expireDate}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.brand}
                      </td>
                      <td className={`py-3 px-2 ${voucher.remaining === 0 ? 'text-red-500' : 'text-green-500'}`} style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.remaining}
                      </td>
                      <td className="py-3 px-2" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {voucher.used}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center">
                          <span className={`${voucher.status === 'Active' ? 'text-green-500' : 'text-red-500'}`} style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                            {voucher.status}
                          </span>
                          <FaChevronDown className="w-3 h-3 ml-1 text-gray-400" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              {paginationPages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`mx-1 px-3 py-1 rounded-full ${currentPage === page ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-red-400`}
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
                disabled={currentPage === 10}
                className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Sidebar - Management Actions */}
          <div className="w-48 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col">
            <h3 className="text-sm font-bold text-black mb-4" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
              Manage
            </h3>
            <div className="space-y-2">
              <button className="w-full bg-[#2C2C2C] text-white text-center py-2 px-3 rounded-xl text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Create Voucher
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-2 px-3 rounded-xl text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Update Voucher
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-2 px-3 rounded-xl text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Delete Voucher
              </button>
              <button className="w-full bg-[#2C2C2C] text-white text-center py-2 px-3 rounded-xl text-sm hover:text-[#2C2C2C] hover:bg-white hover:border-[#2C2C2C] hover:border transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
