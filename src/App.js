function App() {
  return (
    <div className="w-full h-screen [perspective:500px;]">
      <div
        className="w-full h-full bg-[length:200%_200%] bg-no-repeat bg-[center_-30rem]
          bg-[url('/images/bg_0.jpg')] [perspective:500px;]"
      >
        <div
          className="w-[60rem] h-[45rem] m-auto flex justify-center content-center flex-wrap gap-4
            [transform-style:preserve-3d;] [transform:rotateX(25deg);]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={`dna_card_${item}`}
              className="w-[10rem] h-[15rem] bg-contain bg-[url('/images/card/dna_card_back.png')]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
