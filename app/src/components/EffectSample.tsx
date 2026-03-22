import { useState, useEffect } from "react";

export default function EffectSample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("初回表示に1回だけ実行されました");
    }, []);

    useEffect(() => {
        console.log("countが更新されました：", count);
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleReset = () => {
        setCount(0);
    };
  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h2>useEffectのサンプル</h2>
      <p style={{fontSize: "24px", fontWeight: "bold"}}>{count}</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleReset}>0に戻す</button>
      </div>

      <p style={{marginTop: "16px"}}>コンソールを開いてログを確認してください。</p>
    </div>
  );
}
