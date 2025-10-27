import React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Stack,
  Paper,
} from '@mui/material';
import { Assignment as EmptyIcon } from '@mui/icons-material';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = ({ onEditTask }) => {
  const { loading, getFilteredTasks } = useTaskContext();
  const filteredTasks = getFilteredTasks();

  // Loading durumu
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 400,
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Görev yoksa
  if (filteredTasks.length === 0) {
    return (
      <Paper
        sx={{
          p: 8,
          textAlign: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <EmptyIcon
          sx={{
            fontSize: 80,
            color: 'text.disabled',
            mb: 2,
          }}
        />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Henüz görev yok
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Yeni bir görev eklemek için yukarıdaki "Yeni Görev" butonuna tıklayın
        </Typography>
      </Paper>
    );
  }

  // Görev listesi
  return (
    <Stack spacing={2}>
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </Stack>
  );
};

export default TaskList;