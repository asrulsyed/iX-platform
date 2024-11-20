'use client'
const ExplorerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {


  return (
    <>
      <div className="px-4 flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50 text-sm ">

      </div>
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-225px)] items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default ExplorerLayout