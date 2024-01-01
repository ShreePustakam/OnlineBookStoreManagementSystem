import React from 'react';
import ReactDOM from 'react-dom/client';
//import Employees from './Employees';
//import Dashboard from './Components/Pages/Home';
// import '../node_modules/bootstrap/dist/js/'
//import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import { Route , Routes, Switch } from 'react-router-dom';
import Book from './Components/Book';
import App from './Components/App';
import '../node_modules/bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>

);

