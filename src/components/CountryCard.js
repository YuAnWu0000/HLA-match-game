import PropTypes from 'prop-types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const COUNTRY_MAP = {
  1: 'USA',
  2: 'UK',
  3: 'JP',
  4: 'CN',
  5: 'TW'
}
function CountryCard({ order, className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  // [--delayTime:3s], [--delayTime:3.5s], [--delayTime:4s], [--delayTime:4.5s], [--delayTime:5s],
  function cardBackClick() {
    setIsCardOpen(true)
  }
  return (
    <div
      className={twMerge(
        `w-[14rem] h-[21rem] [transform-style:preserve-3d;] translate-y-[-50rem]
        animate-cardDrop [--delayTime:${3 + (order - 1) * 0.5}s]`,
        className
      )}
    >
      <div
        className={twMerge(
          'w-full h-full [transform-style:preserve-3d;]',
          isCardOpen && 'animate-cardFlip'
        )}
      >
        {/* Card Back */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-contain
            bg-[url('/images/card/country_card_back.png')] [backface-visibility:hidden;]"
          onClick={cardBackClick}
        ></div>
        {/* Card Front */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-contain
            bg-[url('/images/card/country_card_front.png')] [backface-visibility:hidden;]
            [transform:rotate3d(0,1,0,180deg);]"
          onClick={() => setIsCardOpen(false)}
        >
          <img
            src={`/images/card/${COUNTRY_MAP[order]}_flag.jpg`}
            alt=""
            className="absolute top-[2rem] w-[80%] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  order: PropTypes.number.isRequired,
  className: PropTypes.string
}
export default CountryCard
