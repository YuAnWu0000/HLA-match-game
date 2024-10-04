import PropTypes from 'prop-types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import useGameStore from '@/store/game'

const COUNTRY_MAP = {
  1: { name: '美國', cost: 50000, image: '/images/card/USA_flag.jpg' },
  2: { name: '英國', cost: 30000, image: '/images/card/UK_flag.jpg' },
  3: { name: '日本', cost: 30000, image: '/images/card/JP_flag.jpg' },
  4: { name: '中國', cost: 30000, image: '/images/card/CN_flag.jpg' },
  5: { name: '台灣', cost: 10000, image: '/images/card/TW_flag.jpg' }
}
function CountryCard({ order, size, className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  const { buddhistLifesRemain } = useGameStore()
  // [--delayTime:3s], [--delayTime:3.5s], [--delayTime:4s], [--delayTime:4.5s], [--delayTime:5s],
  function cardBackClick() {
    setIsCardOpen(true)
  }

  return (
    <div
      className={twMerge(
        `w-[16rem] h-[24rem] [transform-style:preserve-3d;] translate-y-[-50rem]
        animate-cardDrop [--delayTime:${3 + (order - 1) * 0.5}s]`,
        size === 'xl' && 'w-[26rem] h-[39rem]',
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
            [transform:rotate3d(0,1,0,180deg);] rounded-[0.75rem] overflow-hidden"
          onClick={() => setIsCardOpen(false)}
        >
          {/* Country flag */}
          <img
            src={COUNTRY_MAP[order].image}
            alt=""
            className="relative top-[8%] w-[90%] h-auto mx-auto rounded-md"
          />
          {/* Card frame */}
          <img
            src="/images/card/country_card_front.png"
            alt=""
            className="absolute top-0 right-0 w-full h-full"
          />
          {/* Country name */}
          <div
            className={`absolute ${size === 'xl' ? 'top-[47.5%]' : 'top-[46%]'} w-full text-center`}
          >
            <p
              className={`text-primary font-bold ${size === 'xl' ? 'text-3xl' : 'text-2xl'}`}
            >
              {COUNTRY_MAP[order].name}
            </p>
          </div>
          {/* Country cost */}
          <div
            className={twMerge(
              `absolute right-1/2 bottom-[8%] translate-x-1/2 w-[77%] h-[33%] flex items-center
              justify-center px-4`,
              order === 5 && 'flex-col'
            )}
          >
            <p
              className={`text-primary font-bold ${size === 'xl' ? 'text-2xl' : 'text-xl'}`}
            >
              費用: {COUNTRY_MAP[order].cost}
            </p>
            {order === 5 && (
              <p
                className={`text-primary font-semibold ${size === 'xl' ? 'text-lg' : 'text-md'}`}
              >
                (前5次配對費用為慈濟補助，還剩餘{buddhistLifesRemain}次。)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  order: PropTypes.number.isRequired,
  size: PropTypes.string,
  className: PropTypes.string
}
export default CountryCard
