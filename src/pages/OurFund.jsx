import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ecoFund from "../assets/get_involved/our_fund/eco_fund.png";
import fundGoal from "../assets/get_involved/our_fund/fund_goal.png";
import logo from "../assets/homepage/logo.png";
import financeState from "../assets/get_involved/our_fund/finance_state.png";

export default function OurFund() {
  const navigate = useNavigate();

  const handleSponsorClick = () => {
    navigate("/sponsor");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>

      {/* Hero Section with Background Image */}
      <section
        className="relative h-[450px] w-[85%]  bg-center flex items-center mt-[-40px] mx-auto rounded-[30px]"
        style={{
          backgroundImage: `url(${ecoFund})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 flex justify-between w-full px-16 h-full items-end pb-16">
          {/* Left side - Title */}
          <div className="text-white">
            <h1
              className="text-6xl font-bold mb-3"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              Quỹ E.C.O
            </h1>
            <p
              className="text-xl tracking-[0.2em]"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              Vì một tương lai xanh.
            </p>
          </div>

          {/* Right side - Message and Button */}
          <div className="text-white text-center"></div>
        </div>
        <div className="relative z-10 flex justify-between items-end w-full px-16">
          {/* Left side - Title */}
          <div className="text-white"></div>

          {/* Right side - Message and Button */}
          <div className="text-white text-center">
            <p
              className="text-md leading-tight tracking-wide mb-5 max-w-lg"
              style={{ fontFamily: "Pally-Medium, sans-serif" }}
            >
              Với chúng tôi, phát triển bền vững không chỉ là mục tiêu, mà còn
              là một hành trình cần được lan tỏa và công khai minh bạch.
            </p>
            <button
              onClick={handleSponsorClick}
              className="bg-white  text-black font-bold py-1.5  rounded-[15px] w-[280px] hover:bg-black hover:text-white transition-colors duration-300 shadow-lg text-xl flex items-center justify-center mx-auto"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              Sponsor Now
            </button>
          </div>
        </div>
      </section>

      {/* Fund Goals Section */}
      <section className="py-15 px-16">
        <div className="flex items-center gap-8 px-26">
          {/* Left side - Content */}
          <div className="w-1/3">
            <div className="bg-gradient-to-tr from-black via-[#4D4D4D] to-[#6B6B6B] rounded-[30px] p-8 text-white relative overflow-hidden h-[325px] w-[350px] mx-auto transition-all duration-300 ease-in-out group">
              {/* Top Left - E.C.O Corporate */}
              <div className="absolute top-7 left-8">
                <h2
                  className="text-lg font-semibold tracking-wider group-hover:scale-110 transition-all duration-300 ease-in-out transform origin-center"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  E.C.O Corporate
                </h2>
              </div>

              {/* Right Side - Logo */}
              <div className="absolute top-0 right-0">
                <div className="w-45 h-45 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="E.C.O Logo"
                    className="w-65 h-65 object-contain group-hover:scale-110 transition-all duration-300 ease-in-out transform origin-center"
                  />
                </div>
              </div>

              {/* Bottom Left - 1+ Millions */}
              <div className="absolute bottom-8 left-8 group-hover:scale-110 transition-all duration-300 ease-in-out transform origin-center">
                <div className="">
                  <div
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
                  >
                    <span
                      className="text-[2.75rem] font-semibold"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      1+
                    </span>{" "}
                    Millions
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Planting tree
                  </div>
                </div>
              </div>

              {/* Bottom Right - In 5 */}
              <div className="absolute bottom-4 right-8 text-right group-hover:scale-110 transition-all duration-300 ease-in-out transform origin-center">
                <div className="space-y-1">
                  <div
                    className="text-lg"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    In{" "}
                    <span
                      className="text-[2.8rem] font-semibold"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-2/3">
            <img
              src={fundGoal}
              alt="Fund Goals"
              className="w-auto h-[310px] rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Financial Statement Section */}
      <section className="py-20 px-16 bg-white">
        <div className="w-[95%] mx-auto">
          {/* Financial State Image */}
          <div className="flex justify-center mb-16">
            <img
              src={financeState}
              alt="Financial Statement Timeline"
              className="w-full h-auto"
            />
          </div>

          {/* Our Commitment Section */}
          <div className="max-w-5xl mx-auto ">
            <div className="bg-[#F4F4F4] rounded-[30px] pt-8">
              <div className="text-center mb-3">
                <h2
                  className="text-[3.5rem] font-bold"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  <span className="text-[#D68C45]">E.C.O</span>
                  <span className="text-[#3A3A3A]"> Cam Kết</span>
                </h2>
              </div>

              <div className="text-left px-20 space-y-2 pb-12">
                <p
                  className="text-md  leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Đội ngũ điều hành Tài chính (CFO) của chúng tôi, với chuyên
                  môn về Công nghệ Truyền thông cùng trách nhiệm quản lý tài
                  chính - pháp lý, cam kết đảm bảo mọi nguồn quỹ đều được quản
                  lý chặt chẽ và tuân thủ tuyệt đối các quy định của pháp luật.
                </p>

                <p
                  className="text-md  leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Trong tương lai, E.C.O hướng tới việc hợp tác cùng một đơn vị
                  kiểm toán độc lập để xác minh tính minh bạch của các báo cáo
                  tài chính, qua đó củng cố niềm tin vững chắc nơi cộng đồng và
                  các đối tác.
                </p>

                <p
                  className="text-md  leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Chúng tôi luôn lắng nghe những góp ý từ cộng đồng và đối tác
                  để không ngừng cải thiện quy trình quản lý quỹ, đồng thời tối
                  ưu hóa những tác động tích cực mà dự án mang lại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional content sections can be added here */}

      <Footer />
    </>
  );
}
