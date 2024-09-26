import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function CountryCard({ order, className }) {
  // [--delayTime:0s], [--delayTime:1s], [--delayTime:2s], [--delayTime:3s], [--delayTime:4s]
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] bg-contain bg-[url('/images/card/country_card_back.png')]
        [transform-style:preserve-3d;] animate-cardDrop [--delayTime:${order}s]`,
        className
      )}
    ></div>
  )
}

CountryCard.propTypes = {
  order: PropTypes.number.isRequired,
  className: PropTypes.string
}
export default CountryCard
