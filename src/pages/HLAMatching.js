function HLAMatching() {
  return (
    <div className="w-full h-screen [perspective:1000px;]">
      <div
        className="absolute top-0 right-0 -z-50 w-full h-screen bg-[length:140%_auto] bg-repeat
          bg-[center_-20rem] bg-[url('/images/bg_dna.jpg')]"
      ></div>
      <div
        className="relative top-[-2rem] w-[80rem] h-[52rem] mx-auto flex justify-center
          content-center flex-wrap gap-8 [transform-style:preserve-3d;]
          [transform:rotateX(35deg);]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            key={`dna_card_${item}`}
            className="w-[14rem] h-[21rem] bg-contain bg-[url('/images/card/dna_card_back.png')]"
          ></div>
        ))}
      </div>
    </div>
  )
}

export default HLAMatching
