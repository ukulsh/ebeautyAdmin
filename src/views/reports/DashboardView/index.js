import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import ApprovalTable from './ApprovalTable';
import data from '../../customer/CustomerListView/data';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          {
            // <Grid
            //           item
            //           lg={3}
            //           sm={6}
            //           xl={3}
            //           xs={12}
            //         >
            //           <Budget />
            //         </Grid>
            //         <Grid
            //           item
            //           lg={3}
            //           sm={6}
            //           xl={3}
            //           xs={12}
            //         >
            //           <TotalCustomers />
            //         </Grid>
            //         <Grid
            //           item
            //           lg={3}
            //           sm={6}
            //           xl={3}
            //           xs={12}
            //         >
            //           <TasksProgress />
            //         </Grid>
            //         <Grid
            //           item
            //           lg={3}
            //           sm={6}
            //           xl={3}
            //           xs={12}
            //         >
            //           <TotalProfit />
            //         </Grid>
          }
          <Box mt={3}>
            <ApprovalTable customers={customers} />
          </Box>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
