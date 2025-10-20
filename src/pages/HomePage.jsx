import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConnectCard from "../components/ConnectCard";
import { useNavigate } from "react-router-dom";
import { forests } from "../data/forests";
import logo from "../assets/homepage/logo.png";
import BackGround from "../assets/homepage/BackGround.png";
import hero from "../assets/homepage/hero.png";
import aboutUs from "../assets/homepage/about_us.png";
import shining from "../assets/homepage/shining.png";
import sponsorTree from "../assets/homepage/connect_with_us/sponser_a_tree.png";
import becomeSponsor from "../assets/homepage/connect_with_us/become_a_sponsor.png";
import schoolEducation from "../assets/homepage/connect_with_us/for_school_education.png";

// News images
import joinOur from "../assets/homepage/news/join_our.png";
import realtimeClimate from "../assets/homepage/news/realtime_climate.png";
import virtualTreesRealImpact from "../assets/homepage/news/virtual_trees_real_impact.png";
import ourGreenMission from "../assets/homepage/news/our_green_misson.png";

// Send Us A Leaf image
import sentUsALeaf from "../assets/homepage/sent_us_a_leaf.png";

export default function HomePage() {
  const images = forests.map((f) => f.image);
  var navigate = useNavigate();

  // Nội dung từng slide với tiêu đề phù hợp
  const slideContents = forests.map((f) => ({
    bigTitle1: f.bigTitle1,
    description: f.description,
    buttonText: "CHI TIẾT",
    route: f.route,
  }));

  // News carousel data
  const newsData = [
    {
      image: joinOur,
      title: "JOIN OUR GREEN JOURNEY",
      description:
        "Be part of the change and help us grow forests, build communities, and connect people with nature.",
    },
    {
      image: realtimeClimate,
      title: "REAL-TIME CLIMATE CONNECTION",
      description:
        "Stay connected to nature through our real-time monitoring and interactive features.",
    },
    {
      image: virtualTreesRealImpact,
      title: "VIRTUAL TREES, REAL IMPACT",
      description:
        "Experience the power of technology in environmental conservation through our innovative platform.",
    },
    {
      image: ourGreenMission,
      title: "OUR GREEN MISSION",
      description:
        "Learn about our mission to connect people with nature through technology and emotion.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    setFeedbackText(value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    const computedStyles = window.getComputedStyle(textarea);
    const lineHeight = parseInt(computedStyles.lineHeight || '20', 10);
    const maxLines = 8;
    const maxHeight = lineHeight * maxLines;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = newHeight + 'px';
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  // News carousel state
  const [newsIndex, setNewsIndex] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  // Auto-slide for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideContents.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [slideContents.length]);

  // Auto-slide for news carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 4000); // Faster transition for news

    return () => clearInterval(interval);
  }, [newsData.length]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMoreClick = () => {
    const currentSlide = slideContents[currentIndex];
    if (currentSlide?.route) {
      navigate(currentSlide.route);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    }
  };

  const handleSponsorTreeClick = () => {
    navigate('/sponsor');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  const handleBecomeSponsorClick = () => {
    navigate('/become-sponsor');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  const handleSchoolEducationClick = () => {
    navigate('/for-school-education');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  const handlePlantTreeClick = () => {
    navigate('/our-project');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  const handleAboutUsClick = () => {
    navigate('/about');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // News carousel handlers
  const handleNewsClick = (index) => {
    setNewsIndex(index);
  };

  const handleNewsNext = () => {
    setNewsIndex((prev) => (prev + 1) % newsData.length);
  };

  const handleNewsPrev = () => {
    setNewsIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  // Tạo circular array cho carousel - hình đầu tiên không trùng với nền hiện tại
  const getCircularImages = () => {
    const circularArray = [];
    for (let i = 0; i < images.length; i++) {
      // Bắt đầu từ index tiếp theo để tránh trùng với nền hiện tại
      const index = (currentIndex + i + 1) % images.length;
      circularArray.push({
        image: images[index],
        originalIndex: index,
        content: slideContents[index],
      });
    }
    return circularArray;
  };

  const menu = [
    {
      title: "About Us",
      children: ["Core Team", "Partner"],
    },
    {
      title: "Get Involved",
      children: [
        "Our Fund",
        "Sponsor a tree",
        "Become a Sponsor",
        "Teachers & Students",
      ],
    },
    {
      title: "C.H.A.M",
      children: ["Our Project", "Our Game"],
    },
    {
      title: "News",
      children: [],
    },
  ];

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      <Header />

      <div>
        <section className="relative w-full items-center justify-center h-[50vw] select-none mb-12">
          <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
            <Navbar />
          </div>
          <img
            src={hero}
            alt="Background"
            className="absolute inset-0 w-full h-full "
          />

          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center px-4">
              <div>
                <img
                  src={logo}
                  alt="Plant Pot Logo"
                  className="w-32 h-32 sm:w-32 sm:h-32 xl:w-40 xl:h-40 2xl:w-72 2xl:h-68 xl:-my-3 2xl:-mt-6 mx-auto"
                  draggable={false}
                />
              </div>
              
              <div
                className="text-white text-4xl sm:text-5xl  xl:text-6xl 2xl:text-8xl mb-2 2xl:-mt-6 2xl:mb-6 tracking-widest text-center drop-shadow font-bold"
                style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
              >
                0000
              </div>
              <div
                className="text-white font-extrabold text-xl sm:text-2xl  xl:text-[3.1rem] 2xl:text-7xl text-center mb-6 sm:mb-10 2xl:mb-20 tracking-tight drop-shadow  uppercase px-4"
                style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
              >
                MỖI CHẠM LÀ MỘT HẠT MẦM CHO TƯƠNG LAI
              </div>
              <button 
                onClick={handlePlantTreeClick}
                className="bg-[#d68c45] text-white border-2 border-[#d68c45] text-base sm:text-md xl:text-lg 2xl:text-xl font-semibold w-[250px] sm:w-[250px] xl:w-[300px] 2xl:w-[370px] py-2 sm:py-2 xl:py-2 2xl:py-3.5 rounded-[15px] 2xl:rounded-[22px] shadow transition-all duration-200  hover:bg-transparent hover:text-[#d68c45]"
               
              >
                Cùng C.H.A.M Trồng Cây
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative w-full py-40 2xl:py-[15vh] bg-white">
          <div className="max-w-7xl 2xl:max-w-[70vw] mx-auto px-8 2xl:px-[3vw]">
            <div className="text-center space-y-8 2xl:space-y-[2.5vh]">
              {/* Top text */}
              <p className="text-lg 2xl:text-2xl font-krub text-gray-700 mb-3 2xl:mb-[1vh]">
                Chúng tôi là một Doanh nghiệp Xã hội tại Việt Nam.
              </p>

              {/* ABOUT US image */}
              <div className="mb-6 2xl:mb-[3vh]">
                <img
                  src={aboutUs}
                  alt="ABOUT US"
                  className="w-[40vw] 2xl:w-[45vw] mx-auto h-auto"
                />
              </div>

              {/* Bottom text */}
              <p className="text-lg 2xl:text-2xl font-krub text-gray-700 mb-12 2xl:mb-[4vh]">
              Với sứ mệnh gắn kết con người với thiên nhiên qua công nghệ và cảm xúc.
              </p>

              {/* Read more button with icons */}
              <div className="flex items-end justify-end pe-[95px] 2xl:pe-[5vw] pt-3 2xl:pt-[1vh]">
                <button 
                  onClick={handleAboutUsClick}
                  className="flex items-center justify-center w-[250px] 2xl:w-[18svw] h-[60px] 2xl:h-[7vh] read-more-button font-bold  px-8 2xl:px-[1.2vw] py-3 2xl:py-[1.3vh] rounded-full flex items-center space-x-2"
                >
                  <img src={shining} alt="shining" className="w-6 h-6 2xl:w-[1.6vw] 2xl:h-[1.6vw]" />
                  <span className="read-more-text text-lg 2xl:text-2xl">Chi Tiết</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero section - Viết lại hoàn toàn */}
        <section className="relative h-[100vh] overflow-hidden">
          {/* Background image với animation */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* LEFT: Text content với animation từ dưới lên */}
          <div className="absolute left-[90px] top-[350px] lg:left-[6vw] lg:top-[52vh] 2xl:left-[8vw] 2xl:top-[55vh] z-10 text-white w-[30%] lg:w-[30vw] xl:w-[28vw] 2xl:w-[34vw]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 lg:space-y-6 2xl:space-y-8"
              >
                {/* Small horizontal line */}
                <div className="w-8 lg:w-9 2xl:w-10 h-px bg-white mb-2 lg:mb-2 2xl:mb-3"></div>

                {/* Small title */}
                <h2 className="hero-small-title text-xl lg:text-xl 2xl:text-2xl font-semibold text-white/90 mb-3 lg:mb-4 2xl:mb-5">
                  Rừng
                </h2>

                {/* Main titles */}
                <h1
                  className="hero-main-title text-3xl lg:text-4xl 2xl:text-6xl leading-tight mb-2 lg:mb-3 2xl:mb-4 text-white"
                  style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
                >
                  {slideContents[currentIndex].bigTitle1}
                </h1>

                {/* Description */}
                <p className="hero-description text-xs lg:text-sm 2xl:text-xl max-w-full lg:max-w-[30vw] 2xl:max-w-[33vw] text-white/90 mb-8 lg:mb-9 2xl:mb-10 leading-relaxed">
                  {slideContents[currentIndex].description}
                </p>

                {/* Button */}
                <button 
                  onClick={handleReadMoreClick}
                  className="hero-button border-1 border-white/80 rounded-[13px] lg:rounded-[14px] 2xl:rounded-[16px] px-7.5 lg:px-8.5 2xl:px-10 py-2.5 lg:py-2.5 2xl:py-3 hover:bg-white/10 transition-all duration-300 text-white text-xs lg:text-sm 2xl:text-sm uppercase cursor-pointer"
                >
                  {slideContents[currentIndex].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Clickable Gallery Images - Circular Carousel */}
          <div
            className="absolute right-2 lg:right-[2vw] 2xl:right-[2vw] bottom-30 lg:bottom-[12.5vh] 2xl:bottom-[13vh] overflow-visible w-[730px] lg:w-[45vw] 2xl:w-[45vw]"
          >
            <motion.div
              className="flex gap-6 lg:gap-[1.5vw] 2xl:gap-[1.6vw]"
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: -137 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {getCircularImages().map((item, i) => (
                <motion.img
                  key={`${item.originalIndex}-${i}`}
                  src={item.image}
                  alt={`Gallery ${item.originalIndex + 1}`}
                  onClick={() => handleImageClick(item.originalIndex)}
                  className={`cursor-pointer w-[250px] lg:w-[16.5vw] 2xl:w-[16vw] h-[350px] lg:h-[23vw] 2xl:h-[22.5vw] object-cover rounded-2xl border-2 shadow-lg transition-all duration-300 flex-shrink-0 ${
                    item.originalIndex === currentIndex
                      ? "border-white shadow-2xl"
                      : "border-white/30 hover:scale-105 hover:border-white/60"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 lg:bottom-9 2xl:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 lg:gap-3.5 2xl:gap-4">
            {images.map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === currentIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => handleImageClick(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="p-26 lg:px-[6vw] lg:py-[15vh] 2xl:px-[6vw] 2xl:py-[15vh] bg-white">
          <div className="text-center mb-3 lg:mb-[4vh] 2xl:mb-[4vh]">
            <div className="relative">
              <div className="w-full h-px bg-black absolute top-1/3 transform -translate-y-1/2"></div>
              <h2 className="text-[2.65rem] lg:text-5xl 2xl:text-7xl font-krub font-bold mb-8 lg:mb-[3vh] 2xl:mb-[4vh] relative z-10 bg-white px-8 lg:px-[2vw] inline-block">
                <span className="text-black"> KẾT NỐI </span>
                <span className="text-[#d68c45]">VỚI</span>
                <span className="text-black"> </span>
                <span className="text-[#d68c45]">E.C.O </span>
              </h2>
            </div>
          </div>

          <div className="flex justify-center gap-[75px] lg:gap-[4vw] 2xl:gap-[4vw]">
            <ConnectCard
              image={sponsorTree}
              alt="Sponsor a Tree"
              title={(<span className="text-lg lg:text-lg 2xl:text-3xl">CÙNG GIEO MẦM XANH</span>)}
              description="Hành động nhỏ - Thay đổi lớn."
              onClick={handleSponsorTreeClick}
              defaultTitleClass=""
              hoverTitleClass=""
            />

            <ConnectCard
              image={becomeSponsor}
              alt="Become a Sponsor"
              title={(<>TRỞ THÀNH ĐỐI TÁC <br /> <span> ĐỒNG HÀNH</span></>)}
              description="Biến hoạt động CSR của bạn thành những cánh rừng thật."
              onClick={handleBecomeSponsorClick}
            />

            <ConnectCard
              image={schoolEducation}
              alt="For School Education"
              title={(<>CHƯƠNG TRÌNH XANH CHO TRƯỜNG HỌC</>)}
              description="Cùng E.C.O gieo mầm ý thức xanh cho thế hệ trẻ."
              onClick={handleSchoolEducationClick}
            />
          </div>
        </section>
        {/* Send Us A Leaf Section */}
        <section className="relative h-[925px] lg:h-[90vh] 2xl:h-[90vh] overflow-hidden">
          {/* Background image + overlay */}
          <img
            src={sentUsALeaf}
            alt="Send Us A Leaf Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text bên trái */}
          <div className="absolute left-[214px] lg:left-[10vw] 2xl:left-[12vw] top-1/2 transform -translate-y-1/2 text-white">
            <h2
              className="text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold mb-2"
            >
              NHẮN GỬI 
            </h2>
            <p
              className="text-2xl lg:text-2xl xl:text-xl 2xl:text-3xl font-krub"
             
            >
              Chúng tôi luôn mong nhận được mọi góp ý từ bạn.
            </p>
          </div>

          {/* Nút FILL FORM */}
          <div className="absolute right-[25%] lg:right-[15vw] xl:right-[15vw] 2xl:right-[15vw] top-1/2 transform -translate-y-1/2">
            <button
              onClick={toggleForm}
              className="border-1 border-white rounded-[15px] 2xl:rounded-[20px] px-16 lg:px-[3.5vw] 2xl:px-[4vw] py-3.5 lg:py-[1.1vh] 2xl:py-[1.5vh] text-white font-league-spartan text-lg lg:text-lg 2xl:text-2xl hover:bg-white/10 transition-colors"
            >
              ĐIỀN FORM
            </button>
          </div>

          {/* Form hiển thị khi showForm = true */}
          {showForm && (
            <div
              className="absolute right-[100px] lg:right-[7vw] 2xl:right-[8vw] top-[60px] lg:top-[0vh] 2xl:top-[8vh] w-[550px] lg:w-[36vw] 2xl:w-[36vw] translate-y-20 bg-white/10 backdrop-blur-lg border border-white rounded-3xl p-8 lg:p-[2vw] 2xl:p-[2vw] text-white"
             
            >
              {/* Header: Feedback title + Close button */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex-1 border-t border-white mr-4"></div>
                <h3 className="text-xl lg:text-xl xl:xl 2xl:text-3xl font-bold text-white mb-0">Góp ý</h3>
                <button
                  onClick={toggleForm}
                  className="ml-4 text-lg lg:text-lg 2xl:text-3xl font-bold focus:outline-none"
                  style={{ lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              <form className="space-y-8 lg:space-y-[2vh] 2xl:space-y-[2.2vh]">
                <div>
                  <label className="block mb-2 text-sm lg:text-sm 2xl:text-xl text-white">
                    Tên của bạn :
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nhập tên của bạn"
                      className="w-full bg-transparent py-2 lg:py-[1vh] 2xl:py-[1.1vh] px-0 focus:outline-none text-xs lg:text-xs 2xl:text-lg border-none"
                      
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm lg:text-sm2xl:text-xl text-white">
                    Liên hệ:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nhập liên hệ"
                      className="w-full bg-transparent py-2 lg:py-[1vh] 2xl:py-[1.1vh] px-0 focus:outline-none text-xs lg:text-xs 2xl:text-lg border-none"
                      
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm lg:text-sm2xl:text-xl text-white">
                    Góp ý:
                  </label>
                  <div className="relative">
                    <textarea
                      rows={1}
                      value={feedbackText}
                      onChange={handleFeedbackChange}
                      placeholder=""
                      className="w-full bg-transparent py-2 lg:py-[1vh] 2xl:py-[1.1vh] px-0 focus:outline-none resize-none text-xs lg:text-xs 2xl:text-lg border-none"
                      
                    />
                    {!feedbackText && (
                      <div className="absolute bottom-2 left-0 text-xs lg:text-xs 2xl:text-lg text-white/60 italic pointer-events-none">
                        Chia sẻ ý kiến của bạn cùng chúng tôi...
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-[1vw] mt-2">
                  <input
                    type="checkbox"
                    id="public"
                    className="w-4 h-4  accent-white"
                  />
                  <label
                    htmlFor="public"
                    className="text-sm lg:text-sm 2xl:text-xl text-[#d68c45]"
                   
                  >
                    Chúng tôi có thể công khai góp ý của bạn không?
                  </label>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-[170px] xl:w-[13vw] 2xl:w-[12vw] h-[45px] lg:h-[6vh] xl:h-[6vh] 2xl:h-[5.5vh] border border-white rounded-[15px] text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-bold hover:bg-white/20 transition-colors text-white"
                   
                  >
                    GỬI
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>

        
      </div>
      {/*Footer Section*/}
      <Footer />
    </>
  );
}
