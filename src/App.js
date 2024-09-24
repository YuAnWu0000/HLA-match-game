import CountrySelection from '@/pages/CountrySelection'
import HLAMatching from '@/pages/HLAMatching'
import useGameStore from '@/store/game'
const GAME_FLOW_COMPONENT_MAPPING = {
  COUNTRY_SELECTION: <CountrySelection />,
  HLA_MATCHING: <HLAMatching />
}
function App() {
  const { money, flow } = useGameStore()
  return (
    <div className="w-screen h-screen">{GAME_FLOW_COMPONENT_MAPPING[flow]}</div>
  )
}

export default App
