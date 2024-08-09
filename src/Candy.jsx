import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import candyGif from './candy.gif';

const Candy = () => {
    const [count, setCandy] = useState(1);

    const getPrice= () => {
        const candyPrice = 3.50;
        return count * candyPrice;
    }

    return (
        <div>
            <h1>Candy</h1>
            <img src={candyGif} alt="Candy" />
            <p>Sweet and delicious Candy</p>
            <p>Quantity: {count}</p>
            <p>Price: ${getPrice().toFixed(2)}</p>
            <button onClick={() =>setCandy(count + 1)}>Count</button>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Candy;