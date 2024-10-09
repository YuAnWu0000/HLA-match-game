import PropTypes from 'prop-types'
import useGameStore, { HLA_MAP } from '@/store/game'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function PairingResult() {
  const { showPairingResult, setShowPairingResult } = useGameStore()
  function nextStep() {
    setShowPairingResult(false)
  }
  return (
    showPairingResult && (
      <div className="absolute top-0 right-0 w-full h-full z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)]"></div>
        <img
          src="/images/pairing_bg.png"
          className="absolute top-0 right-1/2 translate-x-1/2 w-[45%] h-auto"
          alt=""
        />
        {/* HLA area */}
        <div
          className="relative top-[33%] m-auto w-[40.5%] h-[46%] bg-white border border-black flex
            items-center"
        >
          {/* First HLA */}
          <div className="w-[11rem] text-center mx-2 border p-4 border-black">
            <img src={HLA_MAP['r1'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-3"
            >
              {HLA_MAP['r1'].name}
            </h1>
          </div>
          {/* Second HLA */}
          <div className="w-[11rem] text-center mx-2 border p-4 border-black">
            <img src={HLA_MAP['b2'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-3"
            >
              {HLA_MAP['b2'].name}
            </h1>
          </div>
          <div className="w-[2px] h-full bg-black"></div>
          {/* First HLA */}
          <div className="w-[11rem] text-center mx-2 border p-4 border-black">
            <img src={HLA_MAP['r1'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-3"
            >
              {HLA_MAP['r1'].name}
            </h1>
          </div>
          {/* Second HLA */}
          <div className="w-[11rem] text-center mx-2 border p-4 border-black">
            <img src={HLA_MAP['b2'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-3"
            >
              {HLA_MAP['b2'].name}
            </h1>
          </div>
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
  )
}
PairingResult.propTypes = {}
export default PairingResult
