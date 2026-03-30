type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-sm bg-slate-800 text-gray-100"
      onClick={onClick}
    >{children}</button>
  )
}