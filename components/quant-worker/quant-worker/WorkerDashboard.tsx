import { useState } from "react";
import Card from "@/components/Card";
import Filter from "@/components/Filter"
import List from "@/components/List";
import stack from "@/stack/stack";

const WorkerDashboard = ({marketType}: any) => {
  const [align, setAlign] = useState<string>('card');
  return (
    <div className="max-w-[1350px] w-full flex justify-center items-center flex-col gap-10 sm:px-6 px-4 -mx-10 py-10">
      <Filter setAlign={setAlign} align={align} />
      {
        align === 'card' ?
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2 w-full">
            {
              stack.map((item, index) => {
                return (
                  <Card key={index} item={item} marketType={marketType} />
                )
              })
            }
          </div>
          : <div className="flex flex-col gap-8 mt-4 w-full">
            {
              stack.map((item, index) => {
                return (
                  <List key={index} item={item} />
                )
              })
            }
          </div>
      }

    </div>
  )
}

export default WorkerDashboard