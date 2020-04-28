import React from "react";
import ReactDOM from "react-dom";
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import fr from 'javascript-time-ago/locale/fr';
// ionic css
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
// end ionic
// imports for ionic
import {
  IonApp,
  
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import * as serviceWorker from "./serviceWorker";
import configureStore from './store';
import Root from './containers/Root';

JavascriptTimeAgo.locale(en); 
JavascriptTimeAgo.locale(fr);

const store = configureStore();
ReactDOM.render(
  <React.Fragment>
    <IonApp>
      <IonReactRouter>
        <Root store={store}/>        
      </IonReactRouter>
    </IonApp>
  </React.Fragment>, 
  document.getElementById("root")  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
