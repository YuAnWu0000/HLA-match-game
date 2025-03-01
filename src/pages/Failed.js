import useGameStore from '@/store/game'

function Failed() {
  const { roundCount, failedReason } = useGameStore()
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 bg-failed bg-cover flex items-center
        justify-center`}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative text-center">
        <h1 className="text-[5rem] font-bold text-secondary">
          {failedReason}，遊戲失敗!!
        </h1>
        <h1 className="text-[5rem] font-bold text-secondary">
          總計配對次數: {roundCount}
        </h1>
      </div>
    </div>
  )
}
export default Failed
