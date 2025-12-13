import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import { FaUsers, FaHeart, FaTree, FaComments, FaCalendarAlt, FaMapMarkerAlt, FaImage, FaHashtag, FaPaperPlane, FaEllipsisH, FaCode, FaClipboard, FaBold, FaItalic, FaListUl, FaListOl, FaQuoteLeft, FaLink } from "react-icons/fa";
import api from "../utils/api";
import hero from "../assets/get_involved/community/hero.png";
import logo from "../assets/homepage/logo.png";

export default function Community() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const sampleEvents = [
    {
      id: 1,
      title: "Ngày Trồng Cây Cộng Đồng",
      date: "2025-01-15",
      location: "Rừng Cúc Phương",
      description: "Cùng nhau trồng 1000 cây xanh tại Rừng Cúc Phương",
      participants: 150,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500"
    },
    {
      id: 2,
      title: "Workshop Bảo Vệ Môi Trường",
      date: "2025-01-20",
      location: "Hà Nội",
      description: "Học cách bảo vệ môi trường từ các chuyên gia",
      participants: 80,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500"
    },
    {
      id: 3,
      title: "Clean Up Day",
      date: "2025-01-25",
      location: "Bãi biển Đà Nẵng",
      description: "Dọn dẹp rác thải tại bãi biển Đà Nẵng",
      participants: 200,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500"
    }
  ];

  const sampleTestimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      role: "Sinh viên",
      content: "Tham gia cộng đồng E.C.O đã thay đổi cách nhìn của tôi về môi trường. Tôi cảm thấy mình đang góp phần tích cực cho tương lai.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      id: 2,
      name: "Trần Thị B",
      role: "Giáo viên",
      content: "Các hoạt động của E.C.O rất ý nghĩa và thiết thực. Học sinh của tôi rất hào hứng khi tham gia các chương trình.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      id: 3,
      name: "Lê Văn C",
      role: "Doanh nhân",
      content: "E.C.O giúp tôi kết nối với những người có cùng chí hướng bảo vệ môi trường. Đây là một cộng đồng tuyệt vời.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    }
  ];

  const samplePosts = [
    {
      id: 1,
      title: "Kinh nghiệm trồng cây tại Rừng Cúc Phương - Chia sẻ từ thành viên",
      content: "Hôm nay tôi muốn chia sẻ kinh nghiệm trồng cây tại Rừng Cúc Phương. Đây là lần đầu tiên tôi tham gia hoạt động này và cảm thấy rất ý nghĩa...",
      author: "Nguyễn Văn A",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      timeAgo: "2 ngày trước",
      tags: ["trồng cây", "kinh nghiệm", "cúc phương"],
      views: 1250,
      likes: 89,
      comments: 23,
      isLiked: false,
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300"
    },
    {
      id: 2,
      title: "Cách bảo vệ môi trường từ những hành động nhỏ hàng ngày",
      content: "Bảo vệ môi trường không cần những hành động lớn lao. Chỉ cần những thay đổi nhỏ trong cuộc sống hàng ngày...",
      author: "Trần Thị B",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      timeAgo: "1 tuần trước",
      tags: ["bảo vệ môi trường", "hành động", "cuộc sống"],
      views: 2100,
      likes: 156,
      comments: 45,
      isLiked: true,
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300"
    },
    {
      id: 3,
      title: "Tham gia Clean Up Day tại Đà Nẵng - Trải nghiệm tuyệt vời",
      content: "Cuối tuần vừa rồi tôi đã tham gia Clean Up Day tại bãi biển Đà Nẵng. Đây là một trải nghiệm rất ý nghĩa và bổ ích...",
      author: "Lê Văn C",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      timeAgo: "3 ngày trước",
      tags: ["clean up", "đà nẵng", "trải nghiệm"],
      views: 890,
      likes: 67,
      comments: 18,
      isLiked: false,
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300"
    }
  ];

  useEffect(() => {
    setEvents(sampleEvents);
    setTestimonials(sampleTestimonials);
    setPosts(samplePosts);
  }, []);

  
  const handleCreatePostModal = () => {
    if (postTitle.trim() && postContent.trim()) {
      const post = {
        id: posts.length + 1,
        title: postTitle,
        content: postContent,
        author: "Bạn",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        timeAgo: "Vừa xong",
        tags: ["mới"],
        views: 0,
        likes: 0,
        comments: 0,
        isLiked: false,
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300"
      };
      setPosts([post, ...posts]);
      setPostTitle("");
      setPostContent("");
      setShowCreatePostModal(false);
    }
  };

  const openCreatePostModal = () => {
    setShowCreatePostModal(true);
  };

  const closeCreatePostModal = () => {
    setShowCreatePostModal(false);
    setPostTitle("");
    setPostContent("");
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handlePostClick = (post) => {
    navigate(`/post/${post.id}`);
  };

  const handleCommentClick = (post) => {
    navigate(`/post/${post.id}`);
  };

  return (
    <>
      <Header />
      
      <section className="relative w-full items-center justify-center h-[60vh] lg:h-[50vw] select-none mb-12">
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
                className="text-white font-extrabold text-xl sm:text-2xl  xl:text-[3.1rem] 2xl:text-7xl text-center mb-6 sm:mb-10 2xl:mb-20 tracking-tight drop-shadow  mx-15"
                
              >
                CÙNG NHAU TẠO NÊN NHỮNG THAY ĐỔI TÍCH CỰC CHO MÔI TRƯỜNG
              </div>
            <div className="flex items-center justify-center">
              <SocialLinks 
                iconSize="w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8"
                iconColor="text-white"
                hoverColor="hover:scale-110"
                className="gap-4"
                customWrapper={(children) => (
                  <div className="">
                    {children}
                  </div>
                )}
              />
            </div>
            </div>
          </div>
        </section>

     

      <section className="py-16 lg:py-20 2xl:py-24 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black mb-4">
              Sự Kiện Sắp Tới
            </h2>
            <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
              Tham gia các hoạt động cộng đồng và cùng nhau bảo vệ môi trường
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 lg:h-56 2xl:h-64 object-cover"
                />
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-black mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base 2xl:text-lg">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="w-4 h-4 mr-2 text-[#D68C45]" />
                      <span className="text-sm lg:text-base 2xl:text-lg">
                        {new Date(event.date).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#D68C45]" />
                      <span className="text-sm lg:text-base 2xl:text-lg">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="w-4 h-4 mr-2 text-[#D68C45]" />
                      <span className="text-sm lg:text-base 2xl:text-lg">{event.participants} người tham gia</span>
                    </div>
                  </div>
                  
                    <button className="w-full bg-[#D68C45] text-white py-3 lg:py-3 rounded-xl font-semibold hover:bg-[#B87A3A] transition-colors duration-300">
                      Tham Gia Ngay
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 lg:py-20 2xl:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
              Diễn Đàn Cộng Đồng
            </h2>
            <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-300 max-w-3xl mx-auto">
              Chia sẻ kinh nghiệm, đặt câu hỏi và kết nối với những người có cùng đam mê bảo vệ môi trường
            </p>
          </div>

          <div className="bg-[#313131] rounded-2xl p-4 lg:p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
              <div className="flex items-center gap-4 flex-1 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
                  alt="User Avatar"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Chia sẻ những gì bạn đang nghĩ..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="flex-1 bg-[#636363] text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-600 focus:border-[#D68C45] focus:outline-none"
                  onFocus={() => setShowCreatePost(true)}
                  onClick={openCreatePostModal}
                  readOnly
                />
              </div>
              <button
                onClick={openCreatePostModal}
                className="bg-[#D68C45] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B87A3A] transition-colors duration-300 w-full lg:w-auto"
              >
                Tạo Bài Viết
              </button>
            </div>

            
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-[#313131] rounded-2xl p-4 lg:p-8 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={post.thumbnail} 
                      alt="Post Thumbnail"
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-2 hover:text-[#D68C45] transition-colors cursor-pointer truncate"
                      onClick={() => handlePostClick(post)}
                    >
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm lg:text-base 2xl:text-lg mb-4 line-clamp-2">
                      {post.content}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-[#636363] text-gray-300 text-xs lg:text-sm rounded-full hover:bg-[#D68C45] hover:text-white transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.avatar} 
                          alt={post.author}
                          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium text-sm lg:text-base">{post.author}</p>
                          <p className="text-gray-400 text-xs lg:text-sm">{post.timeAgo}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm lg:text-base">
                        <span>{post.views.toLocaleString()} lượt xem</span>
                        <span>{post.likes} lượt thích</span>
                        <span 
                          className="cursor-pointer hover:text-[#D68C45] transition-colors"
                          onClick={() => handleCommentClick(post)}
                        >
                          {post.comments} bình luận
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleLikePost(post.id)}
                      className={`p-2 rounded-full transition-colors ${
                        post.isLiked 
                          ? 'text-[#D68C45] bg-[#D68C45]/20' 
                          : 'text-gray-400 hover:text-[#D68C45] hover:bg-[#D68C45]/10'
                      }`}
                    >
                      <FaHeart className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {showCreatePostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#313131] rounded-2xl w-[95vw] md:w-[80vw] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Tạo Bài Viết</h2>
              <button
                onClick={closeCreatePostModal}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
                  alt="User Avatar"
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                />
                
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Tiêu đề bài viết..."
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-400 px-0 py-3 text-xl lg:text-2xl font-semibold border-none focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Chia sẻ những gì bạn đang nghĩ..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-400 px-0 py-3 text-base lg:text-lg border-none focus:outline-none resize-none min-h-[120px]"
                  rows={4}
                />
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm mb-4">Thêm vào bài viết của bạn</p>
                <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2">
                  <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-[#636363] text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    <FaImage className="w-4 h-4 text-[#D68C45]" />
                    <span className="text-sm">Ảnh/Video</span>
                  </button>
                  <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-[#636363] text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    <FaUsers className="w-4 h-4 text-[#D68C45]" />
                    <span className="text-sm">Gắn thẻ</span>
                  </button>
                  <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-[#636363] text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#D68C45]" />
                    <span className="text-sm">Vị trí</span>
                  </button>
                  <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-[#636363] text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    <FaHashtag className="w-4 h-4 text-[#D68C45]" />
                    <span className="text-sm">Hashtag</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>🌍</span>
                  <span>Mọi người có thể xem</span>
                </div>
                <button
                  onClick={handleCreatePostModal}
                  disabled={!postTitle.trim() || !postContent.trim()}
                  className="bg-[#D68C45] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B87A3A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Đăng Bài
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}