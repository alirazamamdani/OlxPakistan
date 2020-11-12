import React from "react";
import Homepage from './components/Home'
import {BrowserRouter , Route , Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Route  path="/" component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
