import useGameStore from '@/store/game'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function PairingResult() {
  const {
    myHLAs,
    money,
    setGameFlow,
    showPairingResult,
    setShowPairingResult,
    selectedHLAs,
    checkPairingResult,
    clearPairingResult
  } = useGameStore()
  function nextStep() {
    if (checkPairingResult()) {
      setGameFlow('WIN')
    } else {
      if (money > 0) setGameFlow('COUNTRY_SELECTION')
      else setGameFlow('FAILED')
    }
    clearPairingResult()
    setShowPairingResult(false)
  }
  return (
    showPairingResult && (
      <div className="absolute top-0 right-0 w-full h-full z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)]"></div>
        {/* Pairing result paper  */}
        <img
          src="/images/pairing_bg.jpg"
          className="fixed -top-10 right-1/2 translate-x-1/2 w-[52%] h-auto"
          alt=""
        />
        {/* HLA area */}
        <div
          className="relative top-[25%] right-[0.1rem] m-auto w-[46.9%] h-[34rem] bg-[#dde0e5]
            border-4 border-[#a1a5af] flex items-start justify-evenly 2xl:top-[20%]
            2xl:h-[30rem]"
        >
          <div className="w-1/2 flex flex-wrap items-center">
            <h2
              className="w-full h-[6rem] leading-[6rem] mb-[1rem] text-primary text-4xl font-semibold
                text-center border-b-2 border-[#a1a5af]
                [text-shadow:1px_1px_0px_#BFBFBF,2px_2px_0px_#a1a5af]"
            >
              對方基因
            </h2>
            {/* Pairing HLA 1 */}
            <div className="w-1/2 text-center p-3">
              <img
                src={selectedHLAs[0].image}
                alt=""
                className="w-full h-auto"
              />
              <h1
                className="font-semibold text-primary text-4xl [text-shadow:1px_1px_0px_#BFBFBF]
                  tracking-wide mt-3"
              >
                {selectedHLAs[0].name}
              </h1>
            </div>
            {/* Pairing HLA 2 */}
            <div className="w-1/2 text-center p-3">
              <img
                src={selectedHLAs[1].image}
                alt=""
                className="w-full h-auto"
              />
              <h1
                className="font-semibold text-primary text-4xl [text-shadow:1px_1px_0px_#BFBFBF]
                  tracking-wide mt-3"
              >
                {selectedHLAs[1].name}
              </h1>
            </div>
          </div>
          <div className="w-[3px] h-full bg-[#a1a5af]"></div>
          <div className="w-1/2 flex flex-wrap items-center">
            <h2
              className="w-full h-[6rem] leading-[6rem] mb-[1rem] text-primary text-4xl font-semibold
                text-center border-b-2 border-[#a1a5af]
                [text-shadow:1px_1px_0px_#BFBFBF,2px_2px_0px_#a1a5af]"
            >
              我的基因
            </h2>
            {/* First HLA */}
            <div className="w-1/2 text-center p-3">
              <img src={myHLAs[0].image} alt="" className="w-full h-auto" />
              <h1
                className="font-semibold text-primary text-4xl [text-shadow:1px_1px_0px_#BFBFBF]
                  tracking-wide mt-3"
              >
                {myHLAs[0].name}
              </h1>
            </div>
            {/* Second HLA */}
            <div className="w-1/2 text-center p-3">
              <img src={myHLAs[1].image} alt="" className="w-full h-auto" />
              <h1
                className="font-semibold text-primary text-4xl [text-shadow:1px_1px_0px_#BFBFBF]
                  tracking-wide mt-3"
              >
                {myHLAs[1].name}
              </h1>
            </div>
          </div>
        </div>
        {checkPairingResult() ? (
          <div
            className="w-[56rem] absolute top-1/2 right-1/2
              [transform:translate(50%,-50%)_rotate(-35deg)] border-[1rem] border-green-500
              animate-fadeIn opacity-0"
          >
            {/* MATCHED */}
            <h1
              className="text-center text-[10rem] font-[900] tracking-widest after:content-['配對成功!']
                after:text-transparent after:[text-shadow:2px_2px_0px_#ffffff]"
            >
              <div
                className="w-full text-center [background-clip:text] text-transparent
                  bg-[linear-gradient(to_top_right,#15803d,#16a34a,#22c55e,#4ade80,#86efac,#a7f3d0)]
                  absolute right-0"
              >
                配對成功!
              </div>
            </h1>
            <h1
              className="text-center text-[7rem] font-[900] tracking-widest after:content-['MATCHED!']
                after:text-transparent after:[text-shadow:2px_2px_0px_#ffffff] mt-[-3rem]"
            >
              <div
                className="w-full text-center [background-clip:text] text-transparent
                  bg-[linear-gradient(to_top_right,#15803d,#16a34a,#22c55e,#4ade80,#86efac,#a7f3d0)]
                  absolute right-0"
              >
                MATCHED!
              </div>
            </h1>
          </div>
        ) : (
          <div
            className="w-[56rem] absolute top-1/2 right-1/2
              [transform:translate(50%,-50%)_rotate(-35deg)] border-[1rem] border-red-500
              animate-fadeIn opacity-0"
          >
            {/* MISMATCHED */}
            <h1
              className="text-center text-[10rem] font-[900] tracking-widest after:content-['配對失敗!']
                after:text-transparent after:[text-shadow:2px_2px_0px_#ffffff]"
            >
              <div
                className="w-full text-center [background-clip:text] text-transparent
                  bg-[linear-gradient(to_top_right,#991b1b,#b91c1c,#dc2626,#ef4444,#f87171,#fca5a5)]
                  absolute right-0"
              >
                配對失敗!
              </div>
            </h1>
            <h1
              className="text-center text-[6rem] font-[900] tracking-widest after:content-['MISMATCHED!']
                after:text-transparent after:[text-shadow:2px_2px_0px_#ffffff] mt-[-3rem]"
            >
              <div
                className="w-full text-center [background-clip:text] text-transparent
                  bg-[linear-gradient(to_top_right,#991b1b,#b91c1c,#dc2626,#ef4444,#f87171,#fca5a5)]
                  absolute right-0"
              >
                MISMATCHED!
              </div>
            </h1>
          </div>
        )}

        {/* Next step */}
        <div
          className="group absolute right-[1rem] bottom-[1rem] flex items-center cursor-pointer
            text-secondary hover:text-yellow-400"
          onClick={nextStep}
        >
          <h3
            className="text-inherit font-semibold text-[1.8rem] group-hover:border-b-2
              group-hover:border-yellow-400"
          >
            下一步
          </h3>
          <ChevronRightIcon className="w-9 h-9 text-inherit ml-1 mt-1.5" />
        </div>
      </div>
    )
  )
}
PairingResult.propTypes = {}
export default PairingResult
