import React, { createContext, useState, useContext, useEffect } from 'react';
import { taskAPI } from '../services/api';

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });

  const showSnackbar = (message, severity = 'info') => {
    setSnackbar({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await taskAPI.getAllTasks();
      setTasks(response.data);
    } catch (err) {
      const errorMsg = 'Görevler yüklenirken hata oluştu';
      setError(errorMsg);
      showSnackbar(errorMsg, 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData);
      setTasks([response.data, ...tasks]);
      showSnackbar('✅ Görev başarıyla eklendi!', 'success');
      return response.data;
    } catch (err) {
      showSnackbar('❌ Görev eklenirken hata oluştu', 'error');
      throw err;
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const response = await taskAPI.updateTask(id, taskData);
      setTasks(tasks.map(task => task.id === id ? response.data : task));
      showSnackbar('✅ Görev güncellendi!', 'success');
      return response.data;
    } catch (err) {
      showSnackbar('❌ Güncelleme başarısız', 'error');
      throw err;
    }
  };

  const toggleTaskStatus = async (id) => {
    try {
      const response = await taskAPI.toggleTask(id);
      setTasks(tasks.map(task => task.id === id ? response.data : task));
      const message = response.data.completed
        ? '🎉 Görev tamamlandı!'
        : '🔄 Görev aktif edildi';
      showSnackbar(message, 'success');
    } catch (err) {
      showSnackbar('❌ İşlem başarısız', 'error');
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
      showSnackbar('🗑️ Görev silindi', 'info');
    } catch (err) {
      showSnackbar('❌ Silme başarısız', 'error');
      throw err;
    }
  };

  const getFilteredTasks = () => {
    let filtered = tasks;

    if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(query) ||
        task.description?.toLowerCase().includes(query) ||
        task.category?.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, pending, completionRate };
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const value = {
    tasks,
    loading,
    error,
    filter,
    searchQuery,
    snackbar,
    setFilter,
    setSearchQuery,
    fetchTasks,
    addTask,
    updateTask,
    toggleTaskStatus,
    deleteTask,
    getFilteredTasks,
    getStats,
    showSnackbar,
    closeSnackbar,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};