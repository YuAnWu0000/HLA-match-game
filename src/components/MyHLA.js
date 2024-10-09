import PropTypes from 'prop-types'
import useGameStore, { HLA_MAP } from '@/store/game'
import { twMerge } from 'tailwind-merge'

function MyHLA({ className }) {
  const { flow } = useGameStore()
  return (
    flow !== 'SELF_HLA' && (
      <div className={twMerge('absolute top-[9%] right-[0.5rem]')}>
        <h1 className="mb-2 text-xl text-secondary font-bold text-center">
          我的基因對:
        </h1>
        <div className="flex items-center justify-center gap-4">
          {/* First HLA */}
          <div className="w-[8rem] text-center">
            <img src={HLA_MAP['r1'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-secondary text-xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-2"
            >
              {HLA_MAP['r1'].name}
            </h1>
          </div>
          {/* Second HLA */}
          <div className="w-[8rem] text-center">
            <img src={HLA_MAP['b2'].image} alt="" className="w-full h-auto" />
            <h1
              className="font-semibold text-secondary text-xl [text-shadow:1px_1px_0px_#BFBFBF]
                tracking-wide mt-2"
            >
              {HLA_MAP['b2'].name}
            </h1>
          </div>
        </div>
      </div>
    )
  )
}

MyHLA.propTypes = {
  className: PropTypes.string
}
export default MyHLA
