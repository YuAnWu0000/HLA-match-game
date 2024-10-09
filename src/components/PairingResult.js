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
        <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.9)]"></div>
        <img
          src="/images/pairing_result.png"
          className="relative top-0 w-auto h-full mx-auto"
          alt=""
        />
        {/* First HLA */}
        <div className="absolute top-[27%] right-[39.5%] w-[11rem] text-center">
          <img src={HLA_MAP['r1'].image} alt="" className="w-full h-auto" />
          <h1
            className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-3"
          >
            {HLA_MAP['r1'].name}
          </h1>
        </div>
        {/* Second HLA */}
        <div className="absolute top-[50%] right-[2rem] w-[8rem] text-center">
          <img src={HLA_MAP['b2'].image} alt="" className="w-full h-auto" />
          <h1
            className="font-semibold text-primary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-2"
          >
            {HLA_MAP['b2'].name}
          </h1>
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
