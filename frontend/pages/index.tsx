import { Container, Typography, Grid, Paper } from '@mui/material';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Welcome to Whitehole Controller
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                System Status
              </Typography>
              <Typography>
                All systems operational
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Typography>
                Access your dashboard or settings to get started
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
} 