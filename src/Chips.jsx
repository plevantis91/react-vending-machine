import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import chipsGif from './chips.gif';

const Chips = () => {
    const [count, setChips] = useState(1);
    const getPrice= () => {
        const chipsPrice = 1.50;
        return count * chipsPrice;
    }

    return (
        <div>
            <h1>Chips</h1>
            <img src={chipsGif} alt="Chips" />
            <p>Delicious chips</p>
            <p>Quantity: {count}</p>
            <p>Price: {getPrice().toFixed(2)}</p>
            <button onClick={() =>setChips(count + 1)}>Count</button>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Chips;