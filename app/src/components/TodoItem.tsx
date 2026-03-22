type TodoItemProps = {
    text: string;
    done: boolean;
};

export default function TodoItem({ text, done }: TodoItemProps) {
    return (
        <li style={{
            marginBottom: "8px",
            textDecoration: done ? "line-through" : "none",
            color: done ? "#888" : "#fff",
        }}>
            {text} {done ? "✅" : "🔲"}
        </li>
    );
}