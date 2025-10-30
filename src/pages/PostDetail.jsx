import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUsers, FaHeart, FaComments, FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Sample posts data (in real app, this would come from API)
  const samplePosts = [
    {
      id: 1,
      title: "Kinh nghiệm trồng cây tại Rừng Cúc Phương - Chia sẻ từ thành viên",
      content: `Hôm nay tôi muốn chia sẻ kinh nghiệm trồng cây tại Rừng Cúc Phương. Đây là lần đầu tiên tôi tham gia hoạt động này và cảm thấy rất ý nghĩa.

Trước khi tham gia, tôi đã chuẩn bị khá kỹ lưỡng:
- Đọc tài liệu về các loại cây phù hợp với khí hậu
- Chuẩn bị dụng cụ cần thiết
- Tìm hiểu về kỹ thuật trồng cây đúng cách

Khi đến nơi, tôi được hướng dẫn bởi các chuyên gia rất tận tình. Họ giải thích từng bước một cách chi tiết và dễ hiểu.

Những điều tôi học được:
1. Cách chọn vị trí trồng phù hợp
2. Kỹ thuật đào hố và đặt cây
3. Cách chăm sóc cây sau khi trồng
4. Tầm quan trọng của việc theo dõi và bảo vệ cây

Sau một ngày làm việc, tôi cảm thấy rất tự hào khi nhìn thấy những cây con mà mình đã trồng. Đây thực sự là một trải nghiệm ý nghĩa và bổ ích.

Tôi hy vọng bài viết này sẽ giúp ích cho những ai đang có ý định tham gia hoạt động trồng cây. Hãy cùng nhau góp phần bảo vệ môi trường!`,
      author: "Nguyễn Văn A",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      timeAgo: "2 ngày trước",
      tags: ["trồng cây", "kinh nghiệm", "cúc phương"],
      views: 1250,
      likes: 89,
      comments: 23,
      isLiked: false,
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      fullContent: true
    },
    {
      id: 2,
      title: "Cách bảo vệ môi trường từ những hành động nhỏ hàng ngày",
      content: `Bảo vệ môi trường không cần những hành động lớn lao. Chỉ cần những thay đổi nhỏ trong cuộc sống hàng ngày, chúng ta đã có thể góp phần tích cực cho môi trường.

Dưới đây là những cách đơn giản mà tôi đã áp dụng:

1. Sử dụng túi vải thay vì túi nilon
- Luôn mang theo túi vải khi đi mua sắm
- Từ chối túi nilon không cần thiết
- Tái sử dụng túi nilon đã có

2. Tiết kiệm nước
- Tắt vòi nước khi đánh răng
- Sử dụng vòi sen thay vì bồn tắm
- Thu gom nước mưa để tưới cây

3. Tiết kiệm điện
- Tắt đèn khi không sử dụng
- Sử dụng bóng đèn LED
- Rút phích cắm các thiết bị không dùng

4. Phân loại rác
- Tách riêng rác hữu cơ và vô cơ
- Tái chế giấy, nhựa, kim loại
- Hạn chế sử dụng đồ nhựa dùng một lần

5. Sử dụng phương tiện công cộng
- Đi xe bus, xe đạp khi có thể
- Đi bộ cho những quãng đường ngắn
- Sử dụng chung xe với bạn bè

Những hành động này tuy nhỏ nhưng nếu nhiều người cùng làm sẽ tạo ra tác động lớn. Hãy bắt đầu từ hôm nay!`,
      author: "Trần Thị B",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      timeAgo: "1 tuần trước",
      tags: ["bảo vệ môi trường", "hành động", "cuộc sống"],
      views: 2100,
      likes: 156,
      comments: 45,
      isLiked: true,
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      fullContent: true
    },
    {
      id: 3,
      title: "Tham gia Clean Up Day tại Đà Nẵng - Trải nghiệm tuyệt vời",
      content: `Cuối tuần vừa rồi tôi đã tham gia Clean Up Day tại bãi biển Đà Nẵng. Đây là một trải nghiệm rất ý nghĩa và bổ ích mà tôi muốn chia sẻ với mọi người.

Sáng sớm, chúng tôi tập trung tại bãi biển Mỹ Khê với hơn 200 tình nguyện viên. Mỗi người được phát găng tay, túi rác và dụng cụ thu gom.

Những gì chúng tôi thu gom được:
- Rất nhiều chai nhựa và lon nước
- Túi nilon và bao bì thực phẩm
- Đầu lọc thuốc lá
- Rác thải từ các hoạt động du lịch
- Một số đồ vật bị sóng đánh vào bờ

Điều đáng chú ý là phần lớn rác thải đều có thể tái chế. Điều này cho thấy tầm quan trọng của việc phân loại rác tại nguồn.

Sau 3 giờ làm việc, chúng tôi đã thu gom được hơn 500kg rác thải. Số rác này được phân loại và gửi đến các cơ sở tái chế phù hợp.

Cảm nhận của tôi:
- Rất tự hào khi góp phần làm sạch môi trường
- Nhận thức rõ hơn về tác động của rác thải
- Kết bạn với nhiều người có cùng chí hướng
- Học được nhiều kiến thức về bảo vệ môi trường

Tôi khuyến khích mọi người tham gia các hoạt động tương tự. Mỗi hành động nhỏ đều có ý nghĩa!`,
      author: "Lê Văn C",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      timeAgo: "3 ngày trước",
      tags: ["clean up", "đà nẵng", "trải nghiệm"],
      views: 890,
      likes: 67,
      comments: 18,
      isLiked: false,
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      fullContent: true
    }
  ];

  // Sample comments
  const sampleComments = [
    {
      id: 1,
      postId: 1,
      author: "Nguyễn Văn D",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      content: "Cảm ơn bạn đã chia sẻ kinh nghiệm hữu ích này! Tôi cũng đang có ý định tham gia hoạt động trồng cây.",
      timeAgo: "2 giờ trước",
      likes: 5
    },
    {
      id: 2,
      postId: 1,
      author: "Trần Thị E",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      content: "Tôi cũng đã tham gia hoạt động này và rất thích! Các chuyên gia hướng dẫn rất tận tình.",
      timeAgo: "5 giờ trước",
      likes: 3
    },
    {
      id: 3,
      postId: 2,
      author: "Lê Văn F",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      content: "Những tips này rất thực tế và dễ áp dụng. Tôi sẽ bắt đầu từ việc sử dụng túi vải.",
      timeAgo: "1 ngày trước",
      likes: 8
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = samplePosts.find(p => p.id === parseInt(postId));
      if (foundPost) {
        setPost(foundPost);
        setComments(sampleComments.filter(c => c.postId === parseInt(postId)));
      }
      setLoading(false);
    }, 500);
  }, [postId]);

  const handleLikePost = () => {
    setPost(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        postId: parseInt(postId),
        author: "Bạn",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        content: newComment,
        timeAgo: "Vừa xong",
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setPost(prev => ({ ...prev, comments: prev.comments + 1 }));
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className=" text-xl">Đang tải...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center ">
            <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
            <button
              onClick={() => navigate('/community')}
              className="bg-[#D68C45]  px-6 py-3 rounded-lg hover:bg-[#B87A3A] transition-colors"
            >
              Quay lại Community
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className=" w-full px-20 pt-10 pb-20">
        <button
          onClick={() => navigate('/community')}
          className="mb-6 flex items-center space-x-2  hover:text-[#D68C45] transition-colors"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Quay lại Community</span>
        </button>

        <div className="w-full">
          <div className="rounded-none w-full">
            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={post.avatar} 
                alt={post.author}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-bold ">{post.author}</h3>
                <p className="text-gray-400 text-sm lg:text-base">{post.timeAgo}</p>
              </div>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold  mb-6">
              {post.title}
            </h1>

            {/* Post Image */}
            <div className="mb-8">
              <img 
                src={post.thumbnail} 
                alt="Post Image"
                className="w-full h-[50vh] lg:h-[60vh] 2xl:h-[70vh] object-cover rounded-none"
              />
            </div>

            {/* Post Content */}
            <div className="mb-8">
              <p className=" text-base lg:text-lg 2xl:text-xl leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className=" font-semibold italic  text-sm lg:text-base rounded-full hover:bg-[#D68C45] hover: transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center justify-between mb-8 p-4 bg-[#DEDEDE] rounded-lg">
              <div className="flex items-center space-x-6 ">
                <span className="flex items-center space-x-2">
                  <FaUsers className="w-4 h-4" />
                  <span>{post.views.toLocaleString()} lượt xem</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaHeart className="w-4 h-4" />
                  <span>{post.likes} lượt thích</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaComments className="w-4 h-4" />
                  <span>{post.comments} bình luận</span>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLikePost}
                  className={`p-2 rounded-full transition-colors ${
                    post.isLiked 
                      ? 'text-[#D68C45] bg-[#D68C45]/20' 
                      : 'text-gray-400 hover:text-[#D68C45] hover:bg-[#D68C45]/10'
                  }`}
                >
                  <FaHeart className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#D68C45] transition-colors">
                  <FaShare className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#D68C45] transition-colors">
                  <FaBookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-xl lg:text-2xl font-bold  mb-6">Bình luận ({comments.length})</h3>
              
              {/* Comment Input */}
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
                  alt="User Avatar"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Viết bình luận..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 bg-[#DEDEDE]  placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-600 focus:border-[#D68C45] focus:outline-none"
                />
                <button 
                  onClick={handleAddComment}
                  className="bg-[#D68C45] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B87A3A] transition-colors duration-300"
                >
                  Gửi
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <img 
                      src={comment.avatar} 
                      alt={comment.author}
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-[#DEDEDE] rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold ">{comment.author}</span>
                          <span className="text-gray-400 text-sm">{comment.timeAgo}</span>
                        </div>
                        <p className="">{comment.content}</p>
                        <div className="flex items-center space-x-4 mt-3">
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-[#D68C45] transition-colors">
                            <FaHeart className="w-4 h-4" />
                            <span className="text-sm">{comment.likes}</span>
                          </button>
                          <button className="text-gray-400 hover:text-[#D68C45] transition-colors text-sm">
                            Trả lời
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
