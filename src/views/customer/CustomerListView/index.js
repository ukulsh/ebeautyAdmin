import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import { getUsers } from 'src/methods/userMethods';

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
  const [customers, updateCustomers] = useState(null);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);

  const searchUsers = (type='', query='') => {

    let data = null;
    console.log('type ', type);

    data = type == 'beauticians' ? {isSeller: true} : {isSeller: false};
    console.log(data);

    const success = (data) => {
      setError(null);
      updateCustomers(data.users);
    }

    const failure = () => {
      setError("Could not fetch users");
    }

    getUsers(data, page, type, success, failure);
  }

  useEffect(() => {
    searchUsers();
  }, [])

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar searchUsers={searchUsers} />
        <Box mt={3}>
        { customers && 
          <Results customers={customers} page={page} setPage={setPage} />
        }
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
