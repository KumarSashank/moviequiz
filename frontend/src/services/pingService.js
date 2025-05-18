import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const checkBackendConnection = async () => {
  try {
    const res = await axios.get(`${API_BASE}/ping`);
    return res.data;
  } catch (err) {
    console.error('Ping failed:', err);
    return { message: '❌ Backend not reachable' };
  }
};
