/**import React, { Component } from 'react'
import Home from './Components/Home'


 class App extends Component {
  render() {
    return (  
     
        <Home></Home>
        
    )
  }
}
export default App;**/

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react'

import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';
 class App extends Component {
  render() {
    return (  
      <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup/ >} />
        <Route path="/" element={<LoginForm/ >} />
        </Routes></BrowserRouter>
    )
  }
}
export default App;