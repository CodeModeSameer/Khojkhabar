import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

export class App extends Component {
  // static propTypes = {
  // }

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pagesize={9} country="in" category='business'/> */}
        <Routes>
          <Route path="/" element={<News key='general' pagesize={9} country="in" category='general'/>}/>
          <Route path="/business" element={<News key='business' pagesize={9} country="in" category='business'/>}/>
          <Route path="/entertainment" element={<News key='entertainment' pagesize={9} country="in" category='entertainment'/>}/>
          <Route path="/general" element={<News key='general' pagesize={9} country="in" category='general'/>}/>
          <Route path="/health" element={<News key='health' pagesize={9} country="in" category='health'/>}/>
          <Route path="/science" element={<News key='science' pagesize={9} country="in" category='science'/>}/>
          <Route path="/sports" element={<News key='sports' pagesize={9} country="in" category='sports'/>}/>
          <Route path="/technology" element={<News key='technology' pagesize={9} country="in" category='technology'/>}/>
        
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App
