import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import { getUsers } from 'src/utils/userMethods';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers, updateCustomers] = useState(data);
  const [page, setPage] = useState(0);

  const searchUsers = async (query, type) => {

    await getUsers(page, type);
  }

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar searchUsers={searchUsers} />
        <Box mt={3}>
          <Results customers={customers} page={page} setPage={setPage} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
