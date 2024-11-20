'use client'

import { menu } from "@/stack/stack";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = () => {
  //SubMenu

  const pathname = usePathname();
  const paths = pathname.split('/');
  const rootPath = paths[1];
  const subPath = paths[2];

  const matchItem = menu.find(item => {
    const mainMenuItem = item.mainMenu.split(' ').slice(1).join('-').toLowerCase();
    return mainMenuItem === rootPath;
  })

  return (
    <div className="px-4 h-[46px] flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50 text-sm ">
      {
        matchItem?.subMenu?.map((item, index) => {
          const path = item.subMenu.replaceAll(' ', '-').toLowerCase();

          return item.status === 'open' ? <Link
            key={index}
            href={`/${rootPath}/${path}`}
            className={`hover:text-fontHover text-base font-medium py-1 border-2 hover:border-b-fontHover group transition-colors duration-200 ease-linear
                ${path === subPath ? 'text-fontHover border-transparent border-b-fontHover' : 'text-fontColor border-transparent'}`}
          >
            <div className={`px-4 group-hover:bg-bgHover py-1 rounded-md whitespace-nowrap
                ${path === subPath ? 'bg-bgHover' : ''}`}>
              {item.subMenu}
            </div>
          </Link>
            :
            <button
              type="button"
              disabled
              key={index}
              className="text-[#444] text-base font-medium py-1 border-2 border-transparent whitespace-nowrap"
            >
              <div className="px-4 py-1 rounded-md">
                {item.subMenu}
              </div>
            </button>
        })
      }
    </div>
  )
}

export default SubMenu