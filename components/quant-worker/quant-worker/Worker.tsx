'use client'

import Image from "next/image"

const Worker = ({ item, index, length, setWorkerModal, setMarketType }: any) => {
  return (
    <div className={`w-full px-8 py-6 border-borderColor bg-bgColor 
      ${item.status === 'close' ? 'opacity-40' : ''}
      ${index === 0 ? 'rounded-t-lg' : ''}
      ${index === length - 1 ? 'rounded-b-lg' : 'border-b'}`}
      >
      <div className="h-[50px] flex gap-4 items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded bg-gradient-to-b from-[#909090] to-[#2a2a2a] p-1px">
          <div className="bg-black w-[46px] h-[46px] flex items-center justify-center rounded">
            <Image
              src="/worker.svg"
              alt="worker"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="mb-1 text-lg font-medium text-fontHover ">{item.name}</p>
          <p className="mb-2 text-xs text-fontColor">Deploy a Decentralized {item.name} Worker</p>
        </div>
        {
          item.status === 'close' ? <button
            type="button"
            disabled
            className="h-8 px-4 text-sm font-medium transition-colors duration-300 ease-linear rounded-md text-fontHover"
          >
            Coming Soon
          </button>
            : <button
              type="button"
              onClick={() => {
                setWorkerModal(true)
                setMarketType(item.name)
              }}
              className="h-8 px-4 text-sm font-medium transition-colors duration-300 ease-linear bg-black border rounded-md text-fontHover hover:bg-bgHover border-borderColor"
            >
              Deploy
            </button>
        }

      </div>
    </div>

  )
}

export default Worker