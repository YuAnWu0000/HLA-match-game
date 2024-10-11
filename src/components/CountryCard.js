import PropTypes from 'prop-types'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import useGameStore, { COUNTRY_MAP } from '@/store/game'
import { getRandomNumber } from '@/utils/random'

function CountryCard({
  order,
  defaultOpen = false,
  defaultId = null,
  size = 'md',
  showResult,
  className
}) {
  const [isCardOpen, setIsCardOpen] = useState(defaultOpen)
  const [countryId, setCountryId] = useState(defaultId)
  const { buddhistLifesRemain, selectedCountryId, setSelectedCountryId } =
    useGameStore()
  // [--delayTime:3s], [--delayTime:3.5s], [--delayTime:4s], [--delayTime:4.5s], [--delayTime:5s],

  function cardBackClick() {
    if (selectedCountryId) return
    const id = getRandomNumber(5)
    setCountryId(id)
    setSelectedCountryId(id)
    setIsCardOpen(true)
    // 預留翻開卡片的動畫時間
    setTimeout(() => {
      showResult(true)
    }, 1000)
  }

  return (
    <div
      className={twMerge(
        `w-[16rem] h-[24rem] [transform-style:preserve-3d;] translate-y-[-50rem]
        animate-cardDrop [--card-transform:rotateX(35deg)_translateY(-2rem)]
        2xl:[--card-transform:rotateX(35deg)_translateY(6rem)] [--delayTime:${ 3 +
        (order - 1) * 0.5 }s]`,
        size === 'xl' && 'w-[26rem] h-[39rem]',
        className
      )}
    >
      <div
        className={twMerge(
          'w-full h-full [transform-style:preserve-3d;]',
          defaultOpen
            ? '[transform:rotate3d(0,1,0,180deg)]'
            : isCardOpen && 'animate-cardFlip'
        )}
      >
        {/* Card Back */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-contain
            bg-[url('/images/card/country_card_back.png')] [backface-visibility:hidden;]"
          onClick={cardBackClick}
        ></div>
        {/* Card Front */}
        {countryId && (
          <div
            className="absolute top-0 right-0 w-full h-full [backface-visibility:hidden;]
              [transform:rotate3d(0,1,0,180deg);] rounded-[0.75rem] overflow-hidden"
            onClick={() => {}}
          >
            {/* Country flag */}
            <img
              src={COUNTRY_MAP[countryId].image}
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
                {COUNTRY_MAP[countryId].name}
              </p>
            </div>
            {/* Country cost */}
            <div
              className={twMerge(
                `absolute right-1/2 bottom-[8%] translate-x-1/2 w-[77%] h-[33%] flex items-center
                justify-center px-4`,
                countryId === 5 && 'flex-col'
              )}
            >
              <p
                className={`text-primary font-bold ${size === 'xl' ? 'text-2xl' : 'text-xl'}`}
              >
                費用: {COUNTRY_MAP[countryId].cost}
              </p>
              {countryId === 5 && (
                <p
                  className={`text-primary font-semibold ${size === 'xl' ? 'text-xl' : 'text-md'}`}
                >
                  (前5次配對費用為慈濟補助，還剩餘{buddhistLifesRemain}次。)
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

CountryCard.propTypes = {
  order: PropTypes.number.isRequired,
  defaultId: PropTypes.number,
  defaultOpen: PropTypes.bool,
  size: PropTypes.string,
  showResult: PropTypes.func,
  className: PropTypes.string
}
export default CountryCard
