import SubMenu from "@/components/explorer/SubMenu"

const ExplorerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <SubMenu />
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-281px)] items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default ExplorerLayout