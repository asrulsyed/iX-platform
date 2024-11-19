import { menu } from "@/stack/stack"
import Link from "next/link"

const Home = () => {
  return (
    <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-var(--footer-height))] items-center justify-center pt-[var(--header-height)]">
      <div className="grid justify-center py-20 sm:grid-cols-2 items-center gap-10 sm:gap-3 md:gap-10 max-w-[800px] w-full p-4" >
        {
          menu.map((item, index) => {
            const stringLink = item.mainMenu.split(' ');
            stringLink.splice(0, 1);
            const link = '/' + stringLink.join('-').toLowerCase();
            return <Link
              key={index}
              href={link}
              className="flex w-full h-40 p-6 text-lg transition-colors duration-300 ease-in-out border border-borderColor rounded-md font-pavelt text-fontHover bg-bgColor hover:bg-bgHover max-w-[600px]">
              {item.mainMenu}
            </Link>
          })
        }
      </div >
    </main>
  )
}

export default Home