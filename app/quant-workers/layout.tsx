import { ProjectsProvider } from "@/lib/utils/context/ProjectsContext"

const QuantWorkerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ProjectsProvider>
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-var(--footer-height))] items-center pt-[var(--header-height)]">
        {children}
      </main>
    </ProjectsProvider>
  )
}

export default QuantWorkerLayout