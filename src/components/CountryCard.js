import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function CountryCard({ order, className }) {
  // [--delayTime:2s], [--delayTime:2.5s], [--delayTime:3s], [--delayTime:3.5s], [--delayTime:4s]
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] bg-contain bg-[url('/images/card/country_card_back.png')]
        [transform-style:preserve-3d;] translate-y-[-50rem] animate-cardDrop
        [--delayTime:${2 + (order - 1) * 0.5}s]`,
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
