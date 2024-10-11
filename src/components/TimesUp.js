import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import useGameStore, { HLA_MAP } from '@/store/game'
import HLACard from '@/components/HLACard'

function TimesUp() {
  const { setGameFlow, setFailedReason, showTimesUp, setShowTimesUp } =
    useGameStore()
  function nextStep() {
    setGameFlow('FAILED')
    setFailedReason('人生無常')
    setShowTimesUp(false)
  }
  return (
    showTimesUp && (
      <div
        className="fixed top-0 right-0 w-full h-full bg-[url('/images/times_up_bg.jpg')] bg-cover
          flex items-center justify-center"
      >
        <div className="w-full h-full absolute -z-50 bg-[rgba(0,0,0,0.3)]"></div>
        {/* Result */}
        <HLACard
          order={1}
          data={HLA_MAP['death4']}
          defaultOpen={true}
          size="xl"
          className="transform-none animate-none"
        />
        <h1 className="absolute bottom-[5%] text-secondary font-bold text-[2.3rem]">
          病情急遽惡化，你的時候已到...
        </h1>
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
TimesUp.propTypes = {}
export default TimesUp
