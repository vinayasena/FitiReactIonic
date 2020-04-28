import React from 'react';
                            //import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
                            //import { ThemeProvider } from '@material-ui/core/styles';
import App from '../containers/App';
import Routes from '../routes';
//import styles from '../styles';
import {
      IonRouterOutlet
      
    } from "@ionic/react";
const Root = ({ store }) => {
 
  return ( 
    <Provider store={store}>
       <App>
          <IonRouterOutlet>
            <Routes store={store} />
          </IonRouterOutlet>
        </App>
    
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
