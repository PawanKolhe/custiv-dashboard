import React from 'react';
import ReactDOM from 'react-dom';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light-border.css';
import './styles/styles.scss';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
