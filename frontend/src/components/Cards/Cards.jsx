import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

export function MostVotedCard({ data }) {
  const mostVotedBill = data.reduce((acc, cur) => {
    if(cur.supporters > acc.supporters) {
      return cur;
    } else {
      return acc;
    }
  });
  return (
    <Paper elevation={2}>
      <Grid p={1}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Most voted bill
        </Typography>
        <Typography variant="h5" component="div">
          {mostVotedBill.title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Primary sponsor: {mostVotedBill.primarySponsor}
        </Typography>
      </Grid>
    </Paper>

  );
}

export function MainVoterCard({ data }) {
  const mainVoter = data.reduce((acc, cur) => {
    if(cur.supportedBill > acc.supportedBill) {
      return cur;
    } else {
      return acc;
    }
  });
  return (
    <Paper elevation={2}>
      <Grid p={1}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Main supporter
        </Typography>
        <Typography variant="h5" component="div">
          {mainVoter.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Supported bills: {mainVoter.supportedBill}
        </Typography>
      </Grid>
    </Paper>
  );
}
