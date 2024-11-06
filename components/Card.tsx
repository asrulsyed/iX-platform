'use client'

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { BiGitMerge } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaGithub, FaRegStar, FaUpRightFromSquare } from "react-icons/fa6"

const Card = ({ item }: any) => {
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
  })

  return (
    <div className="flex flex-col gap-3 py-5 pl-6 pr-4 border rounded-md border-borderColor bg-bgColor text-fontColor">
      <div className="flex items-center h-10 gap-4">
        <div className="flex items-center w-full gap-4">
          <Image
            src="/react.png"
            alt="Card"
            width={32}
            height={32}
            className="w-[32px] h-[32px] bg-white rounded-full"
          />
          <div>
            <Link href="">
              <p className="text-fontHover hover:underline overflow-hidden text-nowrap w-[180px] text-ellipsis">{item.project}</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <p className="overflow-hidden hover:underline peer text-ellipsis text-nowrap w-[180px]">{item.deploy}</p>
              <FaUpRightFromSquare className="text-transparent w-3 h-auto peer-[:hover]:text-fontColor" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="border-[3px] border-borderColor rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
            <Image
              src="/linechart.svg"
              alt="LineCloud"
              width={24}
              height={18}
              className="w-[24px] h-[20px]"
            />
          </div>
          <div className="relative" ref={additionRef}>
            <button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-bgHover hover:text-fontHover"
              onClick={() => setAddition((prev) => !prev)}>
              <BsThreeDots className="w-6 h-4" />
            </button>
            <div
              className={clsx('absolute w-[184px] bg-bgColor border border-bgHover p-2 rounded-xl z-50 transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
                'invisible opacity-0': addition === false,
                'visible opacity-1': addition === true,
              })}
            >
              <Link href="" className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
                <span>Add Favorite</span>
                <FaRegStar />
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
                <span>View Logs</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
                <span>Manage Domains</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
                <span>Transfer Project</span>
              </Link>
              <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-start h-10 gap-2 px-4 rounded-full text-fontHover bg-bgHover">
          <FaGithub  className="w-5 h-5 text-fontHover" />
          <span>{item.repository}</span>
        </div>
      </div>
      <div className="h-10">
        <p className="leading-5 hover:underline">{item.commit}</p>
        <div className="flex items-center gap-1 leading-5">
          <span>{item.days}d ago on</span>
          <BiGitMerge  className="w-4 h-4 text-fontHover" />
          <span className="text-fontHover hover:underline">master</span>
        </div>
      </div>
    </div>
  )
}

export default Card