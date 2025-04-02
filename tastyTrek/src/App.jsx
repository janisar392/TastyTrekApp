import React from 'react';
import Menubar from './components/Menubar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ExploreFood from './pages/ExploreFood/ExploreFood';


const App = () => {
  return (
    <div>
      <Menubar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/explore' element={<ExploreFood />} />
      </Routes>
    </div>
  )
}

export default App;