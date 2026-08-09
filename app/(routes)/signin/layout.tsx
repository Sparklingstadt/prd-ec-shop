export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="mx-auto w-full max-w-md py-8 sm:py-16">
      { children }
    </div>
  )
}
