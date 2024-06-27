import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './pages/Dashboard.jsx';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>


          <Route path="/patients/:id"></Route> 
          
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

