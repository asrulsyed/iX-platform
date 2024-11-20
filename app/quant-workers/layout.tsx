import SubMenu from "@/components/header/SubMenu"
import { ProjectsProvider } from "@/lib/utils/context/ProjectsContext"

const QuantWorkerLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ProjectsProvider>
      <SubMenu />
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-271px)] items-center ">
        {children}
      </main>
    </ProjectsProvider>
  )
}

export default QuantWorkerLayout