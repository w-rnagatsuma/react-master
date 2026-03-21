import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

    // const handleDecrement = () => {
    //     setCount(count - 1);
    // };

    // const handleReset = () => {
    //     setCount(0);
    // };

    return (
        <div style={{
            marginTop: "24px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "320px",
        }}>
            <h2>カウンター</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</p>

            <p>{count > 0 && "正の数です"}</p>
            <p>{count < 0 && "負の数です"}</p>
            <p>{count === 0 && "ゼロです"}</p>
        </div>
    );
}