'use client'

import Card from "@/components/Card";
import Filter from "@/components/Filter";
import HomeComponent from "@/components/Home/HomeComponent";
import List from "@/components/List";
import homeMenu from "@/stack/homeMenu";
import stack from "@/stack/stack";
import { useState } from "react";

export default function Home() {
  const [align, setAlign] = useState<string>('card');

  return (
    <div className="max-w-[600px] w-full py-6">

      {/* <div className="max-w-[1350px] w-full flex justify-center items-center flex-col gap-6 sm:px-6 px-4">
          <Filter setAlign={setAlign} align={align} />
          {
            align === 'card' ?
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2">
                {
                  stack.map((item, index) => {
                    return (
                      <Card key={index} item={item} />
                    )
                  })
                }
              </div>
              : <div className="flex flex-col gap-8 mt-4">
              {
                stack.map((item, index) => {
                  return (
                    <List key={index} item={item} />
                  )
                })
              }
            </div>
          }
          
        </div> */}
      <div className="flex justify-center flex-col items-center p-6 border border-[#444] rounded-2xl gap-6" >
        {
          homeMenu.map((item, index) => <HomeComponent key={index} item={item} />)
        }
      </div >
    </div>
  );
}