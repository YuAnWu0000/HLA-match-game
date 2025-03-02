import { useState } from 'react'
import PropTypes from 'prop-types'
import useGameStore, { HLA_MAP } from '@/store/game'
import { twMerge } from 'tailwind-merge'
import { getRandomNumber } from '@/utils/random'

function HLACard({
  order,
  data = {},
  defaultOpen = false,
  size = 'md',
  className
}) {
  const [isCardOpen, setIsCardOpen] = useState(defaultOpen)
  const { selectHLA, selectedHLAs } = useGameStore()
  const [cardData, setCardData] = useState(data)

  function cardClick() {
    if (isCardOpen || selectedHLAs.length >= 2) return
    const num = getRandomNumber(10 - selectedHLAs.length)
    let pool =
      selectedHLAs.length === 0
        ? Object.values(HLA_MAP)
        : Object.values(HLA_MAP).filter(
            (item) => item.id !== selectedHLAs[0].id
          )
    console.log('pool: ', pool)
    console.log('result: ', pool[num - 1])
    setCardData(pool[num - 1])
    setIsCardOpen(true)
    setTimeout(() => {
      selectHLA(pool[num - 1])
    }, 500)
  }

  return (
    <div
      className={twMerge(
        'w-[12rem] h-[18rem]',
        size === 'xl' && 'w-[20rem] h-[30rem]',
        className
      )}
      onClick={cardClick}
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
          className={`absolute top-0 right-0 w-full h-full bg-contain bg-dna-card-back
            [backface-visibility:hidden;]`}
        ></div>
        {/* Card Front */}
        <div
          className="absolute top-0 right-0 w-full h-full rounded-[0.6rem]
            [backface-visibility:hidden;] [transform:rotate3d(0,1,0,180deg);]
            overflow-hidden"
        >
          {/* Card frame */}
          <img
            src="images/card/dna_card_front.jpg"
            alt=""
            className="absolute top-0 right-0 w-full h-full"
          />
          {/* Card content */}
          <img
            src={cardData?.image}
            alt=""
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[90%] h-[94%]"
          />
        </div>
      </div>
    </div>
  )
}

HLACard.propTypes = {
  order: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  defaultOpen: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string
}
export default HLACard
