import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import sodaGif from './soda.gif';

const Soda = () => {
    const [count, setSoda] = useState(1);

    const getPrice= () => {
        const sodaPrice = 2.00;
        return count * sodaPrice;
    }

    return (
        <div>
            <h1>Soda</h1>
            <img src={sodaGif} alt="Soda" />
            <p>Refreshing and bubbly soda</p>
            <p>Quantity: {count}</p>
            <p>Price: ${getPrice().toFixed(2)}</p>
            <button onClick={() =>setSoda(count + 1)}>Count</button>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Soda;