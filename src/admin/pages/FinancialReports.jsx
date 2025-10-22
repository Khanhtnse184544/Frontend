import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import Pagination from '../components/Pagination';
import { FaDollarSign, FaArrowUp, FaDownload } from 'react-icons/fa';
import logo from '../../assets/homepage/logo.png';

export default function FinancialReports() {
  const [selectedCategory, setSelectedCategory] = useState('Member Sponsor');
  const [currentPage, setCurrentPage] = useState(1);

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
                <p className="text-sm mb-4" >
                  E.C.O Collaborate
                </p>
                <p className="text-2xl font-light" >
                  2.121.109.043 vnđ
                </p>
              </div>
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
                    <span className="text-xs font-medium" >
                      2.1% <span className="text-xs text-gray-500 font-medium" >vs last week</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 mt-6 text-sm " >
                  Sales from 1-12 Dec, 2020
                </p>
              </div>
              
              <button className="bg-[#434343] text-white px-5 py-1 rounded-lg flex items-center gap-2 hover:bg-[#2C2C2C] transition-colors" >
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
                      <span className="text-xs text-gray-600" >
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
                  <span className="text-sm text-gray-600" >
                    Last 6 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600" >
                    Last Week
                  </span>
                </div>
              </div>
            </div>
           

          </div>
        </div>

        {/* Payment Details Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
            Payment Details
          </h2>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    Sponsor
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    Description
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    Incomes
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-700" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company B
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company C
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company E
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company D
                  </td>
                  
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Company A sponsored a program to plant 1000 trees in area X through our platform
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium" style={{ fontFamily: "Pally-Medium, sans-serif" }}>
                    10,000,000 VND
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900" >
                    Platform service fee for donations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
