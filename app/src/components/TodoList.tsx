type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const todos: Todo[] = [
  { id: 1, text: "Reactを学ぶ", done: false },
  { id: 2, text: "JavaScriptの基礎を復習する", done: true },
  { id: 3, text: "プロジェクトを作成する", done: false },
];

export default function TodoList() {
    const completedCount = todos.filter((todo) => todo.done).length;
    const incompleteCount = todos.filter((todo) => !todo.done).length;
    return (
        <div style={{
            marginTop: "24px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "400px",
        }}>
            <h2>TODO一覧</h2>

            <p>全体: {todos.length}件</p>
            <p>完了: {completedCount}件</p>
            <p>未完了: {incompleteCount}件</p>
            
            <ul style={{ paddingLeft: "20px" }}>
                {todos.map((todo) => (
                    <li>{todo.id}</li>
                ))}
            </ul>
        </div>
    );
}