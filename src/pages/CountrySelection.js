import CountryCard from '@/components/CountryCard'

function CountrySelection() {
  return (
    <div className="w-full h-full [perspective:1000px;] animate-openLight brightness-[0.4]">
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-no-repeat bg-[length:100%_auto]
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
    </div>
  )
}
export default CountrySelection
