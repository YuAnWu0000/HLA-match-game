import PropTypes from 'prop-types'
import useGameStore from '@/store/game'
import { twMerge } from 'tailwind-merge'

function NowCountry({ className }) {
  const { selectedCountryId } = useGameStore()
  return (
    selectedCountryId && (
      <div className={twMerge('absolute top-0 left-0', className)}>
        <div className="absolute top-0 right-0 w-full h-full rounded-[0.75rem] overflow-hidden"></div>
      </div>
    )
  )
}

NowCountry.propTypes = {
  className: PropTypes.string
}
export default NowCountry
