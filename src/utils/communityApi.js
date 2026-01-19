import api from './api';

/**
 * Community API Service
 * Tất cả các API calls liên quan đến Community feature
 */

// GET: Lấy danh sách posts với filter
export const getPosts = async (filters = {}) => {
  const params = new URLSearchParams();
  
  if (filters.tag) params.append('tag', filters.tag);
  if (filters.pageIndex) params.append('pageIndex', filters.pageIndex);
  if (filters.pageSize) params.append('pageSize', filters.pageSize);
  if (filters.userId) params.append('userId', filters.userId);
  if (filters.status) params.append('status', filters.status);
  
  const queryString = params.toString();
  const url = `/api/community/posts${queryString ? `?${queryString}` : ''}`;
  
  const response = await api.get(url);
  return response.data;
};

// GET: Lấy post detail theo slug
export const getPostBySlug = async (slug) => {
  const response = await api.get(`/api/community/posts/${slug}`);
  return response.data;
};

// POST: Tạo post mới
export const createPost = async (postData) => {
  const response = await api.post('/api/community/posts', postData);
  return response.data;
};

// POST: Toggle like post
export const toggleLikePost = async (postId) => {
  const response = await api.post(`/api/community/posts/${postId}/like`);
  return response.data;
};

// GET: Tìm kiếm hashtags
export const searchHashtags = async (keyword) => {
  const response = await api.get(`/api/community/hashtags/search?keyword=${encodeURIComponent(keyword)}`);
  return response.data;
};

// GET: Lấy trending hashtags
export const getTrendingHashtags = async () => {
  const response = await api.get('/api/community/hashtags/trending');
  return response.data;
};

// GET: Lấy comments của post
export const getComments = async (postId, page = 1, size = 10) => {
  const response = await api.get(`/api/community/posts/${postId}/comments?page=${page}&size=${size}`);
  return response.data;
};

// POST: Tạo comment
export const createComment = async (commentData) => {
  const response = await api.post('/api/community/comments', commentData);
  return response.data;
};

