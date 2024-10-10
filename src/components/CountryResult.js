import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import useGameStore, { COUNTRY_MAP } from '@/store/game'
import CountryCard from '@/components/CountryCard'

function CountryResult() {
  const {
    showCountryResult,
    setShowCountryResult,
    selectedCountryId,
    buddhistLifesRemain,
    settleCountryFee
  } = useGameStore()
  function nextStep() {
    settleCountryFee()
    setShowCountryResult(false)
  }
  return (
    showCountryResult && (
      <div
        className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center
          justify-center"
      >
        {/* Title */}
        <h1 className="absolute top-[5%] text-secondary font-bold text-[2.3rem]">
          尋找結果:
        </h1>
        {/* Result */}
        <CountryCard
          order={1}
          defaultOpen={true}
          defaultId={selectedCountryId}
          size="xl"
          className="transform-none animate-none"
        />
        {selectedCountryId === 5 && buddhistLifesRemain > 0 ? (
          <h1 className="absolute bottom-[5%] text-secondary font-bold text-[2.3rem]">
            將扣除慈濟補助一次 (無須扣除金錢)
          </h1>
        ) : (
          <h1 className="absolute bottom-[5%] text-secondary font-bold text-[2.3rem]">
            將扣除檢驗費用
            <span
              className="[background-clip:text]
                bg-[linear-gradient(to_top_right,_#f0f4c3,_#e6ee9c,_#f9fbe7,_#e6ee9c,_#f9fbe7,_#e6ee9c)]
                text-[2.2rem] text-transparent font-bold mx-2"
            >
              {COUNTRY_MAP[selectedCountryId].cost}
            </span>
            元
          </h1>
        )}
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
CountryResult.propTypes = {
  setIsShow: PropTypes.func.isRequired
}
export default CountryResult
