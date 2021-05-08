import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%',
  }
}));

const Toolbar = ({ className, searchUsers, ...rest }) => {
  const classes = useStyles();
  const [type, setType] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                sm={4}
                xs={6}
              >
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search customer"
                  variant="outlined"
                  onChange={handleQueryChange}
                  value={query}
                />
              </Grid>
              <Grid
                item
                sm={4}
                xs={6}
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleChange}
                    label="type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={''}>All</MenuItem>
                    <MenuItem value={'customers'}>Customers</MenuItem>
                    <MenuItem value={'beauticians'}>Beauticians</MenuItem>
                  </Select>
                </FormControl>
                
              </Grid>
              <Grid
                item
                sm={4}
                xs={6}
                style={{'display':'flex', 'alignItems':'center'}}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {searchUsers(type, query)}}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
