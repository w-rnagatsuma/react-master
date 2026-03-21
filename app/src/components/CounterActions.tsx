type CounterActionsProps = {
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
};

export default function CounterActions({ onIncrement, onDecrement, onReset }: CounterActionsProps) {
    return (
        <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "center"}}>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
            <button onClick={onReset}>リセット</button>
        </div>
    );
}