import PropTypes from 'prop-types'
import useGameStore, { COUNTRY_MAP } from '@/store/game'
import { twMerge } from 'tailwind-merge'

function NowCountry({ className }) {
  const { selectedCountryId, flow } = useGameStore()
  return (
    selectedCountryId &&
    flow === 'HLA_MATCHING' && (
      <div className={twMerge('absolute top-[8%] left-[0.5rem]', className)}>
        <h1 className="mb-2 text-3xl text-secondary font-bold text-center">
          捐贈者國家:
        </h1>
        <div className="w-[13rem] h-[11rem] rounded-[0.75rem] overflow-hidden">
          <div className="absolute top-0 right-0 bg-[rgba(255,255,255,0.5)] w-full h-full"></div>
          <div className="relative top-0 right-0 w-full h-full flex flex-col items-center gap-2">
            {/* Country flag */}
            <img
              src={COUNTRY_MAP[selectedCountryId].image}
              alt=""
              className="relative w-full h-auto rounded-md"
            />
            {/* Card frame */}
            <img
              src="/images/card/country_preview_frame.png"
              alt=""
              className="absolute top-0 right-0 w-full h-full"
            />
            {/* Country name */}
            <div className={'relative w-full text-center'}>
              <p className={'text-primary font-bold text-2xl'}>
                {COUNTRY_MAP[selectedCountryId].name}
              </p>
            </div>
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
