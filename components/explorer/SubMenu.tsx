'use client'

import subMenu from "@/stack/subMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SubMenu = () => {
  const pathname = usePathname();

  const root = pathname.split('/').splice(1, 1)
  const endPath = pathname.split('/').splice(2, 1)

  const rootString = root.toString();
  const endPathString = endPath.toString().replaceAll('-', ' ');

  return (
    <div className={`px-4 h-[46px] flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50 text-sm `}>
      {
        subMenu.map((item, index) => (
          item === "Main" || item === "Quant Workers" ?
            <Link
              href={`/${rootString}/${item.toLowerCase().replaceAll(' ', '-')}`}
              key={index}
              className={`${endPathString === item.toLowerCase() ? 'border-fontHover text-fontHover' : 'border-transparent text-fontColor'} 
              border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out`}
            >
              <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">
                {item}
              </span>
            </Link>
            :
            <button
              disabled={true}
              key={index}
              className={`h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out`}
            >
              <span className="px-3 leading-[14px] py-2 rounded-md ">
                {item}
              </span>
            </button>
        ))
      }
      
    </div>
  )
}
export default SubMenu