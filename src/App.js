function App() {
  return (
    <div
      className="w-full h-screen bg-[length:200%_200%] bg-no-repeat bg-[center_-30rem]
        bg-[url('/images/bg_0.jpg')]"
    >
      <div
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60vh]
          flex justify-center flex-wrap gap-4"
      >
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
