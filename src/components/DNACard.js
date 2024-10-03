import { useState } from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function DNACard({ className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  function cardBackClick() {
    console.log('!!')
    setIsCardOpen(true)
  }

  return (
    <div className={twMerge('w-[12rem] h-[18rem]', className)}>
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
          onClick={cardBackClick}
        ></div>
        {/* Card Front */}
        <div
          className="absolute top-0 right-0 w-full h-full [backface-visibility:hidden;]
            [transform:rotate3d(0,1,0,180deg);] rounded-[1.25rem] overflow-hidden"
          onClick={() => setIsCardOpen(false)}
        >
          {/* Card frame */}
          <img
            src="/images/card/dna_card_front_frame.jpg"
            alt=""
            className="absolute top-0 right-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

DNACard.propTypes = {
  className: PropTypes.string
}
export default DNACard
