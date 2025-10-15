import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { 
  FaUsers, 
  FaHandshake, 
  FaGraduationCap, 
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaDownload,
  FaChartPie
} from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6 px-5">
        {/* Page Title */}
        <h1 className="text-5xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>Dashboard</h1>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Users Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#797979]" style={{ fontFamily: "Pally-bold, sans-serif" }}>Users</p>
                <p className="text-2xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>1.211</p>
                <div className="flex items-center mt-2">
                  <FaArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium mr-1 " style={{ fontFamily: "Pally-Regular, sans-serif" }}>+5.5% </span>
                  <span className="text-xs font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}> since last week</span>
                </div>
              </div>
               <div className="w-12 h-12 flex items-start justify-center">
                 <FaUsers className="w-12 h-12 " />
               </div>
            </div>
          </div>

          {/* CSR Card */}

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#797979]" style={{ fontFamily: "Pally-bold, sans-serif" }}>CSR</p>
                <p className="text-2xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>904</p>
                <div className="flex items-center mt-2">
                  <FaArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-xs text-red-500 font-medium mr-1 " style={{ fontFamily: "Pally-Regular, sans-serif" }}>-0.1% </span>
                  <span className="text-xs font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}> since last week</span>
                </div>
              </div>
               <div className="w-12 h-12 flex items-start justify-center">
                 <FaHandshake className="w-12 h-12 " />
               </div>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#797979]" style={{ fontFamily: "Pally-bold, sans-serif" }}>Education</p>
                <p className="text-2xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>1040</p>
                <div className="flex items-center mt-2">
                  <FaArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium mr-1 " style={{ fontFamily: "Pally-Regular, sans-serif" }}>+6.9%  </span>
                  <span className="text-xs font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}> since last week</span>
                </div>
              </div>
               <div className="w-12 h-12 flex items-start justify-center">
                 <FaGraduationCap className="w-12 h-12 " />
               </div>
            </div>
          </div>

          {/* Gross Profit Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#797979]" style={{ fontFamily: "Pally-bold, sans-serif" }}>Gross profit</p>
                <p className="text-2xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>1.090.041.259</p>
                <div className="flex items-center mt-2">
                  <FaArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium mr-1 " style={{ fontFamily: "Pally-Regular, sans-serif" }}>+12% </span>
                  <span className="text-xs font-medium" style={{ fontFamily: "Pally-Regular, sans-serif" }}> since last week</span>
                </div>
              </div>
               <div className="w-12 h-12 flex items-start justify-center">
                 <FaChartLine className="w-8 h-8 " />
               </div>
            </div>
          </div>
          </div>

        {/* Analytics Section */}        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Game Invoice Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 col-span-2 h-80 ">
            <h3 className="text-2xl font-bold text-[#797979] mb-6" style={{ fontFamily: "Pally-Bold, sans-serif" }}>Game Invoice</h3>
            <div className="flex items-center justify-between">
              {/* Donut Chart */}
              <div className="w-50 h-50 relative">
                <svg className="w-50 h-50 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="13"
                  />
                  {/* Black segment - Whales (31%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="13"
                    strokeDasharray="77.87 251.2"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  {/* Orange segment - Total Paid (45%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="13"
                    strokeDasharray="113.04 251.2"
                    strokeDashoffset="-77.87"
                    strokeLinecap="round"
                  />
                  {/* Light grey segment - Total Unpaid (24%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="13"
                    strokeDasharray="60.29 251.2"
                    strokeDashoffset="-190.91"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold " style={{ fontFamily: "Pally-Bold, sans-serif" }}>1054</div>
                    <div className="text-md text-[#797979]" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Players</div>
                  </div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="space-y-4 ml-6">
                <div>
                <div className="flex items-center">
                <div className="text-md font-bold text-[#797979]" style={{ fontFamily: "Pally-Bold, sans-serif" }}>Whales</div>

                <br />
                <div>
                    <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
                    <span className="text-md font-bold text-[#797979] ml-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>327</span>
                  </div>
                </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                  <div>
                    <span className="text-md font-bold text-[#797979]" style={{ fontFamily: "Pally-Bold, sans-serif" }}>Total Paid</span>
                    <span className="text-md font-bold text-[#797979] ml-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>474</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <span className="text-md font-bold text-[#797979]" style={{ fontFamily: "Pally-Bold, sans-serif" }}>Total Unpaid</span>
                    <span className="text-md font-bold text-[#797979] ml-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>253</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Income Analytics Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 lg:col-span-3 h-80">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#797979]" style={{ fontFamily: "Pally-Bold, sans-serif" }}>Income Analytics</h3>
              <button className="flex items-center px-4 py-2 text-xs font-medium text-[#797979] bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                <FaDownload className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
            
            {/* Line Chart */}
            <div className="h-80 relative">
              <svg className="w-full h-full" viewBox="0 0 800 300">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Y-axis labels */}
                <text x="20" y="20" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>10K</text>
                <text x="20" y="60" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>8K</text>
                <text x="20" y="100" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>6K</text>
                <text x="20" y="140" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>4K</text>
                <text x="20" y="180" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>2K</text>
                <text x="20" y="220" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>0</text>
                
                {/* X-axis labels */}
                <text x="120" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Mon 15</text>
                <text x="200" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Tue 16</text>
                <text x="280" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Wed 17</text>
                <text x="360" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Thu 18</text>
                <text x="440" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Fri 19</text>
                <text x="520" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Sat 20</text>
                <text x="600" y="250" textAnchor="middle" className="text-xs fill-gray-500" style={{ fontFamily: "Pally-Regular, sans-serif" }}>Sun 21</text>
                
                {/* Data points */}
                <circle cx="120" cy="80" r="4" fill="#f97316" />
                <circle cx="200" cy="120" r="4" fill="#f97316" />
                <circle cx="280" cy="100" r="4" fill="#f97316" />
                <circle cx="360" cy="140" r="4" fill="#f97316" />
                <circle cx="440" cy="90" r="4" fill="#f97316" />
                <circle cx="520" cy="110" r="4" fill="#f97316" />
                <circle cx="600" cy="70" r="4" fill="#f97316" />
                
                {/* Line connecting points */}
                <path 
                  d="M 120,80 L 200,120 L 280,100 L 360,140 L 440,90 L 520,110 L 600,70" 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                
                {/* Area under the curve */}
                <path 
                  d="M 120,80 L 200,120 L 280,100 L 360,140 L 440,90 L 520,110 L 600,70 L 600,220 L 120,220 Z" 
                  fill="url(#gradient)" 
                  opacity="0.1"
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
