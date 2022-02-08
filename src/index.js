import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

Axios.defaults.baseURL = "https://api-game-ciamik.herokuapp.com/";

// Axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

