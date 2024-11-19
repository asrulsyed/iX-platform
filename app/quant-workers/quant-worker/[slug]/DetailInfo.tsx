import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const DetailInfo = ({ item }: any) => {
  const [balances, setBalances] = useState<any>([]);

  // const display = (data: any) => {
  //   const length = data?.length;
  //   const newData = data[length - 1]?.count;
  //   const oldData = data[length - 2]?.count;
  //   if (newData > oldData) {
  //     if (oldData === 0) {
  //       return (
  //         <>
  //           <FaCaretUp className="text-green-500" />
  //           <p className={`text-color4 pl-1`}>
  //             &nbsp;100%
  //           </p>
  //         </>
  //       )
  //     }
  //     return (
  //       <>
  //         <FaCaretUp className="text-green-500" />
  //         <p className={`text-color4 pl-1`}>
  //           &nbsp;{((newData - oldData) / oldData * 100).toFixed(2)}%
  //         </p>
  //       </>
  //     )
  //   } else if (newData === oldData) {
  //     return (
  //       <>
  //         <FaCaretUp className="text-green-500" />
  //         <p className={`text-color4 pl-1`}>
  //           &nbsp;0%
  //         </p>
  //       </>
  //     )
  //   }
  //   return (
  //     <>
  //       <FaCaretDown className="text-red-500" />
  //       <p className={`text-fontHover pl-1`}>
  //         &nbsp;{((oldData - newData) / oldData * 100).toFixed(2)}%
  //       </p>
  //     </>
  //   )
  // }

  return (
    <div className={`bg-bgColor text-fontColor border border-borderColor w-full font-bold rounded-xl`}>
      <div className="flex flex-col gap-4 p-6 sm:col-span-2" >
        <p className="text-xs leading-4 text-fontColor">{item}</p>
        <p className="text-2xl text-fontHover">416,081</p>
      </div>
    </div>
  )
}

export default DetailInfo