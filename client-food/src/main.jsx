import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './normalize.css';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
import store from './store';

axios.defaults.baseURL =
  import.meta.env.VITE_APP_API_KEY || 'http://localhost:8080';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
