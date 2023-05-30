import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Star = (props: SvgProps) => (
    <Svg
        width={16}
        height={15}
        fill="none"
        {...props}
    >
        <Path
            fill="#7C7C7C"
            d="M8.049 11.97 3.5 14.36l.869-5.065L.688 5.708l5.085-.739L8.05.361l2.274 4.608 5.086.74-3.68 3.587.869 5.065-4.55-2.392Z"
        />
    </Svg>
)

export default Star