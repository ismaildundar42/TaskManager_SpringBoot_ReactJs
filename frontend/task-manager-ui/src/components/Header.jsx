import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as PendingIcon,
  ViewList as AllIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';
import { useTaskContext } from '../context/TaskContext';

const Header = ({ onAddTask }) => {
  const { filter, setFilter, searchQuery, setSearchQuery } = useTaskContext();
  const [darkMode, setDarkMode] = React.useState(false);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 2 }}>
          {/* Logo ve Başlık */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                fontSize: '1.8rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              T
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: 'white',
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                TaskFlow Pro
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                Enterprise Task Management
              </Typography>
            </Box>
          </Stack>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Arama Kutusu */}
            <TextField
              placeholder="Search tasks..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                minWidth: { xs: 150, sm: 300 },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Filtre Butonları */}
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              size="small"
              sx={{
                display: { xs: 'none', md: 'flex' },
                '& .MuiToggleButton-root': {
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  fontWeight: 600,
                  px: 2.5,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#667eea',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                },
              }}
            >
              <ToggleButton value="all">
                <AllIcon sx={{ mr: 0.5, fontSize: 18 }} />
                All
              </ToggleButton>
              <ToggleButton value="pending">
                <PendingIcon sx={{ mr: 0.5, fontSize: 18 }} />
                Pending
              </ToggleButton>
              <ToggleButton value="completed">
                <CheckCircleIcon sx={{ mr: 0.5, fontSize: 18 }} />
                Completed
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Dark Mode Toggle (Future) */}
            <Tooltip title="Theme toggle (Coming soon)">
              <IconButton
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Yeni Görev Butonu */}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={onAddTask}
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                color: '#667eea',
                fontWeight: 700,
                px: 3.5,
                py: 1.3,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  background: 'white',
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              New Task
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;