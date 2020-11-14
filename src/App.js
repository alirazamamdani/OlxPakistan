import React from "react";
import Homepage from './components/Home'
import {BrowserRouter , Route , Link } from 'react-router-dom'
import Header from './components/Header';
import './App.css';
import './props.css';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Route  path="/" component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
