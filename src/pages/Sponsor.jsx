import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import sponsorBg from '../assets/get_involved/Sponsor/img.png';
import api from "../utils/api";

export default function Sponsor() {
  const [selectedAmount, setSelectedAmount] = useState("20.000");
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [description, setDescription] = useState("");

  const amounts = [
    "10.000",
    "20.000", 
    "50.000",
    "100.000",
    "200.000",
    "500.000"
  ];

  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/api/donations/history');
      setTransactions(response.data || []);
    } catch (err) {
      setError('Failed to fetch transactions');
      console.error('Error fetching transactions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' vnđ';
  };

  const formatDate = (dateString) => {
    if (!dateString) return "---"; 

    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return "---"; 
    
    return date.toLocaleString('vi-VN', { 
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const totalItems = transactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageTransactions = transactions.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [transactions, currentPage, totalPages]);

  return (
    <>
      <Header />
      
      <section className="relative w-full min-h-screen flex flex-col">
        <img
          src={sponsorBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-20"
        />
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        
        <div className="sticky top-0 z-30 w-full">
          <Navbar />
        </div>
        
        <div className="flex-grow flex items-center justify-center w-full px-4 pt-24 pb-12 md:pt-32 md:pb-16 xl:py-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20">
             
             <div className="text-white w-full xl:w-1/2 text-center xl:text-left flex flex-col items-center xl:items-start">
                <p className="text-lg md:text-xl xl:text-2xl mb-2">
                  Cùng gieo mầm xanh
                </p>
                <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2">
                  SPONSOR
                </h1>
                <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 text-[#D68C45]">
                  A TREE
                </h2>
                <p className="text-lg md:text-xl xl:text-2xl mb-8">
                  Hành động nhỏ - Thay đổi lớn.
                </p>
                
                <div className="flex items-center justify-center xl:justify-start">
                  <SocialLinks 
                    iconSize="w-5 h-5"
                    iconColor="text-white"
                    hoverColor="hover:scale-110"
                    className="gap-4"
                    customWrapper={(children) => (
                      <div className="w-10 h-10 bg-[#D68C45] rounded-full flex items-center justify-center hover:bg-[#B87A3A] transition-colors duration-300">
                        {children}
                      </div>
                    )}
                  />
                </div>
              </div>

             <div className="w-full max-w-md md:max-w-xl xl:max-w-[500px] 2xl:w-[600px] bg-white/40 backdrop-blur-md rounded-3xl p-5 md:p-8 shadow-2xl border border-white/60 mx-auto xl:mx-0">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#D68C45] mb-2">
                    Cùng hành động, tạo khác biệt.
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 font-medium">
                    Mỗi cây được trồng là một hi vọng được nuôi dưỡng.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 md:p-6 shadow-inner mb-6 w-full">
                  <p className="text-lg font-semibold mb-4 text-gray-700">
                    Chọn mức gieo mầm
                  </p>
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-2 px-1 rounded-lg text-xs md:text-base border transition-all duration-300 font-medium truncate ${
                          selectedAmount === amount
                            ? 'bg-[#D68C45] text-white border-[#D68C45]'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#D68C45] hover:text-[#D68C45]'
                        }`}
                      >
                        {amount} VND
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:border-[#D68C45] transition-colors w-full">
                    <span className="text-gray-500 mr-2 font-medium whitespace-nowrap shrink-0">
                      Khác
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="flex-1 w-full min-w-0 bg-transparent outline-none text-gray-700 font-medium text-sm md:text-base"
                      placeholder="Nhập giá trị"
                    />
                    <span className="text-gray-500 ml-2 font-medium whitespace-nowrap shrink-0">
                      VND
                    </span>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 font-semibold text-gray-700">Lời nhắn yêu thương:</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Nhập tên của bạn hoặc lời nhắn gửi..."
                      rows="3"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#D68C45] resize-none text-gray-700 text-sm md:text-base"
                    />
                  </div>
                </div>

                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (isLoading) return;

                    try {
                      setIsLoading(true);
                      const raw = (customAmount && customAmount.trim().length > 0) ? customAmount : selectedAmount;
                      const normalized = parseInt(raw.replace(/\D/g, ""), 10) || 0;
                      if (normalized <= 0) {
                        alert("Vui lòng nhập số tiền hợp lệ");
                        setIsLoading(false);
                        return;
                      }

                      const response = await api.post("/api/donations", {
                        amount: normalized,
                        description: description.trim() || "Ung ho quy moi truong"
                      });

                      const data = response.data;
                      if (data?.checkoutUrl) {
                        window.location.href = data.checkoutUrl;
                      } else {
                        alert("Không nhận được đường dẫn thanh toán");
                      }
                    } catch (err) {
                      console.error(err);
                      const errorMessage = err.response?.data?.message || err.message || "Tạo liên kết thanh toán thất bại. Vui lòng thử lại.";
                      alert(errorMessage);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="bg-white text-black font-bold py-3 px-8 rounded-full w-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg text-lg flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang tạo liên kết..." : "Gieo Mầm Ngay"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                  Minh bạch giao dịch
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Tất cả các giao dịch đóng góp được công khai minh bạch
                </p>
              </div>
              {!loading && !error && transactions.length > 0 && (
                <div className="text-sm text-gray-500">
                  Hiển thị {startIndex + 1}-{Math.min(endIndex, totalItems)} trong {totalItems} giao dịch
                </div>
              )}
            </div>
          </div>

          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Đang tải giao dịch...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={fetchTransactions}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Thử lại
              </button>
            </div>
          )}

          {!loading && !error && transactions.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                      Mã đóng góp
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                      Mô tả
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                      Số tiền
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                      Trạng thái
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">
                      Ngày giao dịch
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPageTransactions.map((transaction, index) => (
                    <tr key={transaction.id || index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-900">
                        #{transaction.orderCode || transaction.id}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {transaction.description || 'Giao dịch đóng góp'}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">
                        {formatCurrency(transaction.amount || 0)}
                      </td>
                      <td className="py-4 px-6 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'PAID' ? 'bg-green-100 text-green-800' :
                          transaction.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          transaction.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {transaction.status === 'PAID' ? 'Đã thanh toán' :
                           transaction.status === 'PENDING' ? 'Đang chờ' :
                           transaction.status === 'CANCELLED' ? 'Đã hủy' :
                           'Không xác định'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {formatDate(transaction.paidAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!loading && !error && transactions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Chưa có giao dịch nào</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Trước
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-[#D68C45] text-white'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sau
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}