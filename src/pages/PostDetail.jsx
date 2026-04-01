import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUsers, FaHeart, FaComments, FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { getPostBySlug, toggleLikePost, getComments, createComment } from "../utils/communityApi";
import { useAuth } from "../contexts/AuthContext";

// Helper function to format time ago
const formatTimeAgo = (date) => {
  const now = new Date();
  const postDate = new Date(date);
  const diffInSeconds = Math.floor((now - postDate) / 1000);
  
  if (diffInSeconds < 60) return 'Vừa xong';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút trước`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ trước`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} ngày trước`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} tuần trước`;
  return `${Math.floor(diffInSeconds / 2592000)} tháng trước`;
};

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  // Load post by slug
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const postData = await getPostBySlug(slug);
        setPost(postData);
        
        // Load comments
        await loadComments(postData.id);
        
        setError(null);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Không thể tải bài viết. Vui lòng thử lại sau.');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  const loadComments = async (postId, page = 1) => {
    try {
      setCommentsLoading(true);
      const result = await getComments(postId, page, 10);
      setComments(result.items || []);
    } catch (err) {
      console.error('Error loading comments:', err);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleLikePost = async () => {
    if (!isAuthenticated) {
      setError('Vui lòng đăng nhập để thích bài viết');
      navigate('/login');
      return;
    }

    if (!post) return;

    try {
      await toggleLikePost(post.id);
      
      // Update post like state
      setPost(prev => ({
        ...prev,
        isLikedByCurrentUser: !prev.isLikedByCurrentUser,
        likeCount: prev.isLikedByCurrentUser 
          ? Math.max(0, prev.likeCount - 1) 
          : prev.likeCount + 1
      }));
    } catch (err) {
      console.error('Error toggling like:', err);
      setError('Không thể thích bài viết. Vui lòng thử lại sau.');
    }
  };

  const handleAddComment = async () => {
    if (!isAuthenticated) {
      setError('Vui lòng đăng nhập để bình luận');
      navigate('/login');
      return;
    }

    if (!newComment.trim() || !post) return;

    try {
      await createComment({
        postId: post.id,
        content: newComment.trim(),
        mediaUrl: null,
        parentCommentId: null
      });

      // Reload comments after creating
      await loadComments(post.id);
      
      // Update comment count
      setPost(prev => ({
        ...prev,
        commentCount: (prev.commentCount || 0) + 1
      }));
      
      setNewComment("");
      setError(null);
    } catch (err) {
      console.error('Error creating comment:', err);
      setError('Không thể đăng bình luận. Vui lòng thử lại sau.');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white text-xl">Đang tải...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post || error) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">
              {error || 'Không tìm thấy bài viết'}
            </h1>
            <button
              onClick={() => navigate('/community')}
              className="bg-[#D68C45] text-white px-6 py-3 rounded-lg hover:bg-[#B87A3A] transition-colors"
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
                src={post.authorAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"} 
                alt={post.authorName}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white">{post.authorName || 'Unknown'}</h3>
                <p className="text-gray-400 text-sm lg:text-base">{formatTimeAgo(post.createdAt)}</p>
              </div>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold  mb-6">
              {post.title}
            </h1>

            {/* Post Image */}
            {(post.thumbnailUrl || (post.mediaUrls && post.mediaUrls.length > 0)) && (
              <div className="mb-8">
                <img 
                  src={post.thumbnailUrl || post.mediaUrls[0]} 
                  alt="Post Image"
                  className="w-full h-[50vh] lg:h-[60vh] 2xl:h-[70vh] object-cover rounded-none"
                />
              </div>
            )}

            {/* Post Content */}
            <div className="mb-8">
              <p className="text-white text-base lg:text-lg 2xl:text-xl leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Tags */}
            {post.hashtags && post.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-8">
                {post.hashtags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-[#D68C45] font-semibold italic text-sm lg:text-base rounded-full hover:bg-[#D68C45]/20 px-2 py-1 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center justify-between mb-8 p-4 bg-[#DEDEDE] rounded-lg">
              <div className="flex items-center space-x-6 text-gray-800">
                <span className="flex items-center space-x-2">
                  <FaUsers className="w-4 h-4" />
                  <span>{post.viewCount?.toLocaleString() || 0} lượt xem</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaHeart className="w-4 h-4" />
                  <span>{post.likeCount || 0} lượt thích</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaComments className="w-4 h-4" />
                  <span>{post.commentCount || 0} bình luận</span>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLikePost}
                  className={`p-2 rounded-full transition-colors ${
                    post.isLikedByCurrentUser 
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
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Bình luận ({post.commentCount || comments.length})
              </h3>
              
              {error && (
                <div className="mb-4 p-4 bg-red-900/50 text-red-200 rounded-lg">
                  {error}
                  <button onClick={() => setError(null)} className="ml-2 font-bold">×</button>
                </div>
              )}

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
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddComment();
                    }
                  }}
                  className="flex-1 bg-[#DEDEDE] text-gray-800 placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-600 focus:border-[#D68C45] focus:outline-none"
                />
                <button 
                  onClick={handleAddComment}
                  className="bg-[#D68C45] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B87A3A] transition-colors duration-300"
                >
                  Gửi
                </button>
              </div>

              {/* Comments List */}
              {commentsLoading ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">Đang tải bình luận...</p>
                </div>
              ) : comments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">Chưa có bình luận nào.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <img 
                        src={comment.userAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"} 
                        alt={comment.userName}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="bg-[#DEDEDE] rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-gray-800">{comment.userName || 'Unknown'}</span>
                            <span className="text-gray-400 text-sm">{formatTimeAgo(comment.createdAt)}</span>
                          </div>
                          <p className="text-gray-800">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
