import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Petfinder from './pages/Petfinder';

function App() {
  return (
    <div className="App">
      <Petfinder />
    </div>
  );
}
// {/* <BrowserRouter>
//   <Routes>
//     {/* <Route path='/' element={<Home />}> */}
//     <Route path="/" element={<Petfinder />} />
//   </Routes>
// </BrowserRouter>; */}

export default App;
