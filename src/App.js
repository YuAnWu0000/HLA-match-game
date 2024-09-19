function App() {
  return (
    <div className="w-full h-screen [perspective:1000px;]">
      <div
        className="absolute top-0 right-0 -z-50 w-full h-screen bg-[length:200%_200%] bg-repeat
          bg-[center_-30rem] bg-[url('/images/bg_0.jpg')] [transform-style:preserve-3d;]
          [transform:rotateX(-45deg);]"
      ></div>
      <div className="w-[60rem] h-[45rem] m-auto flex justify-center content-center flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            key={`dna_card_${item}`}
            className="w-[10rem] h-[15rem] bg-contain bg-[url('/images/card/dna_card_back.png')]"
          ></div>
        ))}
      </div>
    </div>
  )
}

export default App
