import { useState } from 'react';
import CounterActions from './CounterActions';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div style={{
            marginTop: "24px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "320px",
        }}>
            <h2>カウンター</h2>
            <p style={{ 
                fontSize: "24px",
                fontWeight: "bold",
                color: count > 0 ? "green" : count < 0 ? "red" : "white",
            }}>{count}</p>

            <CounterActions
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
            />

            <p>{count > 0 && "正の数です"}</p>
            <p>{count < 0 && "負の数です"}</p>
            <p>{count === 0 && "ゼロです"}</p>
        </div>
    );
}