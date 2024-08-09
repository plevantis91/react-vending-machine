import React from 'react';
import {Link} from 'react-router-dom';
import vendingGif from './vendingMachine.gif';
import './VendingMachine.css';

function VendingMachine() {
  return (
    <div className='vending-machine'>
      <h2>Vending Machine</h2>
      
      <div className='vending-machine-items'>
        <Link to="/soda" >Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/candy">Candy</Link>
      </div>
    </div>
  );
}

export default VendingMachine;



    
