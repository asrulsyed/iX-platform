'use client'

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import { FaAngleDown, FaListUl } from "react-icons/fa6"
import { PiSquaresFour } from "react-icons/pi"

const Filter = ({ setAlign, align }: any) => {
  const [addition, setAddition] = useState<boolean>(false);
  const additionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (additionRef.current && !additionRef.current.contains(event.target as Node)) {
        setAddition(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="flex gap-3 w-full">
      <div className="grow bg-bgColor flex items-center h-10 justify-between rounded-md border border-borderColor  text-fontColor pr-2.5">
        <div className="flex items-center justify-center w-10 h-10">
          <FaSearch />
        </div>
        <input type="text" className="w-full h-full outline-none bg-bgColor" placeholder="Search Repositories and Projects..." />
        <span className="hidden lg:flex px-1 py-1 w-[26px] border border-borderColor ml-1 rounded-md text-xs items-center justify-center">⌘</span>
        <span className="hidden lg:flex px-1 py-1 w-[26px] border border-borderColor ml-1 rounded-md text-xs items-center justify-center" >K</span>
        <BsThreeDots className="lg:hidden" />
      </div>
      <div className="hidden lg:flex items-center min-w-[180px] max-w-[180px] justify-between rounded-md border border-borderColor h-10 px-2.5  text-fontHover bg-bgColor">
        <span className="font-semibold px-1.5">Sort by activity</span>
        <FaAngleDown className="w-5 h-4" />
      </div>
      <div className="hidden lg:flex items-center justify-between rounded-md border border-borderColor p-1 h-10 min-w-[88px] max-w-[88px] bg-bgColor">
        <button className={clsx("w-full h-full flex justify-center items-center rounded-sm", { 'bg-bgHover': align === 'card', 'bg-transparent': align !== 'card' })} onClick={() => setAlign('card')}>
          <PiSquaresFour className="w-5 h-5 text-fontColor hover:text-fontHover " />
        </button>
        <button className={clsx("w-full h-full flex justify-center items-center rounded-sm", { 'bg-bgHover': align !== 'card', 'bg-transparent': align === 'card' })} onClick={() => setAlign('list')}>
          <FaListUl className="w-4 h-4 text-fontColor hover:text-fontHover" />
        </button>
      </div>
      <div className="relative" ref={additionRef}>
        <button className="flex px-2.5 h-10 items-center rounded-md bg-fontHover min-w-32 max-w-32 font-semibold text-nowrap" onClick={() => setAddition((prev) => !prev)}>
          <span className="px-1.5 mr-1.5">Add New...</span>
          <FaAngleDown className="w-5 h-4" />
        </button>
        <div
          className={clsx('absolute w-32 bg-bgColor border border-bgHover p-2 rounded-xl transition-opacity duration-300 ease-in-out z-50 -bottom-4 translate-y-full right-0 text-fontColor ', {
            'invisible opacity-0': addition === false,
            'visible opacity-1': addition === true,
          })}>
          <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
            <span>Project</span>
          </Link>
          <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
            <span>Domain</span>
          </Link>
          <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
            <span>Store</span>
          </Link>
          <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover hover:text-fontHover">
            <span>Team Member</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Filter