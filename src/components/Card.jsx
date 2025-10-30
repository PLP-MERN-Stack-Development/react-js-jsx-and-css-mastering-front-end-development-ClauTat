export default function Card({ title, text }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}
