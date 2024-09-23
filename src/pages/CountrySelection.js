function CountrySelection() {
  return (
    <div className="w-full h-screen [perspective:1000px;]">
      <div
        className="absolute top-0 right-0 -z-50 w-full h-screen bg-[length:140%_auto] bg-repeat
          bg-[center_-20rem] bg-[url('/images/bg_country.jpg')]"
      ></div>
      {/* <img
        src="/images/bg_0.jpg"
        className="absolute top-0 right-0 -z-50 w-full h-auto [transform-style:preserve-3d;]
          [transform:rotateX(-60deg);]"
        alt=""
      /> */}
      <div
        className="relative top-[-2rem] w-[80rem] h-[52rem] mx-auto flex justify-center
          content-center flex-wrap gap-8 [transform-style:preserve-3d;]
          [transform:rotateX(35deg);]"
      ></div>
    </div>
  )
}
export default CountrySelection
