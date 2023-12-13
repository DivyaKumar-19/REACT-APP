/**import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react'
import Signup from './Components/Signup'
import LoginForm from './Components/LoginForm'

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
        <Route path="/Signin" element={<Signup/ >} />
        <Route path="/" element={<LoginForm/ >} />
        </Routes></BrowserRouter>
    )
  }
}
export default App;