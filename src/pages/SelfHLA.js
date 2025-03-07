import { ChevronRightIcon } from '@heroicons/react/24/outline'
import useGameStore, { HLA_MAP } from '@/store/game'

function HLASelf() {
  const { setGameFlow } = useGameStore()
  return (
    <div className="w-full h-full">
      {/* Background */}
      <div
        className={`absolute top-0 right-0 -z-50 w-full h-full bg-no-repeat bg-contain
          bg-[center_-7rem] bg-hla-self`}
      ></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] -z-40"></div>
      <h1
        className="font-semibold text-secondary text-[2.5rem] tracking-widest w-full text-center
          relative top-[4rem]"
      >
        你的基因對:
      </h1>
      {/* Gene Area */}
      <div className="relative top-[6rem] flex items-center justify-center gap-8">
        {/* First HLA */}
        <div className="w-[18rem] text-center">
          <img src={HLA_MAP['r1'].image} alt="" className="w-full h-auto" />
          <h1
            className="font-semibold text-secondary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-2"
          >
            {HLA_MAP['r1'].name}
          </h1>
        </div>
        {/* Second HLA */}
        <div className="w-[18rem] text-center">
          <img src={HLA_MAP['b2'].image} alt="" className="w-full h-auto" />
          <h1
            className="font-semibold text-secondary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-2"
          >
            {HLA_MAP['b2'].name}
          </h1>
        </div>
      </div>
      {/* Story text */}
      <div className="w-full h-[11rem] fixed bottom-0 bg-[rgba(255,255,255,0.4)] border border-white">
        <h3
          className="w-full h-[4.5rem] leading-[4.5rem] tracking-wide
            bg-[linear-gradient(to_right,_rgba(255,255,255,0.5),_rgba(255,255,255,0.1))]
            text-emerald-600 font-[900] text-4xl px-2 [text-shadow:1px_1px_0px_#ffffff]"
        >
          基因測試
        </h3>
        <p className="font-semibold text-3xl [text-shadow:1px_1px_0px_#BFBFBF] p-2 tracking-widest">
          身為白血病患者，醫院幫你做了完整的基因檢驗，知曉了自己的基因對，才能在全球範圍內找尋合適的骨隨捐贈者。
        </p>
      </div>
      {/* Next step */}
      <div
        className="group absolute right-[0.5rem] bottom-[0.5rem] flex items-center cursor-pointer
          text-[#8d5827] hover:text-indigo-700"
        onClick={() => setGameFlow('COUNTRY_SELECTION')}
      >
        <h3
          className="text-inherit font-semibold text-[1.8rem] group-hover:border-b-2
            group-hover:border-indigo-700"
        >
          下一步
        </h3>
        <ChevronRightIcon
          strokeWidth={2}
          className="w-8 h-8 text-inherit ml-1 mt-1.5"
        />
      </div>
    </div>
  )
}

export default HLASelf
