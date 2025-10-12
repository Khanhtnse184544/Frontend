import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import h1 from "../assets/homepage/h1.jpg";
import h2 from "../assets/homepage/h2.jpg";
import h3 from "../assets/homepage/h3.jpg";
import h4 from "../assets/homepage/h4.jpg";
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
  const images = [h1, h2, h3, h4];
  var navigate = useNavigate();

  // Nội dung từng slide với tiêu đề phù hợp
  const slideContents = [
    {
      bigTitle1: "MIXED FOREST OF HARDWOOD TREES AND BAMBOO",
      smallTitle: "Forest",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      buttonText: "READ MORE",
    },
    {
      bigTitle1: "WETLAND AND SEMI-WETLAND VEGETATION",
      smallTitle: "Forest",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      buttonText: "READ MORE",
    },
    {
      bigTitle1: "MONOSPECIFIC BAMBOO FOREST",
      smallTitle: "Forest",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      buttonText: "READ MORE",
    },
    {
      bigTitle1: "SEMI-DECIDUOUS EVERGREEN FOREST",
      smallTitle: "Forest",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      buttonText: "READ MORE",
    },
    
  ];

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
    switch (currentSlide.bigTitle1) {
      case "MIXED FOREST OF HARDWOOD TREES AND BAMBOO":
        navigate('/mixed-hardwood');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        break;
      case "WETLAND AND SEMI-WETLAND VEGETATION":
        navigate('/wetland');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        break;
      case "MONOSPECIFIC BAMBOO FOREST":
        navigate('/bamboo-forest');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        break;
      case "SEMI-DECIDUOUS EVERGREEN FOREST":
        navigate('/semi-deciduous-forest');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
        break;
      default:
        break;
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

          <div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <div className=" mt-4">
                <img
                  src={logo}
                  alt="Plant Pot Logo"
                  className="w-40 h-40 mx-auto"
                  draggable={false}
                />
              </div>
              <div
                className="text-white text-lg font-semibold mt-2 mb-3 tracking-wide text-center drop-shadow "
                style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
              >
                Every touch plants a seed for the future
              </div>
              
              <div
                className="text-white text-7xl mb-2 tracking-widest text-center drop-shadow font-bold"
                style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
              >
                0000
              </div>
              <div
                className="text-white font-extrabold text-[3.3rem]  text-center mb-10 tracking-tight drop-shadow font-sans uppercase"
                style={{ fontFamily: "Montserrat, Inter, Arial, sans-serif" }}
              >
                MỖI CHẠM LÀ MỘT HẠT MẦM CHO TƯƠNG LAI
              </div>
              <button 
                onClick={handlePlantTreeClick}
                className="bg-[#d68c45] text-white border-2 border-[#d68c45] text-lg font-semibold w-[300px] py-2 rounded-[15px] shadow transition-all duration-200 font-sans hover:bg-transparent hover:text-[#d68c45]"
              >
                Plant Trees with C.H.A.M
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative w-full py-40 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center space-y-8">
              {/* Top text */}
              <p className="text-lg font-krub text-gray-700 mb-3">
                We are a non profit company in Vietnam.
              </p>

              {/* ABOUT US image */}
              <div className="mb-6">
                <img
                  src={aboutUs}
                  alt="ABOUT US"
                  className="w-[40vw] mx-auto h-auto"
                />
              </div>

              {/* Bottom text */}
              <p className="text-lg font-krub text-gray-700 mb-12">
                Connecting people and nature through technology and emotion.
              </p>

              {/* Read more button with icons */}
              <div className="flex items-end justify-end pe-[95px] pt-3">
                <button 
                  onClick={handleAboutUsClick}
                  className="flex items-center justify-center w-[250px] h-[60px] read-more-button font-bold text-xl px-8 py-3 rounded-full flex items-center space-x-2"
                >
                  <img src={shining} alt="shining" className="w-6 h-6" />
                  <span className="read-more-text text-lg">Read more</span>
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
          <div className="absolute left-[90px] top-[350px] z-10 text-white w-[30%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Small horizontal line */}
                <div className="w-8 h-px bg-white mb-2"></div>

                {/* Small title */}
                <h2 className="hero-small-title text-xl font-semibold text-white/90 mb-4">
                  {slideContents[currentIndex].smallTitle}
                </h2>

                {/* Main titles */}
                <h1
                  className="hero-main-title text-4xl  leading-tight mb-2 text-white"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  {slideContents[currentIndex].bigTitle1}
                </h1>

                {/* Description */}
                <p className="hero-description text-xs max-w-full text-white/90 mb-8 leading-relaxed">
                  {slideContents[currentIndex].description}
                </p>

                {/* Button */}
                <button 
                  onClick={handleReadMoreClick}
                  className="hero-button border-1 border-white/80 rounded-[13px] px-7.5 py-2.5 hover:bg-white/10 transition-all duration-300 text-white text-xs uppercase cursor-pointer"
                >
                  {slideContents[currentIndex].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Clickable Gallery Images - Circular Carousel */}
          <div
            className="absolute right-2 bottom-30 overflow-visible"
            style={{ width: "730px" }}
          >
            <motion.div
              className="flex gap-6"
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
                  className={`cursor-pointer w-[250px] h-[350px] object-cover rounded-2xl border-2 shadow-lg transition-all duration-300 flex-shrink-0 ${
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
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
        <section className="p-26  bg-white">
          <div className="text-center mb-3">
            <div className="relative">
              <div className="w-full h-px bg-black absolute top-1/3 transform -translate-y-1/2"></div>
              <h2 className="text-[2.65rem] font-krub font-bold mb-8 relative z-10 bg-white px-8 inline-block">
                <span className="text-black">CONNECT </span>
                <span className="text-[#d68c45]">WITH</span>
                <span className="text-black"> </span>
                <span className="text-[#d68c45]">US</span>
              </h2>
            </div>
          </div>

          <div className="flex justify-center gap-[75px]">
            {/* Sponsor a Tree */}
            <div className="relative rounded-[20px] overflow-hidden group cursor-pointer w-[330px] h-[330px]">
              <img
                src={sponsorTree}
                alt="Sponsor a Tree"
                className="w-[330px] h-[330px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Default title - always visible */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-krub font-semibold text-white drop-shadow-lg">
                  SPONSOR A TREE
                </h3>
              </div>
              {/* Hover overlay - only visible on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-krub font-semibold mb-2">
                    SPONSOR A TREE
                  </h3>
                  <p className="text-sm  mb-4 text-gray-200">
                    One tap. One tree. One real impact.
                  </p>
                  <button 
                    onClick={handleSponsorTreeClick}
                    className="border-1 border-white rounded-[15px] px-7 py-2 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    GET INVOLVED
                  </button>
                </div>
              </div>
            </div>

            {/* Become a Sponsor */}
            <div className="relative rounded-[20px] overflow-hidden group cursor-pointer w-[330px] h-[330px]">
              <img
                src={becomeSponsor}
                alt="Become a Sponsor"
                className="w-[330px] h-[330px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Default title - always visible */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-krub font-semibold text-white drop-shadow-lg">
                  BECOME A SPONSOR
                </h3>
              </div>
              {/* Hover overlay - only visible on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-krub font-semibold mb-2">
                    BECOME A SPONSOR
                  </h3>
                  <p className="text-sm mb-4 text-gray-200">
                    Activate Your CSR with Real Impact
                  </p>
                  <button 
                    onClick={handleBecomeSponsorClick}
                    className="border-1 border-white rounded-[15px] px-7 py-2 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    GET INVOLVED
                  </button>
                </div>
              </div>
            </div>

            {/* For School Education */}
            <div className="relative rounded-[20px] overflow-hidden group cursor-pointer w-[330px] h-[330px]">
              <img
                src={schoolEducation}
                alt="For School Education"
                className="w-[330px] h-[330px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Default title - always visible */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-krub font-semibold text-white drop-shadow-lg">
                  FOR SCHOOL EDUCATION
                </h3>
              </div>
              {/* Hover overlay - only visible on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-krub font-semibold mb-2">
                    FOR SCHOOL EDUCATION
                  </h3>
                  <p className="text-sm mb-4 text-gray-200">
                    Bring Environmental Education to Life
                  </p>
                  <button 
                    onClick={handleSchoolEducationClick}
                    className="border-1 border-white rounded-[15px] px-7 py-2 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    GET INVOLVED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Send Us A Leaf Section */}
        <section className="relative h-[925px] overflow-hidden">
          {/* Background image + overlay */}
          <img
            src={sentUsALeaf}
            alt="Send Us A Leaf Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text bên trái */}
          <div className="absolute left-[214px] top-1/2 transform -translate-y-1/2 text-white">
            <h2
              className="text-[4.1rem] font-extrabold"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              SEND US A LEAF
            </h2>
            <p
              className="text-3xl font-krub"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              We'd Love to Hear From You.
            </p>
          </div>

          {/* Nút FILL FORM */}
          <div className="absolute right-[25%] top-1/2 transform -translate-y-1/2">
            <button
              onClick={toggleForm}
              className="border-1 border-white rounded-[20px] px-16 py-3.5 text-white font-league-spartan text-lg hover:bg-white/10 transition-colors"
            >
              FILL FORM
            </button>
          </div>

          {/* Form hiển thị khi showForm = true */}
          {showForm && (
            <div
              className="absolute right-[100px] top-[60px] w-[550px] translate-y-20 bg-white/10 backdrop-blur-lg border border-white rounded-2xl p-8 text-white"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              {/* Header: Feedback title + Close button */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex-1 border-t border-white mr-4"></div>
                <h3 className="text-2xl font-bold text-white mb-0">Feedback</h3>
                <button
                  onClick={toggleForm}
                  className="ml-4 text-3xl font-bold focus:outline-none"
                  style={{ lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              <form className="space-y-8">
                <div>
                  <label className="block mb-2 text-md text-white">
                    Your Name :
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent py-2 px-1 focus:outline-none text-sm border-none"
                      style={{
                        fontFamily: "Pally-Regular, sans-serif",
                        fontStyle: "italic",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-md text-white">
                    Your contact:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your contact information"
                      className="w-full bg-transparent py-2 px-1 focus:outline-none text-sm border-none"
                      style={{
                        fontFamily: "Pally-Regular, sans-serif",
                        fontStyle: "italic",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-md text-white">
                    Can you share us your thoughts:
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder=""
                      className="w-full bg-transparent py-2 px-1 focus:outline-none resize-none text-sm border-none"
                      style={{
                        fontFamily: "Pally-Regular, sans-serif",
                        fontStyle: "italic",
                      }}
                    />
                    {!feedbackText && (
                      <div className="absolute bottom-2 left-1 text-sm text-white/60 italic pointer-events-none" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                        Share your thoughts with us...
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <input
                    type="checkbox"
                    id="public"
                    className="w-4 h-4  accent-white"
                  />
                  <label
                    htmlFor="public"
                    className="text-md text-[#d68c45]"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    May we share your feedback publicly?
                  </label>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-[170px] h-[45px] border border-white rounded-[18px] text-lg font-bold hover:bg-white/20 transition-colors text-white"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    SEND
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
