import { Box, Container, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(err => setStatus('Error connecting to backend'));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Whitehole Controller
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Whitehole Controller
        </Typography>
        <Typography variant="body1" gutterBottom>
          Backend Status: {status}
        </Typography>
      </Container>
    </Box>
  );
} 