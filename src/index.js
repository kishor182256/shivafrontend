import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.render(
  <>
      <ToastContainer position="top-center"/>
      <App />
  </>,
  document.getElementById('root')
);


