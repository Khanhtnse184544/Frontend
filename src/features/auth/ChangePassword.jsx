import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLeafOutline } from "react-icons/io5";
import logo from '../../assets/homepage/logo_xanh.png';

export default function ChangePassword({ onClose, onSwitch }) {
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.otp || !formData.password || !formData.confirmPassword) {
      alert("Vui lòng điền đầy đủ tất cả các trường");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    if (formData.password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual password change logic here
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to success page instead of showing alert
      onSwitch("changepasswordsuccess");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Đổi mật khẩu thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden px-[20%] pt-[1%]">
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full mx-auto overflow-hidden border border-gray-100">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-20 w-[300px] h-[3px] bg-green-600 transform -rotate-45 origin-left" />
          <div className="absolute top-0 -right-20 w-[250px] h-[3px] bg-orange-500 transform rotate-45 origin-right" />
          <div className="absolute bottom-0 -left-16 w-[280px] h-[3px] bg-green-700 transform rotate-30 origin-left" />
          <div className="absolute bottom-0 -right-16 w-[240px] h-[3px] bg-orange-600 transform -rotate-30 origin-right" />
        </div>

        {/* Content */}
        <div className="px-8 pt-8 pb-10 relative z-10">
          {/* Logo/icon */}
          <div className="flex justify-center mb-8">
            <div className=" rounded-2xl">
              <img src={logo} alt="Logo" className="w-25 h-25" />
            </div>
          </div>

          

          {/* Subtitle */}
          <h2 
            className="mt-3 text-3xl text-center flex items-center justify-center mb-8"
            
          >
            Đổi mật khẩu
            <IoLeafOutline className="ml-2 w-6 h-6 text-[#d68c45]" />
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 flex flex-col items-center">
                         <div className="w-full flex flex-col items-center">
               <div className="w-[50%] flex justify-between items-center mb-3">
                 <label 
                   className="block text-sm font-medium text-black"
                   
                 >
                   OTP <span className="text-gray-400 font-light"> - Sẽ được gửi đến email của bạn, vui lòng kiểm tra cả thư mục spam</span>
                 </label>
               </div>
               <div className="w-[50%] relative">
                 <input
                   type="text"
                   name="otp"
                   placeholder="OTP"
                   value={formData.otp}
                   onChange={handleChange}
                   className="w-full px-4 py-2 pr-20 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                   
                   required
                 />
                 <button
                   type="button"
                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-base hover:text-[#1E4AE9] hover:underline transition-colors font-medium text-sm"
                   
                 >
                   Gửi lại
                 </button>
               </div>
             </div>
            
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] flex justify-between items-center mb-3">
                <label 
                  className="block text-sm font-medium text-black"
                  
                >
                  Mật khẩu
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="ít nhất 8 ký tự"
                value={formData.password}
                onChange={handleChange}
                className="w-[50%] px-4 py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                
                required
              />
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] flex justify-between items-center mb-3">
                <label 
                  className="block text-sm font-medium text-black"
                  
                >
                  Xác nhận mật khẩu
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="ít nhất 8 ký tự"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-[50%] px-4 py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                
                required
              />
            </div>

            <div className="w-[50%] flex justify-between text-sm">
            <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("login");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium"
                
              >
                Quay lại đăng nhập
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("register");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium"

              >
                Chưa có tài khoản? Đăng ký
              </button>
              
            </div>

                        <button
               type="submit"
               disabled={isLoading}
               className={`w-[50%] py-2 rounded-xl font-semibold transition-colors shadow-md text-lg ${
                 isLoading 
                   ? 'bg-gray-400 cursor-not-allowed' 
                   : 'bg-[#1E2C34] hover:bg-[#2E424E]'
               } text-white`}
               
             >
               {isLoading ? "Đang đổi..." : "Đổi mật khẩu"}
             </button>
          </form>

          
        </div>
      </div>
    </div>
  );
}
