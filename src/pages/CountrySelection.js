import CountryCard from '@/components/CountryCard'

function CountryResult() {
  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center
        justify-center"
    >
      <h1 className="absolute top-[12%] text-secondary font-bold text-3xl">
        選擇結果：美國
      </h1>
      <CountryCard
        order={1}
        className="w-[26rem] h-[39rem] transform-none animate-none"
      />
    </div>
  )
}

function CountrySelection() {
  return (
    <div className="w-full h-full [perspective:1000px;] animate-openLight brightness-[0.4]">
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
      <div
        className="relative w-[80rem] h-[52rem] mx-auto flex justify-center content-center
          flex-wrap gap-8 [perspective:1000px;]"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <CountryCard key={`country_card_${item}`} order={item} />
        ))}
      </div>
      <CountryResult />
    </div>
  )
}
export default CountrySelection
