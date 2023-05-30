import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

const Back = (props: SvgProps) => (
    <Svg
        width={11}
        height={19}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#181725"
                d="M10.446 15.859c.235.257.365.595.352.947 0 .352-.13.677-.378.934-.235.244-.56.392-.9.392-.339 0-.665-.122-.912-.365l-7.38-7.66a1.343 1.343 0 0 1-.273-.433 1.391 1.391 0 0 1-.105-.515c0-.176.04-.351.105-.527.065-.163.156-.312.273-.434l7.38-7.66c.117-.121.26-.23.417-.297a1.307 1.307 0 0 1 1.017-.014c.156.068.3.176.43.298.117.122.209.284.274.446.078.163.104.339.104.528 0 .176-.039.352-.104.515-.065.162-.17.31-.3.446l-6.454 6.7 1.226 1.258 5.228 5.44Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.85.132h10v18h-10z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default React.memo(Back)
