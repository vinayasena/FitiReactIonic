import React from 'react';
import PropTypes from 'prop-types';
//import withStyles from '@material-ui/core/styles/withStyles';
//import Typography from '@material-ui/core/Typography';

const styles = ({
  flex: {},
});

const HomePage = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
     Home page 
    </React.Fragment>
  );
};

HomePage.propTypes = { 
  classes: PropTypes.object.isRequired,  
};

export default HomePage;
