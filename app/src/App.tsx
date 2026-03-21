import Title from "./components/Title";
import Message from "./components/Message";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <>
      <Title text="トップページ" />
      <Message content="こんにちは、世界" />
      <ProfileCard name="山田太郎" level="初級" />
    </>
  )
}