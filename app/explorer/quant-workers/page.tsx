
const ExplorerQuantWorkers = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 lg:gap-8 max-w-[1280px] w-full lg:pb-12 lg:pt-16 py-5 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-4 px-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col gap-4 p-6 border rounded-lg sm:col-span-2 border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Worker Earning</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg sm:col-span-2 border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Week Worker Earning</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Quant Workers</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Active Quant Workers</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Trading Volume</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg border-borderColor bg-bgColor" >
          <p className="text-xs leading-4 text-fontColor">Total Fund Managed</p>
          <p className="text-2xl text-fontHover">$ 0</p>
        </div>
      </div>
    </div>
  )
}

export default ExplorerQuantWorkers