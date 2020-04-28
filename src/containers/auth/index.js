import React from 'react';
import PropTypes from 'prop-types';

//import AppBar from '@material-ui/core/AppBar';
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';

import Login from './Login';
import Signup from './Signup';
// import {
//   IonTabButton,
//   IonContent,
//   IonLabel,
//   IonRouterOutlet,
//   IonTabBar,
//   IonButton,
//   IonTabs
// } from '@ionic/react';
// import { Redirect, Route } from 'react-router-dom';
const Auth = (props) => {
  const { match: { params } } = props;
  const defaultTab = params.tab === 'signup' ? 1 : 0;

  const [tab, setTab] = React.useState(defaultTab);

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <React.Fragment>
     Auth Index
    </React.Fragment>
  );
};

Auth.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Auth;
