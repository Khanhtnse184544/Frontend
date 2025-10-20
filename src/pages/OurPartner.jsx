import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsPopup from "../components/ContactUsPopup";
import partnerBanner from "../assets/get_involved/our_partner/banner.png";
import collab1 from "../assets/get_involved/our_partner/collab1.png";
import collab2 from "../assets/get_involved/our_partner/collab2.png";
import collab3 from "../assets/get_involved/our_partner/collab3.png";
import cattienImage from "../assets/get_involved/our_partner/img.png";
import h1Image from "../assets/homepage/h1.jpg";
import h2Image from "../assets/homepage/h2.jpg";
import h3Image from "../assets/homepage/h3.jpg";
import h4Image from "../assets/homepage/h4.jpg";
import { forests } from "../data/forests";

export default function OurPartner() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSemiDeciduousClick = () => {
    navigate("/semi-deciduous-forest");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handleBambooForestClick = () => {
    navigate("/bamboo-forest");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handleWetlandClick = () => {
    navigate("/wetland");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handleMixedHardwoodClick = () => {
    navigate("/mixed-hardwood");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // You can add API call here
  };

  // Forest image data
  const forestImages = [
    {
      src: h1Image,
      alt: "Environmental Impact 1",
      title: forests[0].bigTitle1,
      onClick: handleMixedHardwoodClick
    },
    {
      src: h2Image,
      alt: "Environmental Impact 2", 
      title: forests[1].bigTitle1,
      onClick: handleWetlandClick
    },
    {
      src: h3Image,
      alt: "Environmental Impact 3",
      title: forests[2].bigTitle1,
      onClick: handleBambooForestClick
    },
    {
      src: h4Image,
      alt: "Semi-Deciduous Evergreen Forest",
      title: forests[3].bigTitle1,
      onClick: handleSemiDeciduousClick
    }
  ];

  // Render forest image component
  const renderForestImage = (imageData, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer h-[40vh]"
      onClick={imageData.onClick}
    >
      <img
        src={imageData.src}
        alt={imageData.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h2 className="text-5xl font-bold mb-2 leading-[1.2]">
            {imageData.title
              .split(', ')
              .map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && <br />}
                </span>
              ))}
          </h2>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>
      <div className="bg-[#EEEEEE]">
        {/* Hero Section with Banner */}
        <section className="relative w-full h-[600px] xl:h-[75vh] 2xl:h-[75vh] overflow-hidden -mt-[102px] 2xl:-mt-[131.7px] group cursor-pointer">
          <img
            src={partnerBanner}
            alt="Our Partners Banner"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Default overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <div className="text-center text-white ">
              <h1
                className="text-5xl xl:text-6xl 2xl:text-8xl text-center text-[#FE9A3B] font-bold mb-4 "
               
              >
                VÌ SAO NÊN HỢP TÁC VỚI E.C.O
              </h1>
            </div>
          </div>

          {/* Hover overlay with dark background and white box */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white  pt-18 xl:pt-[4vh] 2xl:pt-[5vh] text-center mt-13">
              {/* Top text */}
              <p
                className="text-sm xl:text-sm 2xl:text-lg max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-center mx-auto mb-6 xl:mb-[2vh] 2xl:mb-[3vh]"
                
              >
                Hợp tác cùng E.C.O không chỉ là thực hiện CSR - đó là cơ hội để
                kiến tạo kết nối đích thực với cộng đồng sống xanh, lan tỏa giá
                trị thương hiệu và tiên phong trong hoạt động truyền thông bền
                vững một cách minh bạch và sáng tạo.
              </p>

              {/* Main heading */}
              <h1
                className="text-5xl xl:text-6xl 2xl:text-8xl text-center text-[#FE9A3B] font-bold mb-6 xl:mb-[2vh] 2xl:mb-[3vh]"
               
              >
                VÌ SAO NÊN HỢP TÁC VỚI E.C.O
              </h1>

              {/* Bottom text */}
              <p
                className="text-sm xl:text-sm 2xl:text-lg text-center max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto mb-10 xl:mb-[4vh] 2xl:mb-[5vh]"
                
              >
                E.C.O là một doanh nghiệp xã hội kết hợp công nghệ, giáo dục và
                hành động xanh. Thông qua ứng dụng game hóa C.H.A.M, chúng tôi
                biến mỗi hành động số thành tác động môi trường ngoài đời thực -
                một cây xanh được trồng, một cánh rừng được phục hồi, một thế hệ
                được truyền cảm hứng.
              </p>
              <button
                onClick={openContact}
                className="bg-[#D68C45] text-white font-bold rounded-[15px] xl:rounded-[1vw] 2xl:rounded-[0.8vw] w-[190px] xl:w-[15vw] 2xl:w-[12vw] h-[47px] xl:h-[6vh] 2xl:h-[7vh] border-3 border-transparent hover:bg-transparent hover:text-[#D68C45] hover:border-[#D68C45] transition-colors duration-300 shadow-lg text-sm xl:text-lg 2xl:text-xl flex items-center justify-center mx-auto"
               
              >
                Liên Hệ
              </button>
            </div>
          </div>
        </section>

        {/* Ways To Collaborate Section */}
        <section className="ps-30 pe-20 xl:px-20 2xl:ps-[8vw] 2xl:pe-[6vw] py-40 xl:py-[8vh] 2xl:py-[10vh] bg-[#EEEEEE] mt-20 mb-30">
          <div className="mx-auto">
            <div className="grid grid-cols-7 gap-10 xl:gap-[6vw] 2xl:gap-[6vw] items-start">
              {/* Left Column - Ways To Collaborate */}
              <div className="lg:col-span-3 space-y-2">
                <div>
                  <h2
                    className="text-5xl xl:text-5xl 2xl:text-6xl font-bold"
                   
                  >
                    Các Cách Thức{" "}
                    <br />  
                    <span className="text-[#D68C45]">Hợp Tác</span>
                  </h2>
                </div>

                <div className="space-y-4 xl:space-y-3 2xl:space-y-6">
                  <div>
                    <h3
                      className="text-xl xl:text-xl 2xl:text-2xl font-bold mb-2 xl:my-3 2xl:my-5"
                     
                    >
                      Chúng tôi chào đón sự hợp tác từ:{" "}
                    </h3>

                    <p
                      className="leading-relaxed text-sm xl:text-sm 2xl:text-xl"
                      
                    >
                     <span className="font-bold"> Doanh nghiệp có trách nhiệm xã hội (CSR):</span> Tài trợ các
                      chiến dịch trồng cây thật với sự minh bạch tuyệt đối và
                      khả năng hiển thị trên nền tảng số.
                    </p>
                  </div>

                  <div>
                    <p
                      className="leading-relaxed text-sm xl:text-sm 2xl:text-xl"
                      
                    >
                      <span className="font-bold">Trường học & Tổ chức giáo dục:</span> Đồng kiến tạo các workshop
                      môi trường, chương trình tương tác cho học sinh và các
                      chuyến đi thực địa xanh.
                    </p>
                  </div>

                  <div>
                    <p
                      className="leading-relaxed text-sm xl:text-sm 2xl:text-xl"
                      
                    >
                      <span className="font-bold">Các tổ chức NGO & Quỹ môi trường:</span> Sử dụng nền tảng của
                      chúng tôi để lan tỏa sứ mệnh bảo tồn thông qua hình thức
                      game hóa và kể chuyện sáng tạo.
                    </p>
                  </div>

                  <div>
                    <p
                      className="leading-relaxed text-sm xl:text-sm 2xl:text-xl"
                      
                    >
                      <span className="font-bold">KOLs & Nhà sáng tạo nội dung:</span> Đồng hành cùng chúng tôi lan
                      tỏa ý thức môi trường đến thế hệ Gen Z qua những nội dung
                      số vui tươi và truyền cảm hứng.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Column - Image Collage */}
              <div className="lg:col-span-2 flex justify-center items-center">
                <div className="relative w-full max-w-md h-100">
                  {/* Top Image - Positioned left */}
                  <div className="absolute top-0 -left-10 xl:-left-8 2xl:-left-16 z-30 h-[25vh] xl:h-[25vh] 2xl:h-[25vh] flex items-center">
                    <img
                      src={collab1}
                      alt="Green mountains and valleys"
                      className="h-full w-auto object-cover rounded-2xl xl:rounded-[1.5vw] 2xl:rounded-[1vw] shadow-xl"
                    />
                  </div>

                  {/* Middle Image - Positioned right and slightly down */}
                  <div className="absolute top-40 xl:top-[20vh] 2xl:top-[20vh] -right-7 xl:-right-14 2xl:-right-20 z-20 h-[25vh] xl:h-[25vh] 2xl:h-[25vh] flex items-center">
                    <img
                      src={collab2}
                      alt="Rolling hills and golden fields"
                      className="h-full w-auto object-cover rounded-2xl xl:rounded-[1.5vw] 2xl:rounded-[1vw] shadow-xl"
                    />
                  </div>

                  {/* Bottom Image - Positioned left and further down */}
                  <div className="absolute -bottom-25 xl:-bottom-[13vh] 2xl:-bottom-[27vh] -left-3 xl:-left-6 2xl:-left-8 z-10 h-[25vh] xl:h-[25vh] 2xl:h-[25vh] flex items-center">
                    <img
                      src={collab3}
                      alt="Serene lake with trees"
                      className="h-full w-auto object-cover rounded-2xl xl:rounded-[1.5vw] 2xl:rounded-[1vw] shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Why Choose E.C.O */}
              <div className="lg:col-span-2 flex flex-col justify-center ps-10 pt-30">
                <div className="space-y-2">
                  <h3
                    className="text-xl xl:text-xl 2xl:text-2xl font-bold text-[#D68C45] "
                   
                  >
                    Hãy Cùng Nhau Kiến tạo Tác động xanh
                  </h3>
                  <h2
                    className="text-2xl xl:text-2xl 2xl:text-3xl font-bold "
                   
                  >
                    Vì sao chọn E.C.O?
                  </h2>
                </div>

                <div className="space-y-3 text-xs 2xl:text-lg mt-4">
                  <p
                    className="leading-relaxed"
                    
                  >
                    Chúng tôi không chỉ trồng cây—chúng tôi tái kết nối con
                    người với thiên nhiên bằng công nghệ, sự minh bạch và những
                    câu chuyện từ trái tim. Mỗi cây xanh được trồng cùng chúng
                    tôi đều có vị trí thật, hình ảnh thật, sự chăm sóc thật và
                    một câu chuyện thật để kể.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Title Section */}
        <div className="text-center mt-10 xl:mt-[4vh] 2xl:mt-[5vh] px-8 xl:px-[5vw] 2xl:px-[8vw]">
          <h1
            className="text-4xl xl:text-[3.5rem] 2xl:text-7xl font-bold text-black mb-8 xl:mb-[4vh] 2xl:mb-[5vh]"
           
          >
            PARTNER WITH E.C.O - Where Forests Grow – Together
          </h1>
        </div>

        {/* Our Impact Section with Homepage Images */}
        <section className="pb-10 xl:pb-[6vh] 2xl:pb-[8vh] bg-[#EEEEEE]">
          <div className="px-30 xl:px-[5vw] 2xl:px-[8vw] mx-auto">
            {/* Image Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Column - 2 Images */}
              <div className="space-y-8">
                {forestImages.slice(0, 2).map((imageData, index) => 
                  renderForestImage(imageData, index)
                )}
              </div>

              {/* Right Column - 2 Images */}
              <div className="space-y-8">
                {forestImages.slice(2, 4).map((imageData, index) => 
                  renderForestImage(imageData, index + 2)
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Popup */}
      <ContactUsPopup
        isOpen={isContactOpen}
        onClose={closeContact}
        onSubmit={handleContactSubmit}
      />

      <Footer />
    </>
  );
}
