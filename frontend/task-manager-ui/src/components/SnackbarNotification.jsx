import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useTaskContext } from '../context/TaskContext';

const SnackbarNotification = () => {
  const { snackbar, closeSnackbar } = useTaskContext();

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={4000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbar.severity}
        variant="filled"
        sx={{
          minWidth: 300,
          fontWeight: 500,
          boxShadow: 3,
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;