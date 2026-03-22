import { useState } from "react";
import PreviewText from "./PreviewText";

export default function TodoForm() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div>
      <h2>TODO入力フォーム</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="やることを入力"
        style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
      />
      {!text && <p>文字を入力してください</p>}
      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button onClick={handleClear}>クリア</button>
      </div>

      <PreviewText text={text} />
    </div>
  );
}
