function HLASelf() {
  return (
    <div className="w-full h-full">
      {/* Background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-no-repeat bg-contain
          bg-[center_-7rem] bg-[url('/images/hla_self.jpg')]"
      ></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] -z-40"></div>
      <h1
        className="font-semibold text-secondary text-[2.5rem] tracking-widest w-full text-center
          relative top-[4rem]"
      >
        你的基因對:
      </h1>
      <div className="relative top-[6rem] flex items-center justify-center gap-8">
        <div className="w-[18rem] text-center">
          <img
            src={`/images/card/dna_1.png`}
            alt=""
            className="w-full h-auto"
          />
          <h1
            className="font-semibold text-secondary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-2"
          >
            HLA - r1
          </h1>
        </div>
        <div className="w-[18rem] text-center">
          <img
            src={`/images/card/dna_2.png`}
            alt=""
            className="w-full h-auto"
          />
          <h1
            className="font-semibold text-secondary text-3xl [text-shadow:1px_1px_0px_#BFBFBF]
              tracking-widest mt-2"
          >
            HLA - b2
          </h1>
        </div>
      </div>
      {/* Story text */}
      <div className="w-full h-[12rem] fixed bottom-0 bg-[rgba(255,255,255,0.4)] border border-white">
        <h3
          className="w-full h-[4.5rem] leading-[4.5rem] tracking-wide
            bg-[linear-gradient(to_right,_rgba(255,255,255,0.5),_rgba(255,255,255,0.1))]
            text-yellow-300 font-[900] text-4xl px-2 [text-shadow:1px_1px_0px_#424242]"
        >
          基因測試
        </h3>
        <p className="font-semibold text-3xl [text-shadow:1px_1px_0px_#BFBFBF] p-2 tracking-widest">
          身為白血病患者，醫院幫你做了完整的基因檢驗，知曉了自己的基因對，才能在全球範圍內找尋合適的骨隨捐贈者。
        </p>
      </div>
    </div>
  )
}

export default HLASelf
