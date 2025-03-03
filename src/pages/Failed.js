import useGameStore from '@/store/game'
import Button from '@/components/Button'

function Failed() {
  const { roundCount, failedReason, restart } = useGameStore()
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 bg-failed bg-cover flex items-center
        justify-center`}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative text-center">
        <h1
          className="text-[5rem] font-bold text-secondary
            [text-shadow:1px_1px_black,2px_2px_5px_black]"
        >
          {failedReason}，遊戲失敗!!
        </h1>
        <h1
          className="text-[5rem] font-bold text-secondary
            [text-shadow:1px_1px_black,2px_2px_5px_black]"
        >
          總計配對次數: {roundCount}
        </h1>
        <Button variant="primary" size="lg" onClick={restart} className="mt-8">
          再玩一局
        </Button>
      </div>
    </div>
  )
}
export default Failed
