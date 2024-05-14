import React from 'react';
import ReactDOM from 'react-dom/client'; // Corregir la importación de ReactDOM
import App from './App.jsx';
import './index.css';
import { TaskContextProvider } from './context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
    <App />
  </TaskContextProvider>
  
  </React.StrictMode>
);
