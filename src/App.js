import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from './components/Home';
import Colours from './components/Colours';
import React from 'react';
import SingleColour from './components/SingleColour';

  function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hi there!!!</h1>
          <Link to='/'>home</Link>
          <Link to='/colours'>colours</Link>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/colours' element={<Colours/>} />
            <Route path='/colours/:colour_name' element={<SingleColour/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
