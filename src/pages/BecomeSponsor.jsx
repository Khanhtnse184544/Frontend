import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsPopup from "../components/ContactUsPopup";
import csrImage from "../assets/get_involved/become_a_sponsor/csr.png";
import handImage from "../assets/get_involved/become_a_sponsor/hand.png";

export default function BecomeSponsor() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const toggleCard = () => setIsCardFlipped(!isCardFlipped);

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // You can add API call here
  };

  return (
    <>
      <Header />

      {/* Hero Section with Background Color */}
      <section
        className="relative w-full items-center justify-center h-[100vh]  select-none"
        style={{ backgroundColor: "#C2BDB7" }}
      >
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        <div className="flex items-center justify-center h-full relative">
          <img
            src={csrImage}
            alt="CSR Image"
            className="h-[620px] lg:h-[80vh] xl:h-[80vh] 2xl:h-[75vh] w-auto object-contain transform absolute  lg:right-[6vw] 2xl:right-[9vw] top-0"
          />

          

          {/* Partner with E.C.O Card - Positioned in center-left */}
          <div className="absolute left-20 lg:left-[8vw] 2xl:left-[10vw] top-3/7 lg:top-[40vh] xl:top-[35vh] 2xl:top-[42vh] transform -translate-y-1/2 z-10">
            <div
              className={`relative w-[520px] h-[550px] lg:w-[43vw] lg:h-[50vh] xl:w-[37vw] xl:h-[50vh] 2xl:w-[34vw] 2xl:h-[60vh] transition-transform duration-700 cursor-pointer`}
              onClick={toggleCard}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of card - Partner with E.C.O */}
              <div
                className={`absolute  transition-all duration-1500 ${
                  isCardFlipped ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: isCardFlipped
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                <div className="bg-white rounded-3xl lg:rounded-[2vw] px-15 xl:px-[3vw] lg:px-[2vw] 2xl:px-[3.5vw] pb-20 lg:pb-[5vh] shadow-lg w-full h-full flex flex-col justify-between">
                  {/* Partnership Icon */}
                  <div className=" flex items-center justify-center mt-8 lg:mt-[3vh] mb-4 lg:mb-[2vh] overflow-hidden">
                    <img
                      src={handImage}
                      alt="Partnership Handshake"
                      className="w-28 h-28 lg:w-[8vw] lg:h-[8vw] 2xl:w-[8vw] 2xl:h-[8vw] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-[2.6rem] font-bold text-[#D68C45] mb-4"
                   
                  >
                    Đồng hành cùng E.C.O
                  </h2>

                  {/* Description */}
                  <p
                    className="text-md  lg:text-md xl:text-md 2xl:text-xl leading-relaxed  flex-grow"
                    
                  >
                    E.C.O là bạn đồng hành lý tưởng dành cho các doanh nghiệp
                    muốn triển khai hoạt động CSR/ESG (Trách nhiệm xã hội, Môi
                    trường và Quản trị doanh nghiệp) một cách minh bạch, hiệu
                    quả và dễ truyền thông.
                  </p>
                  <p
                    className="text-md lg:text-md xl:text-md 2xl:text-xl leading-relaxed mb-6 flex-grow"
                    
                  >
                    Chúng tôi mang đến một nền tảng độc đáo, kết hợp giữa công
                    nghệ, cảm xúc và tác động môi trường thực tế, giúp mỗi đóng
                    góp của doanh nghiệp trở nên ý nghĩa và được ghi nhận rõ
                    ràng.
                  </p>

                  {/* Get In Touch Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openContact();
                    }}
                    className="bg-black text-white font-bold py-2.5 lg:py-[1.2vh] 2xl:py-[1.4vh] rounded-[18px] 2xl:rounded-[20px] w-[320px] lg:w-[22vw] 2xl:w-[20vw] hover:bg-white hover:text-black transition-colors duration-300 shadow-lg text-xl lg:text-2xl 2xl:text-2xl flex items-center justify-center mx-auto"
                   
                  >
                    Liên hệ
                  </button>
                </div>
              </div>

              {/* Back of card - Why Choose E.C.O */}
              <div
                className={`absolute w-full h-full transition-all duration-1500 w-[520px] h-[550px] lg:w-[43vw] lg:h-[50vh] xl:w-[37vw] xl:h-[70vh] 2xl:w-[34vw] 2xl:h-[60vh] ${
                  isCardFlipped ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: isCardFlipped
                    ? "rotateY(0deg)"
                    : "rotateY(-180deg)",
                }}
              >
                <div className="bg-white rounded-3xl lg:rounded-[2vw] p-20 lg:p-[3vw] 2xl:p-[3.5vw] shadow-lg w-full h-full flex flex-col justify-between">
                  {/* Title */}
                  <h2
                    className="text-3xl xl:text-3xl 2xl:text-[3.2rem] font-bold text-[#D68C45] mb-3 text-center"
                   
                  >
                    Vì sao chọn E.C.O
                  </h2>

                  {/* Content */}
                  <div
                    className="space-y-3 lg:space-y-[1.2vh] 2xl:space-y-[1.4vh] flex-grow"
                    
                  >
                    <p className="text-md lg:text-lg 2xl:text-xl leading-relaxed">
                      E.C.O giúp doanh nghiệp thực hiện các hành động môi trường
                      và bắt kịp xu hướng ESG toàn cầu.
                    </p>
                    <p className="text-md lg:text-lg 2xl:text-xl leading-relaxed">
                      Mỗi hoạt động trồng cây và bảo tồn đều được ghi nhận minh
                      bạch bằng hình ảnh và vị trí thực tế.
                    </p>
                    <p className="text-md lg:text-lg 2xl:text-xl leading-relaxed">
                      Thông qua ứng dụng C.H.A.M, doanh nghiệp có thể kết nối
                      với cộng đồng người dùng ý thức cao về môi trường, đặc
                      biệt là thế hệ Gen Z.
                    </p>
                    <p className="text-md lg:text-lg 2xl:text-xl leading-relaxed">
                      Doanh nghiệp đồng hành – người dùng có trải nghiệm cá nhân
                      hóa – và các Rừng nhận thêm nguồn lực bảo tồn thiết thực.
                    </p>
                  </div>
                </div>
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
