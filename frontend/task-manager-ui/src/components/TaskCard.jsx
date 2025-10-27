import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Checkbox,
  Stack,
  Tooltip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Flag as FlagIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import { useTaskContext } from '../context/TaskContext';
import { motion } from 'framer-motion';

const TaskCard = ({ task, onEdit }) => {
  const { toggleTaskStatus, deleteTask } = useTaskContext();

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'HIGH':
        return {
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          bg: 'rgba(245, 87, 108, 0.1)',
          label: 'High Priority',
        };
      case 'MEDIUM':
        return {
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          bg: 'rgba(254, 225, 64, 0.1)',
          label: 'Medium',
        };
      case 'LOW':
        return {
          gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          bg: 'rgba(56, 239, 125, 0.1)',
          label: 'Low Priority',
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          bg: 'rgba(102, 126, 234, 0.1)',
          label: 'Normal',
        };
    }
  };

  const priorityStyle = getPriorityStyle(task.priority);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleToggle = () => {
    toggleTaskStatus(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card
        sx={{
          background: 'white',
          borderRadius: 3,
          border: '1px solid #e2e8f0', // İNCE BORDER
          boxShadow: task.completed
            ? '0 1px 3px rgba(0, 0, 0, 0.1)'
            : '0 4px 20px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden', // ÖNEMLİ: Üst çizgiyi kes
          opacity: task.completed ? 0.7 : 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
          // ÜST ÇİZGİ - İNCE VE ŞIK
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px', // 5px → 3px (DAHA İNCE)
            background: priorityStyle.gradient,
            borderRadius: 0, // Yuvarlaklık yok
          },
        }}
      >
        <CardContent sx={{ p: 3, pt: 3.5 }}> {/* Üstten biraz boşluk */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            {/* Checkbox */}
            <Checkbox
              checked={task.completed}
              onChange={handleToggle}
              sx={{
                mt: 0.5,
                background: priorityStyle.bg,
                borderRadius: 1.5,
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                  background: priorityStyle.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
                '&.Mui-checked': {
                  '& .MuiSvgIcon-root': {
                    background: priorityStyle.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                },
              }}
            />

            {/* Content */}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#94a3b8' : '#1e293b',
                  mb: 1,
                  letterSpacing: '-0.01em',
                }}
              >
                {task.title}
              </Typography>

              {/* Description */}
              {task.description && (
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {task.description}
                </Typography>
              )}

              {/* Badges */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ gap: 1 }}
              >
                {/* Priority Badge */}
                <Chip
                  icon={<FlagIcon sx={{ fontSize: 16 }} />}
                  label={priorityStyle.label}
                  size="small"
                  sx={{
                    background: priorityStyle.gradient,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    height: 28,
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />

                {/* Category Badge */}
                {task.category && (
                  <Chip
                    label={task.category}
                    size="small"
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      height: 28,
                    }}
                  />
                )}

                {/* Date */}
                <Chip
                  icon={<CalendarIcon sx={{ fontSize: 14 }} />}
                  label={formatDate(task.createdAt)}
                  size="small"
                  variant="outlined"
                  sx={{
                    color: '#64748b',
                    borderColor: '#e2e8f0',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    height: 28,
                    '& .MuiChip-icon': {
                      color: '#64748b',
                    },
                  }}
                />
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Stack direction="row" spacing={0.5}>
              <Tooltip title="Edit Task" arrow>
                <IconButton
                  size="small"
                  onClick={() => onEdit(task)}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete Task" arrow>
                <IconButton
                  size="small"
                  onClick={handleDelete}
                  sx={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskCard;