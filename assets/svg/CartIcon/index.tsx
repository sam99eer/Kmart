import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const CartIcon = (props: SvgProps) => (
  <Svg
    width={23}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#53B175"
      d="M8.902 20.352a2.445 2.445 0 1 1 0-4.89 2.445 2.445 0 0 1 0 4.89Zm8.559 0a2.445 2.445 0 1 1 0-4.891 2.445 2.445 0 0 1 0 4.89ZM1.52 3.14a1.176 1.176 0 0 1 0-2.351h1.407c1.103 0 2.057.765 2.296 1.841L6.755 9.53a2.352 2.352 0 0 0 2.296 1.841h9.185L20 4.315H8.573a1.176 1.176 0 0 1 0-2.35H20a2.351 2.351 0 0 1 2.282 2.922l-1.763 7.053a2.351 2.351 0 0 1-2.282 1.781H9.051a4.703 4.703 0 0 1-4.59-3.682L2.926 3.14H1.52Z"
    />
  </Svg>
)

export default React.memo(CartIcon)
