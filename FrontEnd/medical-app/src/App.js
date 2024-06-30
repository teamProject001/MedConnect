import React, { useState, useEffect } from 'react'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Admin from './pages/Admin.jsx';
import NavBar from './components/NavBar.jsx';
import PrivateRouter from './components/PrivateRouter.jsx';
import axios from 'axios'
const jwt_decode = require('jwt-decode');


function App() {

  const [user, setUSer] = useState({
    isConnected: false,
    role: "USER"
  })
  const [errors, setErrors] = useState({})
 

  const postRegister = (body, navigate) => {
    axios.post('http://127.0.0.1:5000/api/register', body).then((response) => {
      console.log(response.data)

      navigate('/login')
    }).catch((error) => {
      console.log(error.response.data)
      setErrors(error.response.data)

    })
  }

  const postLogin = (body, navigate) => {
    axios.post('http://127.0.0.1:5000/api/login', body)
      .then((response) => {
        console.log(response.data);
        const { token } = response.data
        localStorage.setItem('jwt', token)
        /*const decode = jwt_decode(token)
        console.log(decode)*/
        setUSer({
          isConnected: true,
          role: "ADMIN"
        })
        navigate('/')

      }).catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data)
      });
  }

 

  useEffect(() => {
  
  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-light" style={{ height: "150vh" }}>
          <NavBar user={user} />
          <Routes>
          <Route path="/profile/:id" element={<PrivateRouter user={user}><Profile/></PrivateRouter>}></Route>
            <Route path="/login" element={<Login add={postLogin} errors={errors} />}></Route>
            <Route path="/register" element={<Register add={postRegister} errors={errors} />}></Route>
            <Route path="/admin" element={<PrivateRouter user={user}> <Admin/></PrivateRouter>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;

