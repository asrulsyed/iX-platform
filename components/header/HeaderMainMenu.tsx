'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { menu } from "@/stack/stack";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const HeaderMainMenu = () => {
  const [headerMainMenu, setHeaderMainMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const paths = pathname.split('/');
  const rootPath = paths[1];
  const subPath = paths[2];

  const handleAccordionClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setHeaderMainMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      ref={menuRef}
      className="group"
    >
      <div
        onClick={() => setHeaderMainMenu(!headerMainMenu)}
        className={`${headerMainMenu === true ? 'border-[#444]' : "border-borderColor"} flex items-center hover:bg-bgHover justify-start gap-2 text-fontColor border rounded-md px-3 h-9 text-sm font-semibold transition-colors duration-300 ease-in-out font-pavelt cursor-pointer hover:border-[#444]`}
      >
        <Image
          src="/avatar.svg"
          width={18}
          height={18}
          className="rounded-full w-[18px] h-[18px]"
          alt="User avatar"
        />
        <span className="text-nowrap text-fontHover">
          {
            rootPath === "quant-workers"
              ? 'iX Quant Workers'
              : rootPath === "galaxy"
                ? 'iX Galaxy'
                : rootPath === "agents"
                  ? 'iX Agents'
                  : rootPath === 'explorer'
                    ? 'iX Explorer'
                    : 'iX Platform'
          }
        </span>
        <FaChevronDown className={`w-[12px] h-auto text-fontColor font-pavelt ${headerMainMenu === true ? 'rotate-180' : ''} transition-transform duration-200 ease-in-out`} />
      </div>
      <div className={`${headerMainMenu === true ? ' translate-x-0' : '-translate-x-full'}
        fixed inset-y-0 z-20 left-0 w-full top-[var(--header-height)] min-h-[calc(100vh-var(--footer-height)-var(--header-height))] origin-left bg-bgColor  sm:p-6 p-4 border-r border-borderColor max-w-[320px] min-w-fit font-pavelt text-fontHover transition-all duration-300 ease-out`}
      >
        <Accordion type="single" collapsible onClick={handleAccordionClick} className="w-full grid gap-3">
          {
            menu.map((item, index) => {
              const main = item.mainMenu.split(' ')
              main.splice(0, 1);
              const mainString = main.join('-').toLowerCase();

              return <AccordionItem key={index} value={`${item} + ${index}`} className="border-none">
                <AccordionTrigger 
                className={`${rootPath === mainString ? 'bg-bgHover text-fontHover' : 'text-fontColor'}
                  h-10 flex items-center rounded-md hover:text-fontHover transition-colors duration-300 ease-out hover:bg-bgHover border border-borderColor hover:border-[#444] px-4 hover:no-underline`}
                >
                  {item.mainMenu}
                </AccordionTrigger>
                <AccordionContent className="pb-0 pt-2">
                  {
                    item.subMenu.map((subItem, subIndex) => {
                      const sub = subItem.subMenu.split(' ');
                      const subString = sub.join('-').toLowerCase();

                      return subItem.status === 'open' ?
                        <Link
                          href={`/${mainString}/${subString}`}
                          key={subIndex}
                          onClick={(e) => {
                            e.stopPropagation()
                            setHeaderMainMenu(false)
                          }}
                          className={`${subPath === subString ? 'bg-bgHover text-fontHover' : ''}
                            h-10 px-6 text-fontColor hover:text-fontHover hover:bg-bgHover flex items-center rounded-md transition-colors duration-150 ease-linear`}
                        >
                          {subItem.subMenu}
                        </Link>
                        : <button
                          key={subIndex}
                          type="button"
                          disabled
                          className="h-10 px-6 text-fontColor flex items-center transition-colors duration-150 ease-out"
                        >
                          {subItem.subMenu}
                        </button>
                    })
                  }
                </AccordionContent>
              </AccordionItem>
            })
          }
        </Accordion>
      </div>
    </div>
  )
}

export default HeaderMainMenu