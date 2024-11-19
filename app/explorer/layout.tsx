const ExplorerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-var(--footer-height))] items-center justify-center">
      {children}
    </main>
  )
}

export default ExplorerLayout