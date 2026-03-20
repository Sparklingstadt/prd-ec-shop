export default function Button({
  children
}: {
  children: React.ReactNode
}){
  return (
    <button className="px-4 py-2 text-sm bg-slate-800 text-gray-100">{children}</button>
  )
}