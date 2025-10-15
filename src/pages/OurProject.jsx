import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/C.H.A.M/our_project/hero.png";
import projectImage1 from "../assets/C.H.A.M/our_project/1.png";
import greenImpactImage from "../assets/C.H.A.M/our_project/green_impact.png";
import gamifiedImage from "../assets/C.H.A.M/our_project/gamified.png";
import joinImage from "../assets/C.H.A.M/our_project/join.png";

export default function OurProject() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/our-game");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };

  return (
    <>
      <Header />

      {/* Main Content Section */}
      <section className="relative w-full bg-white">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-screen -mt-[102px] transition-all duration-700 hover:scale-[1.02] hover:brightness-110">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Forest Landscape"
              className="w-full h-[90%] object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-opacity-20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-6">
              <div className="flex justify-start ">
                <div className="bg-white-10 rounded-[30px] py-11 ps-13 pe-20 max-w-6xl text-left backdrop-blur-xs flex flex-col justify-center border-1 border-white transition-all duration-500">
                  <h1
                    className="text-white text-xl font-bold mb-4"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Chạm – Hiểu – Ấp ủ – Mầm
                  </h1>
                  <h2
                    className="text-[#D68C45] text-8xl font-bold mb-4 "
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    C.H.A.M
                  </h2>
                  <p
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Nền tảng số - Cầu nối giữa hành động ảo và tác động thực tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content Section */}
        <section className="px-20 pb-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-5 gap-10 items-center">
              {/* Left Column - Image */}
              <div className="col-span-2">
                <img
                  src={projectImage1}
                  alt="Boy planting tree with C.H.A.M project"
                  className="h-[99%] w-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right Column - Content */}
              <div className="col-span-3 space-y-1 ps-10">
                <h3
                  className="text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  With C.H.A.M – one tree, one small action, one big change
                </h3>

                <div className="flex items-center gap-3">
                  <h2
                    className="text-5xl font-bold text-[#D68C45] py-4"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    DỰ ÁN CỦA CHÚNG TÔI
                  </h2>
                </div>

                <p
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  <span className="font-bold">C.H.A.M</span> là sáng kiến tiên
                  phong kết hợp{" "}
                  <span className="font-bold">
                    công nghệ, phục hồi sinh thái và tương tác số,
                  </span>{" "}
                  được vận hành bởi doanh nghiệp xã hội{" "}
                  <span className="font-bold">E.C.O.</span>
                </p>

                <p
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Đây là hành trình biến cam kết thành hành động, tạo nên những
                  cánh rừng thật, là kết quả từ niềm tin của cộng đồng và sự
                  đồng hành chiến lược của các doanh nghiệp CSR.
                </p>

                <div className="flex justify-end pe-15 mt-8">
                  <button
                    onClick={handleExploreClick}
                    className="bg-white border-3 border-[#D68C45] text-[#D68C45] text-xl px-18 py-3 rounded-[20px] font-bold hover:bg-[#D68C45] hover:text-white transition-all duration-300"
                  >
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Project Details */}
        <section className="pt-20">
          <div className="container mx-auto px-6">
            <div className="mx-15 text-center">
              <h2
                className="text-3xl font-bold text-[#D68C45]"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                With C.H.A.M
              </h2>
              <h2
                className="text-3xl font-bold text-[#D68C45] mb-3"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                One tree, one small action, one big change.
              </h2>

              <p
                className="text-xl leading-relaxed mb-8"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Dự án C.H.A.M là sáng kiến tiên phong của E.C.O, kết hợp công
                nghệ, bảo tồn và tương tác số. Mỗi cây ảo được trồng trong ứng
                dụng sẽ được hiện thực hóa thành cây thật, tạo ra tác động thực
                tế thông qua sự chung tay của người chơi. Điểm độc đáo là cây ảo
                được trồng trong nền tảng C.H.A.M sẽ được quy đổi thành cây
                thật.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* Green Impact Section */}
      <section>
        <div className="container mx-auto -mt-20 px-6">
          <div className="grid grid-cols-5 gap-10 items-center">
            {/* Left Column - Image */}
            <div className="col-span-2 -ms-25">
              <img
                src={greenImpactImage}
                alt="Trees growing on floating landmass"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Column - Content */}
            <div className="col-span-3 space-y-6 pe-15">
              <h2
                className="text-3xl font-bold text-[#D68C45]"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Tác động Xanh – CSR & Giáo dục Môi trường
              </h2>

              <div className="space-y-6">
                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  E.C.O triển khai các chương trình tái trồng rừng bền vững, tập
                  trung vào các giống cây bản địa có giá trị cao trong việc tái
                  tạo hệ sinh thái và được chăm sóc bởi những người dân địa
                  phương đã được qua đào tạo.
                </p>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Không chỉ trồng cây, E.C.O còn tổ chức các tour du lịch sinh
                  thái (eco-tour) và workshop tại trường học để xây dựng nhận
                  thức và thúc đẩy hành động trong giới trẻ.
                </p>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Các doanh nghiệp có thể đồng hành trong các chiến dịch CSR,
                  hưởng lợi từ hệ thống báo cáo minh bạch và những câu chuyện
                  chân thực, giúp nâng cao tác động môi trường lẫn giá trị
                  thương hiệu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Experience Section */}
      <section className="pb-20 -mt-20 relative">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-5 gap-10 items-center">
            {/* Left Column - Content */}
            <div className="col-span-3 space-y-6 ps-15">
              <h2
                className="text-3xl font-bold text-[#D68C45] text-center"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Trải nghiệm Game hóa - Nơi Niềm vui song hành cùng Trách nhiệm
              </h2>

              <div className="space-y-6">
                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Ứng dụng trò chơi điện tử C.H.A.M là một cam kết với thiên
                  nhiên thông qua trò chơi. Người chơi sẽ trồng cây kỹ thuật số,
                  hoàn thành nhiệm vụ, tham gia cộng đồng và xây dựng những khu
                  rừng ảo.
                </p>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Ứng dụng kết hợp cơ chế game hóa và dữ liệu thời tiết theo
                  thời gian thực để mang lại những trải nghiệm cá nhân hóa hấp dẫn,
                  khuyến khích tạo thói quen bền vững.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Space */}
            <div className="col-span-2 -me-25">
              <img
                src={gamifiedImage}
                alt="Trees growing on floating landmass"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="p-42 relative -mt-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={joinImage}
            alt="Lush forest landscape background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex justify-center items-start min-h-[60vh]">
            <div className="  px-12 -mt-20 max-w-4xl text-center ">
              <h3
                className="text-3xl font-bold text-[#D68C45] "
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Cùng tham gia hành trình
              </h3>

              <div className="">
                <h2
                  className="text-xl font-bold text-black"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  C.H.A.M không chỉ là một trò chơi. Đó là cả một hành trình.
                </h2>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Một cử chỉ ảo – một cây xanh thật.
                </p>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Một hành động nhỏ – một tác động môi trường bền vững.
                </p>

                <p
                  className="text-xl text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Hãy tham gia phong trào xanh cùng C.H.A.M – nơi công nghệ ươm mầm những cánh rừng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
