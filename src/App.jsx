import React from 'react';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';




function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<VendingMachine />} />
            <Route exact path="/soda" element={<Soda />} />
            <Route exact path="/chips" element={<Chips />} />
            <Route exact path="/candy" element={<Candy />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
