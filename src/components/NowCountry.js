import PropTypes from 'prop-types'
import useGameStore, { COUNTRY_MAP } from '@/store/game'
import { twMerge } from 'tailwind-merge'

function NowCountry({ className }) {
  const { selectedCountryId, flow } = useGameStore()
  return (
    selectedCountryId &&
    flow === 'HLA_MATCHING' && (
      <div className={twMerge('absolute top-[15%] left-[0rem]', className)}>
        <h1 className="text-xl mb-[-0.7rem] text-secondary font-bold text-center">
          捐贈者國家:
        </h1>
        <div className="w-[14rem] h-[12rem] rounded-[0.75rem] overflow-hidden">
          {/* <div className="absolute top-0 right-0 bg-[rgba(255,255,255,0.5)] w-full h-full"></div> */}
          <div className="relative top-0 right-0 w-full h-full flex flex-col items-center gap-2">
            {/* Country flag */}
            <img
              src={COUNTRY_MAP[selectedCountryId].image}
              alt=""
              className="relative top-[1.4rem] w-[80%] h-[7.4rem] rounded-md"
            />
            {/* Card frame */}
            <img
              src="/images/card/country_preview_frame.png"
              alt=""
              className="absolute top-0 right-0 w-full h-auto"
            />
            {/* Country name */}
            {/* <div className={'relative top-[0rem] w-full text-center'}>
              <p className={'text-secondary font-bold text-xl'}>
                {COUNTRY_MAP[selectedCountryId].name}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    )
  )
}

NowCountry.propTypes = {
  className: PropTypes.string
}
export default NowCountry
