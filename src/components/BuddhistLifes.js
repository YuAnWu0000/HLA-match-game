import useGameStore from '@/store/game'
import { twMerge } from 'tailwind-merge'

function BuddhistLifes() {
  const { buddhistLifesRemain } = useGameStore()
  return (
    <div
      className="absolute top-0 right-0 flex items-center justify-center gap-2
        bg-[rgba(255,255,255,0.2)] rounded-lg p-1"
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={`buddhist${item}`}
          className={twMerge(
            "w-16 h-12 bg-[url('/images/buddhist_logo.png')] bg-cover",
            item > buddhistLifesRemain && 'brightness-50'
          )}
        ></div>
      ))}
    </div>
  )
}
export default BuddhistLifes
