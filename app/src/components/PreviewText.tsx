type PreviewTextProps = {
    text: string;
};

export default function PreviewText({ text }: PreviewTextProps) {
    return (
        <div style={{marginTop: "16px"}}>
            <p>入力中の文字</p>
            <p style={{fontWeight: "bold"}}>
                {text ? text : "ここに入力した文字が表示されます"}
            </p>
        </div>
    );
}