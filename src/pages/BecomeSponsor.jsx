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
        className="relative w-full items-center justify-center h-[50vw] lg:h-[90vh] 2xl:h-[85vh] select-none"
        style={{ backgroundColor: "#C2BDB7" }}
      >
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        <div className="flex items-center justify-center h-full relative">
          <img
            src={csrImage}
            alt="CSR Image"
            className="h-[620px] lg:h-[73vh] 2xl:h-[75vh] w-auto object-contain transform absolute right-55 lg:right-[17vw] 2xl:right-[16vw] -top-20 lg:-top-[6vh] 2xl:-top-[7vh]"
          />

          {/* Text overlay */}
          <div className="absolute w-[470px] lg:w-[36vw] 2xl:w-[36vw] bottom-40 lg:bottom-[18vh] 2xl:bottom-[18vh]  right-10 lg:right-[1vw] 2xl:right-[2vw] z-20">
            <p
              className="text-[#D68C45] font-semibold text-[1.4rem] lg:text-[1.4rem] 2xl:text-[1.8rem] leading-tight text-center mb-1"
              style={{ fontFamily: "Pally-Medium, sans-serif" }}
            >
              "TOGETHER WITH n+ PARTNERS ACROSS VARIOUS GREEN INITIATIVES.
            </p>
            <p
              className="text-black font-medium text-md lg:text-md 2xl:text-xl leading-tight text-center"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              Their success is our strongest motivation to keep growing every
              day."
            </p>
          </div>

          {/* Partner with E.C.O Card - Positioned in center-left */}
          <div className="absolute left-20 lg:left-[8vw] 2xl:left-[10vw] top-3/7 lg:top-[40vh] 2xl:top-[42vh] transform -translate-y-1/2 z-10">
            <div
              className={`relative w-[520px] h-[550px] lg:w-[35vw] lg:h-[37vw] 2xl:w-[34vw] 2xl:h-[40vw] transition-transform duration-700 cursor-pointer`}
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
                <div className="bg-white rounded-3xl lg:rounded-[2vw] px-15 lg:px-[2vw] 2xl:px-[2.2vw] pt-4 lg:pt-[1vh] pb-20 lg:pb-[5vh] shadow-lg w-full h-full flex flex-col justify-between">
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
                    className="text-[2rem] lg:text-[2.2rem] 2xl:text-[2.6rem] font-bold text-[#D68C45] mb-4"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    <span className="underline decoration-5">Đồng hành</span>{" "}
                    cùng E.C.O
                  </h2>

                  {/* Description */}
                  <p
                    className="text-md lg:text-lg 2xl:text-xl leading-relaxed  flex-grow"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
                  >
                    E.C.O là bạn đồng hành lý tưởng dành cho các doanh nghiệp
                    muốn triển khai hoạt động CSR/ESG (Trách nhiệm xã hội, Môi
                    trường và Quản trị doanh nghiệp) một cách minh bạch, hiệu
                    quả và dễ truyền thông.
                  </p>
                  <p
                    className="text-md lg:text-lg 2xl:text-xl leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
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
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Back of card - Why Choose E.C.O */}
              <div
                className={`absolute w-full h-full transition-all duration-1500 ${
                  isCardFlipped ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: isCardFlipped
                    ? "rotateY(0deg)"
                    : "rotateY(-180deg)",
                }}
              >
                <div className="bg-white rounded-3xl lg:rounded-[2vw] p-20 lg:p-[2.2vw] 2xl:p-[2.5vw] shadow-lg w-full h-full flex flex-col justify-between">
                  {/* Title */}
                  <h2
                    className="text-[2.8rem] lg:text-[3rem] 2xl:text-[3.2rem] font-bold text-[#D68C45] mb-3 text-center"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Vì sao chọn E.C.O
                  </h2>

                  {/* Content */}
                  <div
                    className="space-y-3 lg:space-y-[1.2vh] 2xl:space-y-[1.4vh] flex-grow"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
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
