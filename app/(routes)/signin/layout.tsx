export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="w-140 mx-auto">
      { children }
    </div>
  )
}