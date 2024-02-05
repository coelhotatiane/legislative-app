import DataTable from "../Datatable/Datatable";
import Paper from '@mui/material/Paper';
import { MainVoterCard, MostVotedCard } from "../Cards/Cards";
import { Grid, Typography } from '@mui/material';

function Datatables({ legislatorsInfo, billsInfo }) {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item style={{ width: '100%' }}>
        <Paper>
          <Typography variant="h6" p={2} gutterBottom>Legislators information</Typography>
          <DataTable type="legislator" data={legislatorsInfo} />
        </Paper>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Paper>
          <Typography variant="h6" p={2} gutterBottom>Bills information</Typography>
          <DataTable type="bill" data={billsInfo} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default function Homepage({ legislatorsInfo, billsInfo }) {
  return (
    <Grid container direction="column" spacing={5} wrap="nowrap" p={2}>
      <Grid item>
        <Typography variant="h2">Legislative Dash</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <MostVotedCard data={billsInfo} />
          </Grid>
          <Grid item>
            <MainVoterCard data={legislatorsInfo} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Datatables legislatorsInfo={legislatorsInfo} billsInfo={billsInfo} />
      </Grid>
    </Grid>
  );
}
