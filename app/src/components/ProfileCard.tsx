type ProfileCardProps = {
    name: string;
    level: string;
};

export default function ProfileCard({ name, level }: ProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "16px",
        maxWidth: "300px",
      }}
    >
      <h2>学習者プロフィール</h2>
      <p>名前: {name}</p>
      <p>レベル: {level}</p>
    </div>
  );
}