import { useState } from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function DNACard({ className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  function cardBackClick() {
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
      </div>
    </div>
  )
}

DNACard.propTypes = {
  className: PropTypes.string
}
export default DNACard
