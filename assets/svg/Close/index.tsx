import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Close = (props: SvgProps) => (
    <Svg
        width={15}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#B3B3B3"
            stroke="#B3B3B3"
            strokeWidth={0.1}
            d="m14.544 13.197-4.392-4.233-.992-.943 5.384-5.174a1.063 1.063 0 0 0 .355-.783.919.919 0 0 0-.093-.433 1.13 1.13 0 0 0-.24-.362l-.003-.002a1.356 1.356 0 0 0-.375-.24 1.225 1.225 0 0 0-.446-.077c-.15 0-.298.033-.444.087h-.001a1.164 1.164 0 0 0-.367.243L6.731 7.238c-.104.1-.184.221-.241.353v.001a1.156 1.156 0 0 0-.092.43c0 .144.035.288.092.42.057.13.137.252.241.352l6.199 5.958.001.001c.218.2.505.297.8.297.298 0 .585-.12.79-.319.218-.208.333-.473.334-.761a1.044 1.044 0 0 0-.31-.773Z"
        />
        <Path
            fill="#B3B3B3"
            stroke="#B3B3B3"
            strokeWidth={0.1}
            d="M.99 2.804h.001l4.392 4.232.992.943-5.384 5.175c-.113.108-.205.23-.263.364a1.063 1.063 0 0 0-.092.42c0 .151.023.296.093.431.056.13.136.262.24.362l.002.002c.112.097.237.185.376.24.139.056.299.078.446.078.15 0 .298-.034.444-.088h.001c.139-.056.265-.144.367-.242l6.199-5.958c.104-.1.184-.222.241-.353v-.002c.057-.14.092-.284.092-.429 0-.144-.035-.288-.092-.42a1.087 1.087 0 0 0-.241-.353l-6.2-5.958a1.179 1.179 0 0 0-1.59.021 1.042 1.042 0 0 0-.334.762c-.011.288.105.564.31.773Z"
        />
    </Svg>
)

export default React.memo(Close)
