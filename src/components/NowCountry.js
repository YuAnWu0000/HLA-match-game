import PropTypes from 'prop-types'
import useGameStore from '@/store/game'
import { twMerge } from 'tailwind-merge'

function NowCountry({ className }) {
  const { selectedCountryId } = useGameStore()
  return <div className={twMerge('absolute top-0 left-0', className)}></div>
}

NowCountry.propTypes = {
  className: PropTypes.string
}
export default NowCountry
