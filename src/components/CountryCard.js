import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function CountryCard({ className }) {
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] bg-contain bg-[url('/images/card/country_card_back.png')]
        [transform-style:preserve-3d;] animate-cardDrop`,
        className
      )}
    ></div>
  )
}

CountryCard.propTypes = {
  className: PropTypes.string
}
export default CountryCard
