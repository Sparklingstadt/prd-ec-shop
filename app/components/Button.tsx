export default function Button({
  children
}: {
  children: React.ReactNode
}){
  return (
    <button className="px-8 py-4 bg-gray-200 text-gray-800">{children}</button>
  )
}