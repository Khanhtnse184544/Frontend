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
      <section className="relative w-full px-20 pb-15 lg:pb-[8vh] 2xl:px-[5vw] 2xl:pb-[10vh] bg-[#FDFDFD]">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>
        <div className="p-15 lg:p-[6vh] 2xl:p-[5vh]">
          <div className="flex items-center gap-16 lg:gap-[4vw] 2xl:gap-[5vw] relative">
            {/* Left Side - Image Card */}
            <div className="w-3/7 lg:w-[45%] 2xl:w-[40%] ps-15 lg:ps-[2vw] 2xl:ps-[3vw]">
              <div className="relative w-[407px] h-[515px] lg:w-[34vw] lg:h-[45vh] xl:w-[30vw] xl:h-[68vh] 2xl:w-[30vw] 2xl:h-[68vh] rounded-[70px] lg:rounded-[4vw] 2xl:rounded-[3vw] overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={schoolImage}
                  alt="Green Education Programs"
                  className="w-full h-[600px] lg:h-[68vh] xl:h-[68vh] 2xl:h-[68vh] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Default Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/40 backdrop-blur-xs w-full h-[60px] lg:h-[6vh] 2xl:h-[7vh] flex items-center justify-center px-8 lg:px-[1.5vw] xl:py-[2.5vw] 2xl:pyy-[3vw] py-6 lg:py-[1vh] 2xl:py-[1.5vh] shadow-lg">
                    <h3 className="text-white text-2xl lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] font-bold text-center">
                      Khám Phá Thêm
                    </h3>
                  </div>
                </div>

                {/* Hover Overlay with Our Initiatives */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ps-10 pe-8 xl:px-10  2xl:ps-[2.5vw] 2xl:pe-[2vw]">
                  <div className="text-white">
                    <h2 className="text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center font-bold mb-5 lg:mb-[2vh] 2xl:mb-[2.5vh] text-[#D68C45]">
                      Hoạt động Nổi bật của chúng tôi
                    </h2>
                    <div className="space-y-4 lg:space-y-[1.5vh] 2xl:space-y-[2vh] text-sm lg:text-base 2xl:text-lg">
                      <div>
                        <p className="font-semibold lg:text-lg 2xl:text-xl">
                          Hành trình Trải nghiệm Rừng:
                        </p>
                        <p className="text-gray-200 lg:text-sm 2xl:text-base">
                          Tổ chức các chuyến đi thực địa, trồng cây và tìm hiểu
                          về hệ sinh thái dưới sự hướng dẫn của các tình nguyện
                          viên có chuyên môn.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold lg:text-lg 2xl:text-xl">
                          Tích hợp Ứng dụng C.H.A.M vào Giảng dạy:
                        </p>
                        <p className="text-gray-200 lg:text-sm 2xl:text-base">
                          Lồng ghép game C.H.A.M như một công cụ học tập, giúp
                          học sinh tìm hiểu về cây xanh một cách trực quan, sinh
                          động.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold lg:text-lg 2xl:text-xl">
                          Workshop Giáo dục Môi trường:
                        </p>
                        <p className="text-gray-200 lg:text-sm 2xl:text-base">
                          Tổ chức các buổi workshop tương tác tại trường học,
                          vận dụng những bài học thực tiễn được tích hợp từ game
                          C.H.A.M.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Side - Content */}
            <div className="w-4/7 lg:w-[55%] 2xl:w-[60%] relative">
              <div className="ml-16 lg:ml-[3vw] 2xl:ml-[4vw]">
                <h1 className="text-4xl lg:text-[2.5rem] xl:text-[2.2rem] 2xl:text-[3.4rem] font-bold text-[#D68C45] mb-4 lg:mb-[2vh] 2xl:mb-[2.5vh]">
                  Giáo dục Xanh cùng E.C.O
                </h1>

                <p className="text-sm lg:text-md xl:text-md 2xl:text-xl leading-relaxed mb-4 lg:mb-[2vh] 2xl:mb-[2.5vh]">
                  E.C.O mang đến các chương trình giáo dục môi trường độc đáo và
                  hấp dẫn, kết hợp hài hòa giữa trải nghiệm thực tế và công nghệ
                  số, nhằm khơi dậy cảm hứng và nâng cao ý thức bảo vệ môi
                  trường trong thế hệ trẻ.
                </p>

                <div className="mb-8 lg:mb-[4vh] 2xl:mb-[5vh]">
                  <h3 className="text-md lg:text-lg xl:text-lg 2xl:text-2xl font-bold mb-2 lg:mb-[1vh] 2xl:mb-[1.5vh]">
                    Chương trình sẽ mang lại:
                  </h3>
                  <ul className="text-sm lg:text-md xl:text-md 2xl:text-lg">
                    <li className="flex items-start mb-2 lg:mb-[0.8vh] 2xl:mb-[1vh]">
                      <span className="text-[#D68C45] text-md lg:text-lg 2xl:text-xl mr-3 lg:mr-[0.8vw] 2xl:mr-[1vw] -mt-0.5 xl:-mt-1.5 2xl:-mt-0.5">
                        •
                      </span>
                      <span>
                        Trải nghiệm học tập độc đáo và ý nghĩa ngoài khuôn khổ
                        lớp học.
                      </span>
                    </li>
                    <li className="flex items-start mb-2 lg:mb-[0.8vh] 2xl:mb-[1vh]">
                      <span className="text-[#D68C45] text-md lg:text-lg 2xl:text-xl mr-3 lg:mr-[0.8vw] 2xl:mr-[1vw] -mt-0.5 xl:-mt-1.5 2xl:-mt-0.5">
                        •
                      </span>
                      <span>
                        Nâng cao nhận thức và tinh thần trách nhiệm về môi
                        trường cho học sinh.
                      </span>
                    </li>
                    <li className="flex items-start mb-2 lg:mb-[0.8vh] 2xl:mb-[1vh]">
                      <span className="text-[#D68C45] text-md lg:text-lg 2xl:text-xl mr-3 lg:mr-[0.8vw] 2xl:mr-[1vw] -mt-0.5 xl:-mt-1.5 2xl:-mt-0.5">
                        •
                      </span>
                      <span>
                        Gắn kết học sinh với thiên nhiên một cách gần gũi và
                        thực tiễn.
                      </span>
                    </li>
                    <li className="flex items-start mb-2 lg:mb-[0.8vh] 2xl:mb-[1vh]">
                      <span className="text-[#D68C45] text-md lg:text-lg 2xl:text-xl mr-3 lg:mr-[0.8vw] 2xl:mr-[1vw] -mt-0.5 xl:-mt-1.5 2xl:-mt-0.5">
                        •
                      </span>
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
                  className="bg-black text-white font-bold py-2.5 lg:py-[1.2vh] 2xl:py-[1.5vh] rounded-[15px] lg:rounded-[1vw] 2xl:rounded-[0.8vw] w-[330px] lg:w-[25vw] xl:w-[22vw] 2xl:w-[20vw] hover:bg-white hover:text-black transition-colors duration-300 shadow-lg text-xl lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] ms-5 lg:ms-[1vw] 2xl:ms-[1.5vw]"
                >
                  Liên Hệ 
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
