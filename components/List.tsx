'use client'

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { BiGitMerge } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaGithub, FaPlus, FaRegStar, FaUpRightFromSquare } from "react-icons/fa6"
import { SlSettings } from "react-icons/sl"

const List = ({ item }: any) => {
  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [addition, setAddition] = useState<boolean>(false);
  const additionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

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
    <div className="flex flex-col gap-3 text-fontColor">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 px-2">
          <FaGithub  className="w-5 h-5 text-fontHover" />
          <span className="font-semibold text-fontHover">{item.repository}</span>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-bgHover hover:text-fontHover"
            onClick={() => setMenu((prev) => !prev)}
          >
            <BsThreeDots className="w-6 h-4" />
          </button>
          <div
            className={clsx('absolute w-[315px] bg-bgColor border z-50 border-bgHover p-2 rounded-xl transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0', {
              'invisible opacity-0': menu === false,
              'visible opacity-1': menu === true,
            })}
          >
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <FaPlus />
              <span>Import Directory</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <FaUpRightFromSquare />
              <span>View Git Repository</span>
            </Link>
            <Link href="" className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover">
              <SlSettings />
              <span>Manage Shared Environment Variables</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border border-borderColor bg-bgColor rounded-xl">
        <div className="flex items-center gap-4 grow ">
          <Image
            src="/react.png"
            alt="Card"
            width={32}
            height={32}
            className="w-[32px] h-[32px] bg-white rounded-full"
          />
          <div className="basis-[40%]">
            <Link href="">
              <p className="text-fontHover hover:underline overflow-hidden text-nowrap w-[180px] text-ellipsis">
                {item.project}
              </p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <p className="hover:underline peer">{item.deploy}</p>
              <FaUpRightFromSquare className="text-transparent w-3 h-auto peer-[:hover]:text-fontColor" />
            </Link>
          </div>
          <div className="grow">
            <p className="leading-5 hover:underline">{item.commit}</p>
            <div className="flex items-center gap-1 leading-5">
              <span>{item.days}d ago on</span>
              <BiGitMerge  className="w-4 h-4 text-fontHover" />
              <span className="text-fontHover hover:underline">master</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
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
    </div>
  )
}

export default List