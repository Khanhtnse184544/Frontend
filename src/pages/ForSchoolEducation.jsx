import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsPopup from "../components/ContactUsPopup";
import schoolImage from "../assets/get_involved/for-school/img.png";

export default function ForSchoolEducation() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // You can add API call here
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full px-20 pb-15 bg-[#FDFDFD]">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>
        <div className=" p-15">
          <div className="flex items-center gap-16 relative">
            {/* Left Side - Image Card */}
            <div className="w-3/7 ps-15">
              <div className="relative w-[407px] h-[515px] rounded-[70px] overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={schoolImage}
                  alt="Green Education Programs"
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Default Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/40 backdrop-blur-xs w-full h-[60px] flex items-center justify-center px-8 py-6 shadow-lg">
                    <h3
                      className="text-white text-3xl font-bold text-center"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      Explore Our Programs
                    </h3>
                  </div>
                </div>

                {/* Hover Overlay with Our Initiatives */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ps-10 pe-6">
                  <div className="text-white">
                    <h2
                      className="text-4xl text-center font-bold mb-5 text-[#D68C45]"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      Hoạt động Nổi bật của chúng tôi
                    </h2>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold">
                          Hành trình Trải nghiệm Rừng:
                        </p>
                        <p className="text-gray-200">
                          Tổ chức các chuyến đi thực địa, trồng cây và tìm hiểu
                          về hệ sinh thái dưới sự hướng dẫn của các tình nguyện
                          viên có chuyên môn.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Tích hợp Ứng dụng C.H.A.M vào Giảng dạy:
                        </p>
                        <p className="text-gray-200">
                          Lồng ghép game C.H.A.M như một công cụ học tập, giúp
                          học sinh tìm hiểu về cây xanh một cách trực quan, sinh
                          động.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Workshop Giáo dục Môi trường:
                        </p>
                        <p className="text-gray-200">
                          Tổ chức các buổi workshop tương tác tại trường học,
                          vận dụng những bài học thực tiễn được tích hợp từ game
                          C.H.A.M.
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* Short vertical line */}
              <div className="absolute left-3/7 ms-3.5 top-1/9 w-[2px] bg-black h-22"></div>
              {/* Vertical Line with Rotated Text - Positioned between sections */}
              <div className=" absolute ms-17 left-1/4 top-5/9 ">
                {/* Rotated text below the line */}
                <div className="mt-4">
                  <span
                    className=" text-[0.65rem] tracking-wider rotate-90 inline-block whitespace-nowrap"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
                  >
                    Kiến tạo vì một thế hệ trẻ sống xanh
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-4/7 relative ">
              <div className="ml-16">
                <h1
                  className="text-[2.7rem] font-bold text-[#D68C45] mb-4"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Giáo dục Xanh cùng E.C.O
                </h1>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Pally-medium, sans-serif" }}
                >
                  E.C.O mang đến các chương trình giáo dục môi trường độc đáo và
                  hấp dẫn, kết hợp hài hòa giữa trải nghiệm thực tế và công nghệ
                  số, nhằm khơi dậy cảm hứng và nâng cao ý thức bảo vệ môi
                  trường trong thế hệ trẻ.
                </p>

                <div className="mb-8">
                  <h3
                    className="text-md font-bold  mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Chương trình sẽ mang lại:
                  </h3>
                  <ul className=" text-sm" style={{ fontFamily: "Pally-medium, sans-serif" }}>
                    <li className="flex items-start" >
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span>
                    
                        Trải nghiệm học tập độc đáo và ý nghĩa ngoài khuôn khổ
                        lớp học.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span>
                    
                        Nâng cao nhận thức và tinh thần trách nhiệm về môi
                        trường cho học sinh.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span>
                    
                        Gắn kết học sinh với thiên nhiên một cách gần gũi và
                        thực tiễn.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span>
                    
                        Hoạt động ngoại khóa và dự án xanh tại trường học.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Get In Touch Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openContact();
                  }}
                  className="bg-black text-white font-bold py-2.5  rounded-[15px] w-[330px] hover:bg-white hover:text-black transition-colors duration-300 shadow-lg text-xl ms-5"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Popup */}
      <ContactUsPopup
        isOpen={isContactOpen}
        onClose={closeContact}
        onSubmit={handleContactSubmit}
      />

      <Footer />
    </>
  );
}
