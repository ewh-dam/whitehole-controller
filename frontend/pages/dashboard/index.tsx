import { Container, Typography, Grid, Paper } from '@mui/material';
import Layout from '../../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">System Status</Typography>
              <Typography>All systems operational</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Active Users</Typography>
              <Typography>5 users online</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">System Load</Typography>
              <Typography>45% CPU usage</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
} 