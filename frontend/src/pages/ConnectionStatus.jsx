import React, { useEffect, useState } from 'react';
import { checkBackendConnection } from '../services/pingService';
import { Box, Typography, CircularProgress } from '@mui/material';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await checkBackendConnection();
      setStatus(result.message || '✅ Connected');
    })();
  }, []);

  return (
    <Box sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h5">Backend Status:</Typography>
      <Box sx={{ mt: 2 }}>
        {status === null ? <CircularProgress /> : <Typography>{status}</Typography>}
      </Box>
    </Box>
  );
};

export default ConnectionStatus;
