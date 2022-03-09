import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from './components/Home';
import Colours from './components/Colours';
import React from 'react';
import SingleColour from './components/SingleColour';
import SomeOtherPath from './components/SomeOtherPath';

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
            <Route path='*' element={<SomeOtherPath/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
