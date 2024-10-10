import { useState } from 'react'
import PropTypes from 'prop-types'
import useGameStore from '@/store/game'
import { twMerge } from 'tailwind-merge'

function HLACard({ order, data, className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  const { selectHLA } = useGameStore()

  function cardClick() {
    if (isCardOpen) return
    setIsCardOpen(true)
    setTimeout(() => {
      selectHLA(data)
    }, 1000)
  }

  return (
    <div
      className={twMerge('w-[12rem] h-[18rem]', className)}
      onClick={cardClick}
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
            bg-[url('/images/card/dna_card_back.png')] [backface-visibility:hidden;]"
        ></div>
        {/* Card Front */}
        <div
          className="absolute top-0 right-0 w-full h-full rounded-[0.6rem]
            [backface-visibility:hidden;] [transform:rotate3d(0,1,0,180deg);]
            overflow-hidden"
        >
          {/* Card frame */}
          <img
            src="/images/card/dna_card_front.jpg"
            alt=""
            className="absolute top-0 right-0 w-full h-full"
          />
          {/* Card content */}
          <img
            src={data.image}
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
  className: PropTypes.string
}
export default HLACard
