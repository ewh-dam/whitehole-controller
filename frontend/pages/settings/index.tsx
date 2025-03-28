import { Container, Typography, Paper, FormGroup, FormControlLabel, Switch, Button } from '@mui/material';
import Layout from '../../components/Layout';

export default function Settings() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Paper sx={{ p: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Notifications"
            />
            <FormControlLabel
              control={<Switch />}
              label="Dark Mode"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Auto-refresh"
            />
          </FormGroup>
          <Button variant="contained" sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </Paper>
      </Container>
    </Layout>
  );
} 