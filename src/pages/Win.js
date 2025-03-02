import useGameStore from '@/store/game'

function Win() {
  const { roundCount } = useGameStore()
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 bg-win bg-cover flex items-center
        justify-center`}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative text-center">
        <h1 className="text-[5rem] font-bold text-green-400">遊戲通關!!</h1>
        <h1 className="text-[5rem] font-bold text-green-400">
          總計配對次數: {roundCount}
        </h1>
      </div>
    </div>
  )
}
export default Win
