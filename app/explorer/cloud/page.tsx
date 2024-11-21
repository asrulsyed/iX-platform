'use client'

import { useState } from "react";
import MainDashboard from "./MainDashboard";
import GPUMarketplace from "./GPUMarketplace";
import GPUPerformanceComparison from "./GPUPerformanceComparison";

const ExplorerCloud = () => {
  const [dashboard, setDashboard] = useState<number>(0);

  return (
    <>
      <div className="flex flex-col flex-1 gap-5 lg:gap-8 max-w-[1280px] w-full lg:pb-12 lg:pt-16 py-5 lg:py-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDashboard(0)}
            className={`border border-borderColor h-10 px-5 rounded-md hover:text-fontHover hover:bg-bgHover text-base font-medium
              ${dashboard === 0 ? 'text-fontHover bg-bgHover' : 'text-fontColor bg-transparent'}`}
          >
            MainDashboard
          </button>
          <button
            onClick={() => setDashboard(1)}
            className={`border border-borderColor h-10 px-5 rounded-md hover:text-fontHover hover:bg-bgHover text-base font-medium
              ${dashboard === 1 ? 'text-fontHover bg-bgHover' : 'text-fontColor bg-transparent'}`}
          >
            GPUMarketplace
          </button>
          <button
            onClick={() => setDashboard(2)}
            className={`border border-borderColor h-10 px-5 rounded-md hover:text-fontHover hover:bg-bgHover text-base font-medium
              ${dashboard === 2 ? 'text-fontHover bg-bgHover' : 'text-fontColor bg-transparent'}`}
          >
            GPUPerformanceComparison
          </button>
        </div>
      {
        dashboard === 0
          ? <MainDashboard />
          : dashboard === 1
          ? <GPUMarketplace />
          : <GPUPerformanceComparison />
      }
      </div>
    </>
  )
}

export default ExplorerCloud