import Title from "./components/Title";
import Message from "./components/Message";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const userName = "山田太郎";
  const userLevel = "初級";
  const learningTheme = "Reactの基礎";

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      {/* 1日目の内容 */}
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


      {/* 2日目の内容 */}
      <hr />
      <Title text="2日目" />
      <Message content="今日は useState とイベント処理を学びます。" />
      
      <Counter />

      {/* 3日目の内容 */}
      <hr />
      <Title text="3日目" />
      <Message content="今日は配列の表示と条件分岐を学びます。" />

      <TodoList />

      {/* 4日目の内容 */}
      <hr />
      <Title text="4日目" />
      <Message content="今日は input の値を state で管理します。" />

      <TodoForm />
    </div>
  )
}