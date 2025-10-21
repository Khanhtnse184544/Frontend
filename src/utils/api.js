import axios from 'axios';

// Tạo instance axios với cấu hình cơ bản
const api = axios.create({
  baseURL: 'http://localhost:5283',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - thêm token nếu có
api.interceptors.request.use(
  (config) => {
    // Có thể thêm token authentication ở đây
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - xử lý lỗi chung
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    if (error.response) {
      // Server trả về lỗi
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Không nhận được response
      console.error('Network Error:', error.message);
    } else {
      // Lỗi khác
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
