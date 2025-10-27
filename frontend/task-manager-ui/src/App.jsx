import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box, Paper } from '@mui/material';
import theme from './theme';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import StatsCards from './components/StatsCards';
import SnackbarNotification from './components/SnackbarNotification';
import { motion } from 'framer-motion';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleOpenForm = (task = null) => {
    setEditingTask(task);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditingTask(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaskProvider>
        {/* Premium Gradient Background */}
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundAttachment: 'fixed',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Background Orbs */}
          <Box
            sx={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              animation: 'pulse 8s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-30%',
              left: '-15%',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
              animation: 'pulse 10s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />

          {/* Header */}
          <Header onAddTask={() => handleOpenForm()} />

          {/* Main Content */}
          <Container maxWidth="xl" sx={{ py: 5, position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Glassmorphism Container */}
              <Paper
                elevation={0}
                sx={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  borderRadius: 5,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  p: 4,
                }}
              >
                {/* Stats Cards */}
                <StatsCards />

                {/* Task List Container */}
                <Paper
                  elevation={0}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    p: 3,
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <TaskList onEditTask={handleOpenForm} />
                </Paper>
              </Paper>
            </motion.div>
          </Container>

          {/* Task Form Dialog */}
          <TaskForm
            open={openForm}
            onClose={handleCloseForm}
            editingTask={editingTask}
          />

          {/* Snackbar Notifications */}
          <SnackbarNotification />
        </Box>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;