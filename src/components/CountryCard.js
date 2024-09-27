import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function CountryCard({ order, className }) {
  // [--delayTime:3s], [--delayTime:3.5s], [--delayTime:4s], [--delayTime:4.5s], [--delayTime:5s],
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] [transform-style:preserve-3d;] translate-y-[-50rem]
        animate-cardDrop [--delayTime:${3 + (order - 1) * 0.5}s]`,
        className
      )}
    >
      {/* Card Back */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-contain
          bg-[url('/images/card/country_card_back.png')] [backface-visibility:hidden;]"
      ></div>
      {/* Card Front */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-contain
          bg-[url('/images/card/country_card_front.png')] [backface-visibility:hidden;]
          [transform:rotate3d(0,1,0,180deg);]"
      ></div>
    </div>
  )
}

CountryCard.propTypes = {
  order: PropTypes.number.isRequired,
  className: PropTypes.string
}
export default CountryCard
