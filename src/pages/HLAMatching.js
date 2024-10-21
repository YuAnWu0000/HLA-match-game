import { useEffect, useRef } from 'react'
import HLACard from '@/components/HLACard'
import useGameStore, { HLA_MAP } from '@/store/game'

function HLAMatching() {
  const { selectHLA } = useGameStore()
  const HLAMatchingEl = useRef()
  useEffect(() => {
    console.log(HLAMatchingEl)
    HLAMatchingEl.current.focus()
  }, [])
  return (
    <div
      className="w-full h-full [perspective:1000px;]"
      ref={HLAMatchingEl}
      tabIndex="-1"
      onKeyDown={(e) => {
        console.log(e)
        if (e.key === 'Enter') {
          selectHLA({
            id: 'r1',
            name: 'HLA - r1',
            image: '/images/card/hla_r1.png'
          })
          selectHLA({
            id: 'b2',
            name: 'HLA - b2',
            image: '/images/card/hla_b2.png'
          })
        }
      }}
    >
      {/* Background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-repeat bg-[length:140%_auto]
          bg-[center_-25rem] 2xl:bg-[length:160%_auto] 2xl:bg-[center_-22rem]
          bg-[url('/images/bg_dna.jpg')]"
      ></div>
      <div
        className="relative top-[0rem] 2xl:top-[3.5rem] w-[70rem] h-[46rem] mx-auto flex
          justify-center content-center flex-wrap gap-8 [transform-style:preserve-3d;]
          [transform:rotateX(35deg);]"
      >
        {Object.values(HLA_MAP).map((item, index) => (
          <HLACard key={`hla_card_${item.id}`} order={index} data={item} />
        ))}
      </div>
      {/* Story text */}
      <div className="w-full h-[10rem] fixed bottom-0 bg-[rgba(255,255,255,0.4)] border border-white">
        <h3
          className="w-full h-[3.5rem] leading-[3.5rem] tracking-wide
            bg-[linear-gradient(to_right,_rgba(255,255,255,0.5),_rgba(255,255,255,0.1))]
            text-violet-500 font-[900] text-4xl px-2 [text-shadow:1px_1px_0px_#ffffff]"
        >
          HLA 配對
        </h3>
        <p className="font-semibold text-3xl [text-shadow:1px_1px_0px_#BFBFBF] p-2 tracking-widest">
          與捐贈者配對並確認HLA是否相符合，若配對成功，則須支付捐贈者身體檢查、捐贈造血幹細胞等費用
          (請點選兩張基因牌)。
        </p>
      </div>
    </div>
  )
}

export default HLAMatching
