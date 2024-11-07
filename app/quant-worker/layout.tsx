import SubMenu from "@/components/quant-worker/SubMenu"

const QuantWorkerLayout = ({
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

export default QuantWorkerLayout