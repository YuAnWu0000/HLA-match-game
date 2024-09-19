import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const Button = ({ variant, size, className }) => {
  const defaultStyles =
    'w-[120px] h-[30px] text-base font-medium text-white bg-black border border-solid'
  const variantStyles = {
    primary: 'bg-green-500 font-medium border-white rounded-lg',
    warning: 'bg-orange-500 font-medium border-white rounded-lg',
    error: 'bg-red-500 font-medium border-white rounded-lg'
  }
  const sizeStyles = {
    lg: 'w-[200px] h-[50px] text-lg',
    sm: 'w-[100px] h-[20px] text-sm'
  }
  // const disableStyles = 'bg-gray-500 pointer-events-none'
  let totalStyles = twMerge(
    defaultStyles,
    variantStyles[variant] ? variantStyles[variant] : '',
    sizeStyles[size] ? sizeStyles[size] : '',
    className
  )
  return <div className={totalStyles}>Button</div>
}
Button.propTypes = {
  variant: PropTypes.oneOf(['', 'primary', 'secondary', 'warning']),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  isDisable: PropTypes.bool,
  isHidden: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
}
export default Button
