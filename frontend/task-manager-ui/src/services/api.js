import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskAPI = {
  getAllTasks: () => api.get('/tasks'),
  getTaskById: (id) => api.get(`/tasks/${id}`),
  createTask: (taskData) => api.post('/tasks', taskData),
  updateTask: (id, taskData) => api.put(`/tasks/${id}`, taskData),
  toggleTask: (id) => api.patch(`/tasks/${id}/toggle`),
  deleteTask: (id) => api.delete(`/tasks/${id}`),
  getTasksByCategory: (category) => api.get(`/tasks/category/${category}`),
  getTasksByStatus: (completed) => api.get(`/tasks/status?completed=${completed}`),
  searchTasks: (keyword) => api.get(`/tasks/search?keyword=${keyword}`),
};

export default api;