import workers from "@/stack/workers"
import Image from "next/image"
import Worker from "./Worker"

const ShowWorker = ({ setWorkerModal, setMarketType }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-5 lg:py-10">
      <div className="flex flex-col items-center gap-4">
        <div className="p-3 text-[#999] border-2 border-borderColor rounded-xl bg-bgColor">
          <Image
            src="/worker.svg"
            alt="worker"
            width={42}
            height={42}
            className="w-[42px] h-[42px]"
          />
        </div>
        <h3 className="text-2xl font-medium text-fontHover">Deploy New Worker</h3>
        <p className="max-w-[427px] text-center text-sm text-fontColor">
          Connect running io.net services, you can install more service packages to have more earnings and hiring rate.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border rounded-lg border-borderColor w-[530px]">
        {
          workers.map((item, index) => <Worker key={index} item={item} index={index} length={workers.length} setWorkerModal={setWorkerModal} setMarketType={setMarketType} />)
        }
      </div>
    </div>
  )
}

export default ShowWorker