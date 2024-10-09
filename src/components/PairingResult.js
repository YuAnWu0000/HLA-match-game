import PropTypes from 'prop-types'
import useGameStore from '@/store/game'
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
