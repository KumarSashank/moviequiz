import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Layout = ({ children }) => {
  const { currentUser, logout } = useAuth();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Quiz Platform
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {!currentUser ? (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
            </>
          ) : (
            <Button color="inherit" onClick={logout}>Logout ({currentUser.email})</Button>
          )}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
