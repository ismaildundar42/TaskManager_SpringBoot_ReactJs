import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  Assignment as TotalIcon,
  CheckCircle as CompletedIcon,
  Schedule as PendingIcon,
  TrendingUp as TrendIcon,
} from '@mui/icons-material';
import { useTaskContext } from '../context/TaskContext';
import { motion } from 'framer-motion';

const StatsCards = () => {
  const { getStats } = useTaskContext();
  const { total, completed, pending, completionRate } = getStats();

  const stats = [
    {
      title: 'Total Tasks',
      subtitle: 'All time',
      value: total,
      icon: TotalIcon,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      shadowColor: 'rgba(102, 126, 234, 0.4)',
      iconBg: 'rgba(102, 126, 234, 0.15)',
    },
    {
      title: 'Completed',
      subtitle: 'Finished tasks',
      value: completed,
      icon: CompletedIcon,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      shadowColor: 'rgba(17, 153, 142, 0.4)',
      iconBg: 'rgba(17, 153, 142, 0.15)',
    },
    {
      title: 'Pending',
      subtitle: 'In progress',
      value: pending,
      icon: PendingIcon,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      shadowColor: 'rgba(240, 147, 251, 0.4)',
      iconBg: 'rgba(240, 147, 251, 0.15)',
    },
    {
      title: 'Progress',
      subtitle: 'Completion rate',
      value: `${completionRate}%`,
      icon: TrendIcon,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      shadowColor: 'rgba(250, 112, 154, 0.4)',
      iconBg: 'rgba(250, 112, 154, 0.15)',
      showProgress: true,
      progressValue: completionRate,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Card
              sx={{
                height: '100%',
                minHeight: 200, // SABİT YÜKSEKLIK
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: `0 8px 32px ${stat.shadowColor}`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: `0 12px 48px ${stat.shadowColor}`,
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: stat.gradient,
                },
              }}
            >
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header: Title + Icon */}
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 'auto' }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        mb: 0.5,
                      }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                      }}
                    >
                      {stat.subtitle}
                    </Typography>
                  </Box>

                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 3,
                      background: stat.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: 3,
                        background: stat.gradient,
                        opacity: 0.3,
                        filter: 'blur(8px)',
                        zIndex: -1,
                      },
                    }}
                  >
                    <stat.icon
                      sx={{
                        fontSize: 30,
                        background: stat.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    />
                  </Box>
                </Stack>

                {/* Value - Ortada */}
                <Box sx={{ my: 2 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Box>

                {/* Progress Bar - En altta, SABİT */}
                {stat.showProgress && (
                  <Box sx={{ mt: 'auto' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      >
                        Completion
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#64748b',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                        }}
                      >
                        {completionRate}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={stat.progressValue}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        '& .MuiLinearProgress-bar': {
                          background: stat.gradient,
                          borderRadius: 3,
                          boxShadow: `0 2px 8px ${stat.shadowColor}`,
                        },
                      }}
                    />
                  </Box>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;