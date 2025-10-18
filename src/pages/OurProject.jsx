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
        <section className="relative w-full h-screen xl:h-[90vh] 2xl:h-[90vh] -mt-[102px] xl:-mt-[101.78px] 2xl:-mt-[131.8px] transition-all duration-700 hover:scale-[1.02] hover:brightness-110">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Forest Landscape"
              className="w-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-opacity-20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto ">
              <div className="flex justify-start">
                <div className="bg-white-10 rounded-[30px] xl:rounded-[2vw] 2xl:rounded-[1.5vw] py-11 xl:py-[5vh] 2xl:py-[5vh] ps-13 xl:px-[3vw] 2xl:ps-[4vw] pe-20  xl:pe-[5vw] 2xl:pe-[5vw] xl:ms-20 2xl:-ms-10 2xl:-mb-20 w-[50vw] text-left backdrop-blur-xs flex flex-col justify-center border-1 border-white transition-all duration-500">
                  <h1 className="text-white text-md xl:text-md 2xl:text-2xl font-bold mb-4 xl:mb-[2vh] 2xl:mb-[2.5vh]">
                    Chạm – Hiểu – Ấp ủ – Mầm
                  </h1>
                  <h2 className="text-[#D68C45] text-8xl xl:text-8xl 2xl:text-9xl font-bold mb-4 xl:mb-[2vh] 2xl:mb-[2.5vh]">
                    C.H.A.M
                  </h2>
                  <p className="text-white text-md xl:text-md 2xl:text-2xl font-bold">
                    Nền tảng số - Cầu nối giữa hành động ảo và tác động thực tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content Section */}
        <section className="px-20 xl:px-[10vw] 2xl:px-[5vw] pb-8 xl:pb-[4vh] 2xl:pb-[5vh] bg-white">
          <div className="container mx-auto px-6 xl:px-0 2xl:px-0">
            <div className="grid grid-cols-5  gap-10 xl:gap-[3vw] 2xl:gap-[5vw] items-center">
              {/* Left Column - Image */}
              <div className="col-span-2 ">
                <img
                  src={projectImage1}
                  alt="Boy planting tree with C.H.A.M project"
                  className="h-auto  w-40vw object-cover rounded-2xl xl:rounded-[1.5vw] 2xl:rounded-[1vw] shadow-lg"
                />
              </div>

              {/* Right Column - Content */}
              <div className="col-span-3 space-y-1 xl:space-y-4 2xl:space-y-6 ps-10 xl:ps-0 2xl:ps-0">
                <h3 className="text-md xl:text-md 2xl:text-2xl font-bold text-black leading-tight">
                  Với C.H.A.M - Một hành động nhỏ, một tác động lớn
                </h3>

                <div className="flex items-center gap-3">
                  <h2 className="text-5xl xl:text-5xl 2xl:text-6xl font-bold text-[#D68C45] py-4 xl:py-[2vh] 2xl:py-[2.5vh]">
                    DỰ ÁN CỦA CHÚNG TÔI
                  </h2>
                </div>

                <p className="text-md xl:text-md 2xl:text-2xl leading-relaxed">
                  <span className="font-bold">C.H.A.M</span> là sáng kiến tiên
                  phong kết hợp{" "}
                  <span className="font-bold">
                    công nghệ, phục hồi sinh thái và tương tác số,
                  </span>{" "}
                  được vận hành bởi doanh nghiệp xã hội{" "}
                  <span className="font-bold">E.C.O.</span>
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl leading-relaxed">
                  Đây là hành trình biến cam kết thành hành động, tạo nên những
                  cánh rừng thật, là kết quả từ niềm tin của cộng đồng và sự
                  đồng hành chiến lược của các doanh nghiệp CSR.
                </p>

                <div className="flex justify-end pe-15 xl:pe-0 2xl:pe-0 mt-8 xl:mt-[4vh] 2xl:mt-[5vh]">
                  <button
                    onClick={handleExploreClick}
                    className="bg-white border-3 border-[#D68C45] text-[#D68C45] text-md xl:text-xl 2xl:text-2xl px-18 xl:px-[3vw] 2xl:px-[2.5vw] py-3 xl:py-[1.5vh] 2xl:py-[2vh] rounded-[20px] xl:rounded-[1.5vw] 2xl:rounded-10 font-bold hover:bg-[#D68C45] hover:text-white transition-all duration-300"
                  >
                    Xem Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Project Details */}
        <section className="pt-20 xl:pt-[8vh] 2xl:pt-[10vh]">
          <div className="container mx-auto">
            <div className="mx-15 xl:mx-0 2xl:mx-0 text-center xl:px-20">
              <h2
                className="text-3xl xl:text-3xl
 2xl:text-5xl font-bold text-[#D68C45]"
              >
                Với C.H.A.M
              </h2>
              <h2
                className="text-3xl xl:text-3xl
 2xl:text-5xl font-bold text-[#D68C45] mb-3 xl:mb-[2vh] 2xl:mb-[2.5vh]"
              >
                Một hành động nhỏ, một tác động lớn
              </h2>

              <p className="text-md xl:text-md 2xl:text-2xl leading-relaxed mb-8 xl:mb-[4vh] 2xl:mb-[5vh]">
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
        <div className="container mx-auto -mt-20 ">
          <div className="grid grid-cols-5 gap-10 items-center">
            {/* Left Column - Image */}
            <div className="col-span-2 -ms-25 2xl:-ms-[10vw]">
              <img
                src={greenImpactImage}
                alt="Trees growing on floating landmass"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Column - Content */}
            <div className="col-span-3 space-y-6 xl:me-15">
              <h2
                className="text-3xl xl:text-3xl
 2xl:text-5xl font-bold text-[#D68C45]"
              >
                Tác động Xanh – CSR & Giáo dục Môi trường
              </h2>

              <div className="space-y-6 ">
                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  E.C.O triển khai các chương trình tái trồng rừng bền vững, tập
                  trung vào các giống cây bản địa có giá trị cao trong việc tái
                  tạo hệ sinh thái và được chăm sóc bởi những người dân địa
                  phương đã được qua đào tạo.
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Không chỉ trồng cây, E.C.O còn tổ chức các tour du lịch sinh
                  thái (eco-tour) và workshop tại trường học để xây dựng nhận
                  thức và thúc đẩy hành động trong giới trẻ.
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
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
      <section className="pb-20 xl:pb-[8vh] 2xl:pb-[10vh] -mt-20 xl:-mt-[8vh] 2xl:-mt-[10vh] relative">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-5 gap-10 items-center">
            {/* Left Column - Content */}
            <div className="col-span-3 space-y-6 xl:ms-20">
              <h2
                className="text-3xl xl:text-3xl
 2xl:text-5xl font-bold text-[#D68C45] text-center"
              >
                Trải nghiệm Game hóa - Nơi Niềm vui song hành cùng Trách nhiệm
              </h2>

              <div className="space-y-6">
                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Ứng dụng trò chơi điện tử C.H.A.M là một cam kết với thiên
                  nhiên thông qua trò chơi. Người chơi sẽ trồng cây kỹ thuật số,
                  hoàn thành nhiệm vụ, tham gia cộng đồng và xây dựng những khu
                  rừng ảo.
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Ứng dụng kết hợp cơ chế game hóa và dữ liệu thời tiết theo
                  thời gian thực để mang lại những trải nghiệm cá nhân hóa hấp
                  dẫn, khuyến khích tạo thói quen bền vững.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Space */}
            <div className="col-span-2 -me-25 2xl:-me-[12vw]">
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
      <section className="p-42 xl:p-[8vh] 2xl:p-[10vh] relative -mt-40 xl:-mt-[15vh] 2xl:-mt-[20vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={joinImage}
            alt="Lush forest landscape background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto ">
          <div className="flex justify-center items-start min-h-[60vh] xl:min-h-[70vh] 2xl:min-h-[75vh]">
            <div className=" -mt-15 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center">
              <h3
                className="text-3xl xl:text-3xl
 2xl:text-5xl font-bold text-[#D68C45] mb-6 xl:mb-[2vh] 2xl:mb-[3vh]"
              >
                Cùng tham gia hành trình
              </h3>

              <div className="space-y-4">
                <h2 className="text-md xl:text-md 2xl:text-2xl font-bold text-black">
                  C.H.A.M không chỉ là một trò chơi. Đó là cả một hành trình.
                </h2>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Một cử chỉ ảo – một cây xanh thật.
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Một hành động nhỏ – một tác động môi trường bền vững.
                </p>

                <p className="text-md xl:text-md 2xl:text-2xl text-black leading-relaxed">
                  Hãy tham gia phong trào xanh cùng C.H.A.M – nơi công nghệ ươm
                  mầm những cánh rừng.
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
