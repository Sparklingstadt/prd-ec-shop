export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <div className="w-11/12 mx-auto">
      {children}
    </div>
  )
}