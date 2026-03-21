import Title from "./components/Title";
import Message from "./components/Message";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const userName = "山田太郎";
  const userLevel = "初級";
  const learningTheme = "Reactの基礎";

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <Title text="React学習1日目" />

      <Message content="今日は JSX と props をに慣れる日です。" />
      <Message content={`学習テーマ: ${learningTheme}`} />
      
      <ProfileCard name={userName} level={userLevel} job="モンク"/>

      <hr />

      <h2>今日のポイント</h2>
      <ul>
        <li>コンポーネントは再利用可能なUIの部品です。</li>
        <li>propsは親から子へデータを渡す手段です。</li>
        <li>JSXでは{}を使ってJavaScriptの式を埋め込むことができます。</li>
      </ul>
    </div>
  )
}