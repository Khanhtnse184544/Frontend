import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaDollarSign, FaArrowUp, FaDownload } from 'react-icons/fa';
import logo from '../../assets/homepage/logo.png';

export default function FinancialReports() {
  const [selectedCategory, setSelectedCategory] = useState('Member Sponsor');

  // Sample data for the chart
  const chartData = [
    { period: '01', current: 25000000, previous: 20000000 },
    { period: '02', current: 30000000, previous: 25000000 },
    { period: '03', current: 28000000, previous: 22000000 },
    { period: '04', current: 32000000, previous: 28000000 },
    { period: '05', current: 35000000, previous: 30000000 },
    { period: '06', current: 38000000, previous: 32000000 },
    { period: '07', current: 40000000, previous: 35000000 },
    { period: '08', current: 42000000, previous: 38000000 },
    { period: '09', current: 45000000, previous: 40000000 },
    { period: '10', current: 48000000, previous: 42000000 },
    { period: '11', current: 50000000, previous: 45000000 },
    { period: '12', current: 52000000, previous: 48000000 }
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.current, d.previous)));

  const categories = [
    { id: 'member', label: 'Member Sponsor' },
    { id: 'csr', label: 'CSR' },
    { id: 'education', label: 'School Education' },
    { id: 'game', label: 'Game' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' vnđ';
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-5xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
          Financial Reports
        </h1>

        <div className="flex gap-6">
          {/* Left Panel */}
          <div className="w-80 space-y-6">
            {/* Total Amount Card */}
            <div className="bg-[#2C2C2C] rounded-2xl p-6 relative overflow-hidden" style={{ border: '2px solid #8B5CF6' }}>
              {/* Dollar Icon */}
              <FaDollarSign className="text-white text-xl mb-4" />  
                
              <div className="absolute top-2 right-5">
              <img src={logo} alt="Logo" className="w-20 h-20" />
              </div>
              

              <div className="text-white">
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                  Total Amount
                </h3>
                <p className="text-sm mb-4" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  E.C.O Collaborate
                </p>
                <p className="text-2xl font-light" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  2.121.109.043 vnđ
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.label)}
                  className={`w-full py-2 px-6 rounded-xl text-left transition-colors ${
                    selectedCategory === category.label
                      ? 'bg-[#2C2C2C] text-white'
                      : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1  px-6">
            {/* Header with Export Button */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                  Total Revenue Per Week
                </h2>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold text-black" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                    349.648.920 vnđ
                  </p>
                  <div className="flex items-center gap-1 text-green-600">
                    <FaArrowUp className="w-3 h-3" />
                    <span className="text-xs font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                      2.1% <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}>vs last week</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 mt-6 text-sm " style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                  Sales from 1-12 Dec, 2020
                </p>
              </div>
              
              <button className="bg-[#434343] text-white px-5 py-1 rounded-lg flex items-center gap-2 hover:bg-[#2C2C2C] transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                <FaDownload className="w-3 h-3" />
                Export
              </button>
            </div>

            {/* Chart */}
            <div className="space-y-4">
              {/* Chart Container */}
              <div className="h-80 bg-gray-50 rounded-lg px-6">
                <div className="h-full flex items-end justify-between gap-4">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      {/* Bars */}
                      <div className="flex items-end gap-1 w-full justify-center">
                        {/* Current Period Bar (Orange) */}
                        <div
                          className="bg-[#D68C45] rounded-t"
                          style={{
                            height: `${(data.current / maxValue) * 200}px`,
                            width: '30%',
                            minHeight: '4px'
                          }}
                        ></div>
                        {/* Previous Period Bar (Gray) */}
                        <div
                          className="bg-gray-200 rounded-t"
                          style={{
                            height: `${(data.previous / maxValue) * 200}px`,
                            width: '30%',
                            minHeight: '4px'
                          }}
                        ></div>
                      </div>
                      {/* Period Label */}
                      <span className="text-xs text-gray-600" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        {data.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex justify-end pe-20 gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D68C45] rounded-full"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    Last 6 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                    Last Week
                  </span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
