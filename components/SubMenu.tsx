'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import { useEffect, useState } from "react"

const SubMenu = () => {
  const pathname = usePathname();
  // const [moveRight, setMoveRight] = useState<number>(16);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //     if (winScroll <= 64) {
  //       const moveToRight = winScroll / 64 * 35 + 16;
  //       setMoveRight(moveToRight);
  //     } else {
  //       setMoveRight(51)
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, [])

  return (
    <div className={`px-4 h-[46px] flex items-center bg-bgColor border-b border-borderColor sticky top-0 overflow-hidden z-50`}
    // style={{
    //   paddingLeft: `${moveRight}px`
    // }}
    >
      <Link href="/" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/",
        'border-transparent text-fontColor': pathname !== "/",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Overview</span>
      </Link>
      <Link href="/integrations" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/integrations",
        'border-transparent text-fontColor': pathname !== "/integrations",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Integrations</span>
      </Link>
      <Link href="/activity" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/activity",
        'border-transparent text-fontColor': pathname !== "/activity",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Activity</span>
      </Link>
      <Link href="/domains" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/domains",
        'border-transparent text-fontColor': pathname !== "/domains",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Domains</span>
      </Link>
      <Link href="/usage" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/usage",
        'border-transparent text-fontColor': pathname !== "/usage",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Usage</span>
      </Link>
      <Link href="/monitoring" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/monitoring",
        'border-transparent text-fontColor': pathname !== "/monitoring",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Monitoring</span>
      </Link>
      <Link href="/storage" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/storage",
        'border-transparent text-fontColor': pathname !== "/storage",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Storage</span>
      </Link>
      <Link href="/ai" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/ai",
        'border-transparent text-fontColor': pathname !== "/ai",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">AI</span>
      </Link>
      <Link href="/support" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/support",
        'border-transparent text-fontColor': pathname !== "/support",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Support</span>
      </Link>
      <Link href="/settings" className={clsx("border-b-2 hover:border-fontHover h-[46px] flex items-center justify-center transition-colors duration-300 ease-in-out", {
        'border-fontHover text-fontHover': pathname === "/settings",
        'border-transparent text-fontColor': pathname !== "/settings",
      })}>
        <span className="px-3 leading-[14px] py-2 rounded-md hover:bg-bgHover hover:text-fontHover transition-colors duration-300 ease-in-out">Settings</span>
      </Link>
    </div>
  )
}

export default SubMenu