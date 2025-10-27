import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = ({ open, onClose, editingTask }) => {
  const { addTask, updateTask } = useTaskContext();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'MEDIUM',
    category: '',
  });

  const [errors, setErrors] = useState({});

  // Düzenleme modunda formu doldur
  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || '',
        description: editingTask.description || '',
        priority: editingTask.priority || 'MEDIUM',
        category: editingTask.category || '',
      });
    } else {
      // Yeni görev için formu temizle
      setFormData({
        title: '',
        description: '',
        priority: 'MEDIUM',
        category: '',
      });
    }
    setErrors({});
  }, [editingTask, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Hata mesajını temizle
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Başlık zorunludur';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Başlık en az 3 karakter olmalıdır';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Açıklama en fazla 500 karakter olabilir';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      if (editingTask) {
        // Güncelleme
        await updateTask(editingTask.id, formData);
      } else {
        // Yeni ekleme
        await addTask(formData);
      }
      handleClose();
    } catch (error) {
      console.error('Form submit error:', error);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
      priority: 'MEDIUM',
      category: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
          {editingTask ? '✏️ Görevi Düzenle' : '➕ Yeni Görev Ekle'}
        </Box>
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            color: 'text.secondary',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {/* Başlık */}
            <TextField
              name="title"
              label="Görev Başlığı"
              fullWidth
              required
              value={formData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
              autoFocus
              placeholder="Örn: Spring Boot öğren"
            />

            {/* Açıklama */}
            <TextField
              name="description"
              label="Açıklama"
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description || `${formData.description.length}/500`}
              placeholder="Görev hakkında detaylı açıklama yazın..."
            />

            {/* Priority ve Kategori - Yan Yana */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Priority */}
              <FormControl fullWidth required>
                <InputLabel>Öncelik</InputLabel>
                <Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  label="Öncelik"
                >
                  <MenuItem value="LOW">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      🟢 Düşük
                    </Box>
                  </MenuItem>
                  <MenuItem value="MEDIUM">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      🟡 Orta
                    </Box>
                  </MenuItem>
                  <MenuItem value="HIGH">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      🔴 Yüksek
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>

              {/* Kategori */}
              <TextField
                name="category"
                label="Kategori"
                fullWidth
                value={formData.category}
                onChange={handleChange}
                placeholder="Örn: Eğitim"
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3, pt: 2, gap: 1 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ px: 3 }}
          >
            İptal
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              px: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            {editingTask ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskForm;