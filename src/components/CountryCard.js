import PropTypes from 'prop-types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const COUNTRY_MAP = {
  1: { name: '美國', cost: 100, image: '/images/card/USA_flag.jpg' },
  2: { name: '英國', cost: 200, image: '/images/card/UK_flag.jpg' },
  3: { name: '日本', cost: 300, image: '/images/card/JP_flag.jpg' },
  4: { name: '中國', cost: 400, image: '/images/card/CN_flag.jpg' },
  5: { name: '台灣', cost: 500, image: '/images/card/TW_flag.jpg' }
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
          className="absolute top-0 right-0 w-full h-full [backface-visibility:hidden;]
            [transform:rotate3d(0,1,0,180deg);]"
          onClick={() => setIsCardOpen(false)}
        >
          {/* Country flag */}
          <img
            src={COUNTRY_MAP[order].image}
            alt=""
            className="relative top-[1.7rem] w-[90%] h-auto mx-auto rounded-md"
          />
          {/* Card frame */}
          <img
            src="/images/card/country_card_front.png"
            alt=""
            className="absolute top-0 right-0 w-full h-full"
          />
          <div className="absolute top-[46.5%] w-full text-center">
            <p className="text-primary font-bold text-2xl">
              {COUNTRY_MAP[order].name}
            </p>
          </div>
          <div
            className="absolute right-1/2 bottom-[8%] translate-x-1/2 w-[75%] h-[33%] flex items-center
              justify-center"
          >
            <p className="text-primary font-bold text-xl">
              費用: {COUNTRY_MAP[order].cost}
            </p>
          </div>
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
