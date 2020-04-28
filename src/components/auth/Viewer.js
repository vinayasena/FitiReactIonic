import React from 'react';
import PropTypes from 'prop-types';

//import withStyles from '@material-ui/core/styles/withStyles';
//import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import PersonType from '../../proptypes/Person';

const Viewer = (props) => {
  const {
    classes,
    viewer,
    isAuthenticated,
  } = props;

  const profile = `/people/${viewer.username}/`;
  return (
    <React.Fragment>
      {!isAuthenticated &&
      <div
        component={Link}
        to="/auth"
        color="inherit"
      >
        {'Login'}
      </div>
      }
      {isAuthenticated && 
      <p> {'Logout'}</p>
       
      }
    </React.Fragment>
  );
};

Viewer.propTypes = {
  classes: PropTypes.object.isRequired,
  viewer: PersonType,
  isAuthenticated: PropTypes.bool,
};

Viewer.defaultProps = {
  viewer: {},
  isAuthenticated: false,
};

export default Viewer; 
