import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function Login() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                required
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
} 