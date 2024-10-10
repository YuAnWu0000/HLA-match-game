import useGameStore from '@/store/game'

function Win() {
  const { roundCount } = useGameStore()
  return (
    <div
      className="w-full h-full absolute top-0 right-0 bg-[rgba(0,0,0,0.8)] flex items-center
        justify-center"
    >
      <div>
        <h1 className="text-[5rem] font-bold text-secondary">遊戲通關!!</h1>
        <h1 className="text-[5rem] font-bold text-secondary">
          總計配對次數: {roundCount}
        </h1>
      </div>
    </div>
  )
}
export default Win
