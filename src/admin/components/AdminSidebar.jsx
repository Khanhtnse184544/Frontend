import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaChartLine, 
  FaUsers, 
  FaGraduationCap, 
  FaTag, 
  FaChartBar, 
  FaHeadset, 
  FaClipboardList 
} from 'react-icons/fa';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: FaChartLine, path: '/admin' },
  { id: 'users', label: 'User Management', icon: FaUsers, path: '/admin/users' },
  { id: 'csr', label: 'CSR & Education', icon: FaGraduationCap, path: '/admin/csr' },
  { id: 'partner', label: 'Partner & Voucher', icon: FaTag, path: '/admin/partner' },
  { id: 'financial', label: 'Financial Reports', icon: FaChartBar, path: '/admin/financial' },
  { id: 'support', label: 'Customer Support', icon: FaHeadset, path: '/admin/support' },
  { id: 'logs', label: 'Logs', icon: FaClipboardList, path: '/admin/logs' },
];

export default function AdminSidebar({ isOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`${isOpen ? 'w-80' : 'w-21'} bg-[#2C2C2C] text-white transition-all duration-300 flex flex-col`}>
      {/* Logo Section */}
      <div className="flex items-center px-4 py-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🌱</span>
          </div>
          {isOpen && (
            <span className="text-orange-500 font-bold text-xl" style={{ fontFamily: "Pally-Bold, sans-serif" }}>E.C.O</span>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.path)}
              className={`w-full flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#D68C45]'
                  : 'text-White  hover:text-[#D68C45]'
              }`}
            >
              <div className="mr-3 flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              {isOpen && (
                <span className="font-medium text-2xl" style={{ fontFamily: "Pally-Regular, sans-serif" }}>{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
