import { useState } from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function DNACard({ order, className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  function cardBackClick() {
    console.log('!!')
    setIsCardOpen(true)
  }

  return (
    <div
      className={twMerge('w-[12rem] h-[18rem]', className)}
      onClick={() => setIsCardOpen((pre) => !pre)}
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
            src={`/images/card/DNA_${order}.png`}
            alt=""
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[90%] h-[94%]"
          />
        </div>
      </div>
    </div>
  )
}

DNACard.propTypes = {
  order: PropTypes.number.isRequired,
  className: PropTypes.string
}
export default DNACard
