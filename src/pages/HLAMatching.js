import DNACard from '@/components/DNACard'

function HLAMatching() {
  return (
    <div className="w-full h-full [perspective:1000px;]">
      {/* Background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-repeat bg-[length:140%_auto]
          bg-[center_-25rem] bg-[url('/images/bg_dna.jpg')]"
      ></div>
      <div
        className="relative top-[0rem] w-[70rem] h-[46rem] mx-auto flex justify-center
          content-center flex-wrap gap-8 [transform-style:preserve-3d;]
          [transform:rotateX(35deg);]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <DNACard key={`dna_card_${item}`} order={item} />
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
