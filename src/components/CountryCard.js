import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function CountryCard({ order, className }) {
  // [--delayTime:2s], [--delayTime:3s], [--delayTime:4s], [--delayTime:5s], [--delayTime:6s]
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] bg-contain bg-[url('/images/card/country_card_back.png')]
        [transform-style:preserve-3d;] translate-y-[-50rem] animate-cardDrop
        [--delayTime:${order + 1}s]`,
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
