import SelfHLA from '@/pages/SelfHLA'
import CountrySelection from '@/pages/CountrySelection'
import HLAMatching from '@/pages/HLAMatching'
import DonationCost from '@/pages/DonationCost'
import Win from '@/pages/Win'
import Failed from '@/pages/Failed'
import useGameStore from '@/store/game'
import { formatAmount } from '@/utils/format'
import BuddhistLifes from '@/components/BuddhistLifes'
import NowCountry from '@/components/NowCountry'
import MyHLA from '@/components/MyHLA'
import CountryResult from '@/components/CountryResult'
import PairingResult from '@/components/PairingResult'
import TimesUp from '@/components/TimesUp'

const GAME_FLOW_COMPONENT_MAPPING = {
  SELF_HLA: <SelfHLA />,
  COUNTRY_SELECTION: <CountrySelection />,
  HLA_MATCHING: <HLAMatching />,
  DONATION_COST: <DonationCost />,
  WIN: <Win />,
  FAILED: <Failed />
}
function App() {
  const { money, flow } = useGameStore()
  return (
    <div className="w-screen h-screen fixed">
      {GAME_FLOW_COMPONENT_MAPPING[flow]}
      {flow !== 'FAILED' && flow !== 'WIN' && (
        <>
          {/* Money */}
          <div className="absolute top-0 left-0 flex items-center justify-center gap-2 p-2">
            <img src="/images/cash.png" alt="" className="w-[3.8rem] h-auto" />
            <h3
              className="[background-clip:text]
                bg-[linear-gradient(to_top_right,_#f0f4c3,_#e6ee9c,_#f9fbe7,_#e6ee9c,_#f9fbe7,_#e6ee9c)]
                text-[1.9rem] text-transparent font-bold"
            >
              {formatAmount(money)}
            </h3>
          </div>
          {/* Buddhist lifes */}
          <BuddhistLifes />
          {/* Now selected country */}
          <NowCountry />
          {/* User's HLA */}
          <MyHLA />
        </>
      )}
      <CountryResult />
      <PairingResult />
      <TimesUp />
    </div>
  )
}

export default App
