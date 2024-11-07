import Image from "next/image"
import { FaPlus } from "react-icons/fa6"

const QuantWorker = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-6 bg-black">
      <div className="p-3 text-[#999] border-2 border-borderColor rounded-xl bg-bgColor">
        <Image
          src="/worker.svg"
          alt="worker"
          width={42}
          height={42}
          className="w-[42px] h-[42px]"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-2xl font-medium text-fontHover">Deploy New Worker</h3>
        <p className="max-w-[427px] text-center text-sm text-fontColor">
          Connect running io.net services, you can install more service packages to have more earnings and hiring rate.
        </p>
      </div>
      <button type="button" className="inline-flex items-center justify-center h-12 gap-2 px-4 text-base font-medium transition-colors duration-300 ease-in-out rounded whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-fontHover hover:bg-[#dbe6f0e5]">
        Deploy New Worker
        <FaPlus className="w-[14px] text-fontColor" />
      </button>
    </div>
  )
}

export default QuantWorker