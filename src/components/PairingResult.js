import PropTypes from 'prop-types'
import useGameStore from '@/store/game'

function PairingResult({ setIsShow }) {
  const { showPairingResult } = useGameStore()

  return (
    showPairingResult && (
      <div className="absolute top-0 right-0 w-full h-full z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        <img
          src="/images/pairing_result.png"
          className="relative top-0 w-auto h-full mx-auto"
          alt=""
        />
      </div>
    )
  )
}
PairingResult.propTypes = {
  setIsShow: PropTypes.func.isRequired
}
export default PairingResult
