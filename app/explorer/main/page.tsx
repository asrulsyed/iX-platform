'use client'

import data from "@/stack/data"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const ExplorerMain = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 lg:gap-8 max-w-[1280px] w-full lg:pb-12 lg:pt-16 py-5 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-4 px-6 xl:grid-cols-5">
        <div className="flex flex-col gap-4 p-6 border rounded-lg xl:col-span-5 border-borderColor bg-bgColor" >
          <div className="flex justify-start">
            <p className="inline-block px-2 py-1 text-xs font-medium leading-4 bg-black border rounded border-borderColor text-fontColor whitespace-nowrap">
              TOTAL NETWORK EARNING
            </p>
          </div>
          <p className="mt-2 mb-4 text-5xl font-medium text-fontHover">$ 0</p>
          <ResponsiveContainer width="100%" height={123}>
            <AreaChart width={730} height={250} data={data}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide={true} />
              <YAxis hide={true} />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Fund Earning</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Workers Earning</p>
          <p className="text-2xl text-fontHover">$0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Crowed Earning</p>
          <p className="text-2xl text-fontHover">$0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Community Earning</p>
          <p className="text-2xl text-fontHover">$0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total RWA Earning</p>
          <p className="text-2xl text-fontHover">$0</p>
        </div>
        <div className="flex flex-col border rounded-lg xl:col-span-5 border-borderColor bg-bgColor">
          <div className="flex flex-row items-center justify-between p-6">
            <p className="items-center justify-between text-2xl font-medium text-fontHover">Total Cloud Earning</p>
          </div>
          <div className="shrink-0 bg-borderColor h-[1px] w-full mb-10"></div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="name" hide={true} />
              <YAxis hide={true} />
              <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ExplorerMain