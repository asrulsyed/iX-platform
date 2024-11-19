'use client'

import { useEffect, useRef, useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import Link from "next/link"
import EditWorkerModal from "./EditWorkerModal"
import RemoveWorkerModal from "./RemoveWorkerModal"

const Card = ({ item }: any) => {
  const [editWorkerModal, setEditWorkerModal] = useState<boolean>(false);
  const [removeWorkerModal, setRemoveWorkerModal] = useState<boolean>(false);

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
    <div className="flex flex-col gap-3 py-5 pl-6 pr-4 border rounded-md border-borderColor bg-bgColor text-fontColor transition-transform duration-300 ease-in-out">

      <div className="flex items-center h-10 gap-4">
        <div className="flex items-center w-full gap-4">
          <div className="flex justify-start items-center gap-3 ">
            <Link href={`/quant-workers/quant-worker/${item.name.trim().replaceAll(' ', '-').toLowerCase()}`} >
              <p className="text-fontHover text-lg overflow-hidden text-nowrap max-w-[180px] text-ellipsis hover:underline ">{item.name}</p>
            </Link>
            <div className="h-full ">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
                    ${item.status === 'running' ? 'bg-green-500'
                    : item.status === 'stop' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2
                    ${item.status === 'running' ? 'bg-green-500'
                    : item.status === 'stop' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative" ref={additionRef}>
            <button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-bgHover hover:text-fontHover"
              onClick={() => setAddition((prev) => !prev)}>
              <BsThreeDots className="w-6 h-4" />
            </button>
            <div
              className={`absolute w-[120px] bg-bgColor border border-bgHover p-2 rounded-xl z-10 transition-opacity duration-300 ease-in-out bottom-0 translate-y-full right-0
                ${addition === true ? 'visible opacity-1' : 'invisible opacity-0'}`}
            >
              <button
                type="button"
                className="flex items-center justify-between h-10 gap-2 px-2 rounded-md hover:bg-bgHover w-full hover:text-fontHover transition-colors duration-300 ease-in-out"
                onClick={() => {
                  setEditWorkerModal(true);
                  setAddition(false)
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="flex items-center h-10 gap-2 px-2 rounded-md hover:bg-bgHover w-full hover:text-fontHover transition-colors duration-300 ease-in-out"
                onClick={() => {
                  setRemoveWorkerModal(true)
                  setAddition(false)
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center h-[35px] w-[120px] text-sm whitespace-nowrap justify-center gap-2 px-4 rounded-md text-fontColor bg-black border border-borderColor">
          <span>{item.marketType}</span>
        </div>
        <div className={`border rounded-md h-[35px] w-[120px] flex justify-center items-center text-sm
                    ${item.status === 'running' ? 'text-green-500 border-green-500'
            : item.status === 'stop' ? 'text-yellow-500 border-yellow-500' : 'text-red-500 border-red-500'
          }`}>
          {
            item.status === 'running' ? 'Funded'
              : item.status === 'stop' ? 'Evaluation' : 'Failed'
          }
        </div>
      </div>
      <div className="h-10 flex items-center">
        <p className="leading-5 whitespace-nowrap">Created at : {item.created}</p>
      </div>
      {
        editWorkerModal && <EditWorkerModal setEditWorkerModal={setEditWorkerModal} item={item} />
      }
      {
        removeWorkerModal && <RemoveWorkerModal setRemoveWorkerModal={setRemoveWorkerModal} item={item} />
      }
    </div>
  )
}

export default Card