import CountryCard from '@/components/CountryCard'
import useGameStore from '@/store/game'

function CountrySelection() {
  const { setShowCountryResult } = useGameStore()
  return (
    <div className="w-full h-full [perspective:1000px;] animate-openLight brightness-[0.4]">
      {/* Table background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-repeat bg-[length:100%_auto]
          bg-[center_0rem] bg-[url('/images/bg_country.jpg')] animate-bgZoomIn
          [--bg-size:140%_auto] [--bg-position:center_-20rem] 2xl:[--bg-size:160%_auto]
          2xl:[--bg-position:center_-17rem]"
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
          gap-[2.3rem] [perspective:1000px;]"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <CountryCard
            key={`country_card_${item}`}
            order={item}
            showResult={setShowCountryResult}
          />
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
          身為白血病患者，你必須在世界各地尋找骨隨捐贈者，將根據所尋找到的國家，支付相對應的的費用
          (請點選一張國家牌)。
        </p>
      </div>
    </div>
  )
}

export default CountrySelection
