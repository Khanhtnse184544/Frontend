import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const images = ["/img/h1.jpg", "/img/h2.jpg", "/img/h3.jpg", "/img/h4.jpg"];
  var navigate = useNavigate();
  // Nội dung từng slide
  const slideContents = [
    {
      smallTitle: "Ecosystem",
      bigTitle1: "CÁT TIÊN",
      bigTitle2: "National Park",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests.",
      button: "READ MORE",
    },
    {
      smallTitle: "Forest",
      bigTitle1: "SEMI-DECIDOUS",
      bigTitle2: "EVERGREEN FOREST",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      button: "DISCOVER NOW",
    },
    {
      smallTitle: "Forest",
      bigTitle1: "MIXED FOREST OF",
      bigTitle2: "HARDWOOD TREES",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      button: "SEE MORE",
    },
    {
      smallTitle: "Forest",
      bigTitle1: "MONOSPECIFIC",
      bigTitle2: "BAMBOO FOREST",
      description:
        "Cát Tiên National Park is one of Vietnam's most important and diverse tropical forests, located in the south of the country.",
      button: "START YOUR JOURNEY",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
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

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      <Header />

      {/* Navbar */}
      <div
        className="
    absolute 
    top-[80px]    /* đẩy xuống ngay dưới Header cao 80px */
    left-0 right-0
    w-full
    bg-transparent  /* nền trong suốt */
    px-12 py-6
    font-[League_Spartan]
    text-white
    z-40           /* nhỏ hơn z-50 của Header */
  "
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/img/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-semibold">Home</span>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-10 relative">
            {menu.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div
                  className="flex items-center gap-1 cursor-pointer hover:underline underline-offset-4"
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  {item.title}
                  {item.children.length > 0 && <FaChevronDown size={12} />}
                </div>
                {(openMenu === index || hoveredMenu === index) &&
                  item.children.length > 0 && (
                    <ul className="absolute left-0 top-full mt-2 bg-black/90 text-white p-4 rounded-lg space-y-2 z-50 shadow-lg min-w-[180px]">
                      {item.children.map((child, i) => (
                        <li
                          key={i}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          └ {child}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1 rounded-full border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
            <button className="absolute right-3 top-1.5 text-white">🔍</button>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative h-[100vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Cat Tien"
            initial={{ opacity: 0.3, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/30"></div>

        {/* LEFT: Text + Arrows, thay đổi theo slide */}
        <div className="absolute left-[90px] top-1/3 z-10 text-white flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-light mb-2">
              {slideContents[currentIndex].smallTitle}
            </h2>
            <h1 className="text-6xl font-bold leading-tight mb-4">
              {slideContents[currentIndex].bigTitle1}
            </h1>
            <h1 className="text-6xl font-bold leading-tight mb-2">
              {slideContents[currentIndex].bigTitle2}
            </h1>
            <p className="text-lg mb-8 max-w-md">
              {slideContents[currentIndex].description}
            </p>
            <button className="border-2 border-white/80 rounded-full px-8 py-3 hover:bg-white/10 transition-all duration-300">
              {slideContents[currentIndex].button}
            </button>
          </div>
          {/* Arrows dưới đoạn văn */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT: Gallery */}
        <div className="absolute right-[90px] top-1/3 flex gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              onClick={() => handleSelect(i)}
              className={`cursor-pointer w-[260px] h-[360px] object-cover rounded-2xl border border-gray-300 shadow-md transition-transform duration-300 ${
                i === currentIndex
                  ? "scale-105 border-white"
                  : "opacity-70 hover:scale-105"
              }`}
            />
          ))}
        </div>
      </section>
      {/* CHAM Section */}
      <section className="py-20 px-[170px]">
        <div className="mb-12">
          <h2 className="text-[#d68c45] text-6xl font-krub font-semibold mb-8">
            C.H.A.M
          </h2>
          <div className="w-full h-px bg-black mb-12"></div>
        </div>

        <div className="grid grid-cols-3 gap-16">
          <div className="space-y-6">
            <p className="text-black text-[35px] font-krub font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse varius in eros tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-black text-[35px] font-krub font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse varius in eros tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-black text-[35px] font-krub font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse varius in eros tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.
            </p>
            <button className="border border-white/80 rounded-[20px] px-12 py-3 text-white bg-gray-600 hover:bg-gray-700 transition-colors">
              Read more
            </button>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="relative h-[880px] overflow-hidden">
        <img
          src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181310252-node-69%3A221-1750181310642.png"
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute right-[200px] top-1/2 transform -translate-y-1/2 text-white">
          <p className="text-2xl font-league-spartan font-normal mb-4">
            We are a non profit company in Vietnam.
          </p>
          <h2 className="text-8xl font-league-spartan font-black mb-6">
            ABOUT US
          </h2>
          <p className="text-2xl font-league-spartan font-normal mb-8">
            Connecting people and nature through technology and emotion.
          </p>
          <button className="border-2 border-white rounded-[20px] px-12 py-4 text-white font-league-spartan hover:bg-white/10 transition-colors">
            READ MORE
          </button>
        </div>
      </section>
      {/* Connect With Us Section */}
      <section className="py-20 px-[170px]">
        <div className="text-center mb-16">
          <h2 className="text-[64px] font-krub font-bold mb-8">
            <span className="text-black">CONNECT </span>
            <span className="text-[#d68c45]">WITH</span>
            <span className="text-black"> </span>
            <span className="text-[#d68c45]">US</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Sponsor a Tree */}
          <div className="relative rounded-[20px] overflow-hidden group">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181312031-node-I72%3A316%3B72%3A283-1750181311806.png"
              alt="Sponsor a Tree"
              className="w-full h-[438px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-krub font-semibold mb-4">
                  SPONSOR A TREE
                </h3>
                <button className="border-2 border-white rounded-[20px] px-8 py-3 text-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Become a Sponsor */}
          <div className="relative rounded-[20px] overflow-hidden group">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181313515-node-I73%3A398%3B72%3A328-1750181313630.png"
              alt="Become a Sponsor"
              className="w-full h-[438px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-krub font-semibold mb-4">
                  BECOME A SPONSOR
                </h3>
                <button className="border-2 border-white rounded-[20px] px-8 py-3 text-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* For School Education */}
          <div className="relative rounded-[20px] overflow-hidden group">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181314820-node-I73%3A487%3B73%3A446-1750181315075.png"
              alt="For School Education"
              className="w-full h-[438px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-krub font-semibold mb-4">
                  FOR SCHOOL EDUCATION
                </h3>
                <button className="border-2 border-white rounded-[20px] px-8 py-3 text-white hover:bg-white/10 transition-colors">
                  Learn More
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
          src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181316305-node-74%3A256-1750181316447.png"
          alt="Send Us A Leaf Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text bên trái */}
        <div className="absolute left-[214px] top-1/2 transform -translate-y-1/2 text-white">
          <h2 className="text-8xl font-league-spartan font-black mb-4">
            SEND US A LEAF
          </h2>
          <p className="text-5xl font-league-spartan font-extralight">
            We'd Love to Hear From You.
          </p>
        </div>

        {/* Nút FILL FORM */}
        <div className="absolute right-[200px] top-1/2 transform -translate-y-1/2">
          <button
            onClick={toggleForm}
            className="border-2 border-white rounded-[20px] px-16 py-4 text-white font-league-spartan text-xl hover:bg-white/10 transition-colors"
          >
            FILL FORM
          </button>
        </div>

        {/* Form hiển thị khi showForm = true */}
        {showForm && (
          <div
            className="absolute right-[200px] top-1/2 transform -translate-y-1/2 
                     w-[500px] bg-white/10 backdrop-blur-lg border border-white 
                     rounded-2xl p-8 text-white"
          >
            {/* Close button */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>

            {/* Tiêu đề form */}
            <h3 className="text-3xl font-semibold mb-6">Feedback</h3>

            <form className="space-y-4">
              <div>
                <label className="block mb-1">Your Name :</label>
                <input
                  type="text"
                  className="w-full border-b border-white bg-transparent py-1 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">Your contact:</label>
                <input
                  type="text"
                  className="w-full border-b border-white bg-transparent py-1 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1">
                  Can you share us your thoughts:
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b border-white bg-transparent py-1 focus:outline-none resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="public"
                  className="w-4 h-4 accent-white"
                />
                <label htmlFor="public" className="text-lg">
                  May we share your feedback publicly?
                </label>
              </div>

              {/* Nút send */}
              <button
                type="submit"
                className="mt-6 w-full py-3 border border-white rounded-full 
                         text-xl font-medium hover:bg-white/20 transition-colors"
              >
                SEND
              </button>
            </form>
          </div>
        )}
      </section>

      {/* News Section */}
      <section className="py-20 px-[170px]">
        <div className="mb-12">
          <h2 className="text-black text-[64px] font-krub font-bold mb-8">
            NEWS
          </h2>
          <div className="w-full h-px bg-black mb-12"></div>
        </div>

        <div className="flex justify-between items-start">
          <div className="w-[627px]">
            <p className="text-black text-[32px] font-krub font-normal leading-relaxed">
              Follow our journey as we grow forests, build communities, and
              connect people with nature — one step at a time.
            </p>
            <button className="mt-8 border border-white/80 rounded-[20px] px-12 py-3 text-white bg-gray-600 hover:bg-gray-700 transition-colors">
              Read more
            </button>
          </div>

          {/* News Images Stack */}
          <div className="relative w-[950px] h-[387px]">
            <div className="absolute top-0 left-0 w-[386px] h-[387px] bg-[#d9d9d9] rounded-lg"></div>
            <div className="absolute top-[34px] left-[349px] w-[318px] h-[319px] bg-[#c5c5c5] rounded-lg"></div>
            <div className="absolute top-[69px] left-[615px] w-[249px] h-[249px] bg-[#a9a9a9] rounded-lg"></div>
            <div className="absolute top-[107px] left-[778px] w-[172px] h-[173px] bg-[#727272] rounded-lg"></div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12 space-x-4">
          <div className="w-[14px] h-[14px] bg-[#dde0e4] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#dde0e4] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#dde0e4] rounded-full"></div>
          <button className="ml-8 p-2">
            <ChevronLeft className="w-7 h-7 text-gray-600" />
          </button>
          <button className="p-2">
            <ChevronRight className="w-7 h-7 text-gray-600" />
          </button>
        </div>
      </section>
      {/*Footer Section*/}
      <Footer />
    </>
  );
}
