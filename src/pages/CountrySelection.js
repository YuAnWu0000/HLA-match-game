import { useState } from 'react'
import PropTypes from 'prop-types'
import useGameStore from '@/store/game'
import { COUNTRY_MAP, CountryCard } from '@/components/CountryCard'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

function CountryResult({ setIsShow }) {
  const { selectedCountryId, buddhistLifesRemain } = useGameStore()
  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center
        justify-center"
    >
      <h1 className="absolute top-[5%] text-secondary font-bold text-[2.3rem]">
        尋找結果:
      </h1>
      <CountryCard
        order={1}
        defaultOpen={true}
        defaultId={selectedCountryId}
        size="xl"
        className="transform-none animate-none"
      />
      {selectedCountryId === 5 && buddhistLifesRemain > 0 ? (
        <h1 className="absolute bottom-[5%] text-secondary font-bold text-[2.3rem]">
          將扣除慈濟補助一次 (無須扣除金錢)
        </h1>
      ) : (
        <h1 className="absolute bottom-[5%] text-secondary font-bold text-[2.3rem]">
          將扣除檢驗費用
          <span
            className="[background-clip:text]
              bg-[linear-gradient(to_top_right,_#f0f4c3,_#e6ee9c,_#f9fbe7,_#e6ee9c,_#f9fbe7,_#e6ee9c)]
              text-[2.2rem] text-transparent font-bold mx-2"
          >
            {COUNTRY_MAP[selectedCountryId].cost}
          </span>
          元
        </h1>
      )}

      <div
        className="absolute right-[1rem] bottom-[1rem] flex items-center cursor-pointer
          text-secondary hover:text-yellow-200"
        onClick={() => setIsShow(false)}
      >
        <h3 className="text-inherit font-semibold text-[1.8rem]">下一步</h3>
        <ChevronRightIcon className="w-10 h-10 text-inherit" />
      </div>
    </div>
  )
}

function CountrySelection() {
  const [showResult, setShowResult] = useState(false)
  return (
    <div className="w-full h-full [perspective:1000px;] animate-openLight brightness-[0.4]">
      {/* Table background */}
      <div
        className="absolute top-0 right-0 -z-50 w-full h-full bg-repeat bg-[length:100%_auto]
          bg-[center_0rem] bg-[url('/images/bg_country.jpg')] animate-bgZoomIn
          animate-none"
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
          <CountryCard
            key={`country_card_${item}`}
            order={item}
            showResult={setShowResult}
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
          在世界各地尋找捐贈者，將根據所尋找到的國家，支付尋找捐贈者及確認HLA的費用
          (請點選一張牌)。
        </p>
      </div>
      {showResult && <CountryResult setIsShow={setShowResult} />}
    </div>
  )
}
CountryResult.propTypes = {
  setIsShow: PropTypes.func.isRequired
}
export default CountrySelection
