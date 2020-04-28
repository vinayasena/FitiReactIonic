import React from 'react';
//import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import Viewer from '../components/auth/Viewer';
//import LeftMenu from '../components/LeftMenu';
import * as actions from '../actions';
import Viewer from '../components/auth/Viewer';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonApp,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonPage,IonBackButton, IonButtons,  
     
  IonList, IonItem, IonLabel, IonInput, IonLoading

} from "@ionic/react";

const App = (props)=> {

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    const { logout } = props;
    logout();
  };
  const {
    children,
    isAuthenticated,
    viewer,
    appBarTitle,
  } = props;

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>
            Fiti App
          </IonTitle>
       
        </IonToolbar>
       
      </IonHeader>
      <IonContent className="form">
        App Content : src\containers\App.js
        <Viewer
            viewer={viewer}
            isAuthenticated={isAuthenticated}
          />
      </IonContent>
      
    </IonApp>
  );

  
}

App.propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  appBarTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {
    appBarTitle,
  } = state.app;

  const {
    isAuthenticated,
    viewer,
  } = state.session;

  return {
    appBarTitle,
    isAuthenticated,
    viewer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      return dispatch(actions.session.deleteItem());
    },
  };
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
