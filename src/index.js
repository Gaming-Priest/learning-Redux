import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import ReduxStore from './Redux/reduxStoreConfig';
import { Provider } from 'react-redux';
import "./styles.less";

//const store = ReduxStore();

var mountNode = document.getElementById("app");
//console.log(store.getState());
ReactDOM.render(
  <>  
  <App />
</>, mountNode
);