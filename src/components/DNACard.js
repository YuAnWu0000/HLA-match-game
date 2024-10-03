import { useState } from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function DNACard({ className }) {
  const [isCardOpen, setIsCardOpen] = useState()
  return (
    <div
      className={twMerge(
        "w-[12rem] h-[18rem] bg-contain bg-[url('/images/card/dna_card_back.png')]",
        className
      )}
    >
      <div
        className={twMerge(
          'w-full h-full [transform-style:preserve-3d;]',
          isCardOpen && 'animate-cardFlip'
        )}
      ></div>
    </div>
  )
}

DNACard.propTypes = {
  className: PropTypes.string
}
export default DNACard
