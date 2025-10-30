import Button from "../components/Button"
import Card from "../components/Card"
import useToggle from "../hooks/useToggle"

export default function Home() {
  const [show, toggle] = useToggle(true)

  return (
    <div className="p-8 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to MyReactApp</h2>
      <Button label={show ? "Hide Card" : "Show Card"} onClick={toggle} />
      {show && <Card title="Hello!" text="This is a reusable card component 💡" />}
    </div>
  )
}
