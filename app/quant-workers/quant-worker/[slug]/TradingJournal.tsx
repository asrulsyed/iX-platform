const TradingJournal = () => {
  return (
    <div className="col-span-1 sm:col-span-3 xl:col-span-4 bg-bgColor border border-borderColor py-9 px-6 rounded-xl">
      <h3 className="text-fontHover text-xl font-bold mb-8">Trading Journal</h3>
      <div className="w-full rounded-lg overflow-x-auto">
        <table className="bg-black rounded-lg text-left w-full min-w-[1150px]">
          <thead>
            <tr className="h-16 text-fontColor">
              <th className="px-10">Symbol</th>
              <th className="px-10">Side</th>
              <th className="px-10 whitespace-nowrap">Open Time</th>
              <th className="px-10 text-right whitespace-nowrap">Open Price</th>
              <th className="px-10 whitespace-nowrap">Close Time</th>
              <th className="px-10 text-right whitespace-nowrap">Close Price</th>
              <th className="px-10 text-right">PnL</th>
              <th className="px-10">Duration</th>
            </tr>
          </thead>
          <tbody className="text-fontHover">
            <tr className="h-14 border-t border-borderColor bg-bgHover">
              <td className="px-10">AAL.SLE</td>
              <td className="px-10">Master</td>
              <td className="px-10">2024/08/20</td>
              <td className="px-10 text-right">73.75</td>
              <td className="px-10">2024/11/10</td>
              <td className="px-10 text-right">50.23</td>
              <td className="px-10 text-right">$543.69</td>
              <td className="px-10">Duration</td>
            </tr>
            <tr className="h-14 border-t border-borderColor bg-bgHover rounded-lg">
              <td className="px-10">AAL.SLE</td>
              <td className="px-10">Master</td>
              <td className="px-10">2024/08/20</td>
              <td className="px-10 text-right">73.75</td>
              <td className="px-10">2024/11/10</td>
              <td className="px-10 text-right">50.23</td>
              <td className="px-10 text-right">$543.69</td>
              <td className="px-10">Duration</td>
            </tr>
            <tr className="h-14 border-t border-borderColor bg-bgHover">
              <td className="px-10">AAL.SLE</td>
              <td className="px-10">Master</td>
              <td className="px-10">2024/08/20</td>
              <td className="px-10 text-right">73.75</td>
              <td className="px-10">2024/11/10</td>
              <td className="px-10 text-right">50.23</td>
              <td className="px-10 text-right">$543.69</td>
              <td className="px-10">Duration</td>
            </tr>
            <tr className="h-14 border-t border-borderColor bg-bgHover">
              <td className="px-10">AAL.SLE</td>
              <td className="px-10">Master</td>
              <td className="px-10">2024/08/20</td>
              <td className="px-10 text-right">73.75</td>
              <td className="px-10">2024/11/10</td>
              <td className="px-10 text-right">50.23</td>
              <td className="px-10 text-right">$543.69</td>
              <td className="px-10">Duration</td>
            </tr>
            <tr className="h-14 border-t border-borderColor bg-bgHover">
              <td className="px-10">AAL.SLE</td>
              <td className="px-10">Master</td>
              <td className="px-10">2024/08/20</td>
              <td className="px-10 text-right">73.75</td>
              <td className="px-10">2024/11/10</td>
              <td className="px-10 text-right">50.23</td>
              <td className="px-10 text-right">$543.69</td>
              <td className="px-10">Duration</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TradingJournal