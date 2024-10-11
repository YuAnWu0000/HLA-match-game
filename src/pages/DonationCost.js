import { useMemo } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import useGameStore, { COUNTRY_MAP } from '@/store/game'

function DonationCost() {
  const { selectedCountryId, settleDonationCost } = useGameStore()
  function nextStep() {
    settleDonationCost()
  }
  const data = useMemo(() => {
    return COUNTRY_MAP[selectedCountryId]
  }, [selectedCountryId])

  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center
        justify-center"
    >
      {/* Story text */}
      <div className="w-full h-[12rem] fixed bottom-0 bg-[rgba(255,255,255,0.4)] border border-white">
        <h3
          className="w-full h-[4.5rem] leading-[4.5rem] tracking-wide
            bg-[linear-gradient(to_right,_rgba(255,255,255,0.5),_rgba(255,255,255,0.1))]
            text-orange-400 font-[900] text-4xl px-2 [text-shadow:1px_1px_0px_#ffffff]"
        >
          後續費用
        </h3>
        <p className="font-semibold text-3xl [text-shadow:1px_1px_0px_#BFBFBF] p-2 tracking-widest">
          由於捐贈者是{data.name}人，因此你需要負擔身體健康檢查費用
          {data.checkUpCost}元以及捐贈費{data.donationCost}元，總計
          {data.checkUpCost + data.donationCost}元。
        </p>
      </div>
      {/* Next step */}
      <div
        className="group absolute right-[1rem] bottom-[1rem] flex items-center cursor-pointer
          text-secondary hover:text-yellow-400"
        onClick={nextStep}
      >
        <h3
          className="text-inherit font-semibold text-[1.8rem] group-hover:border-b-2
            group-hover:border-yellow-400"
        >
          下一步
        </h3>
        <ChevronRightIcon className="w-9 h-9 text-inherit ml-1 mt-1.5" />
      </div>
    </div>
  )
}
export default DonationCost
