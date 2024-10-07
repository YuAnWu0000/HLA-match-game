import CountryCard from '@/components/CountryCard'

function CountryResult() {
  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center
        justify-center"
    >
      <h1 className="absolute top-[10%] text-secondary font-bold text-[2.3rem]">
        尋找結果:
      </h1>
      <CountryCard
        order={1}
        size="xl"
        className="transform-none animate-none"
      />
      <h1 className="absolute bottom-[10%] text-secondary font-bold text-[2.3rem]">
        已扣除費用 50000 元 (前5次配對費用為慈濟補助，還剩餘4次)
      </h1>
    </div>
  )
}

function CountrySelection() {
  return (
    <div className="w-full h-full [perspective:1000px;] animate-openLight brightness-[0.4]">
      {/* Table background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-repeat bg-[length:100%_auto]
          bg-[center_0rem] bg-[url('/images/bg_country.jpg')] animate-bgZoomIn"
      ></div>
      {/* <img
        src="/images/bg_0.jpg"
        className="absolute top-0 right-0 -z-50 w-full h-auto [transform-style:preserve-3d;]
          [transform:rotateX(-60deg);]"
        alt=""
      /> */}
      {/* Card wrapper */}
      <div
        className="relative top-[14rem] w-full h-fit flex justify-center content-center flex-wrap
          gap-[2.6rem] [perspective:1000px;]"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <CountryCard key={`country_card_${item}`} order={item} />
        ))}
      </div>
      {/* Story text */}
      <div className="w-full h-[12rem] fixed bottom-0 bg-[rgba(255,255,255,0.4)] border border-white">
        <h3
          className="w-full h-[4.5rem] leading-[4.5rem] tracking-wide
            bg-[linear-gradient(to_right,_rgba(255,255,255,0.5),_rgba(255,255,255,0.1))]
            text-yellow-300 font-[900] text-4xl px-2 [text-shadow:1px_1px_0px_#424242]"
        >
          希望在哪裡？
        </h3>
        <p className="font-semibold text-3xl [text-shadow:1px_1px_0px_#BFBFBF] p-2 tracking-widest">
          在世界各地尋找捐贈者，將根據所尋找到的國家，支付尋找捐贈者及確認HLA的費用
          (請點選一張牌)。
        </p>
      </div>
      {/* <CountryResult /> */}
    </div>
  )
}
export default CountrySelection
