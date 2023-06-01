import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const About = (props: SvgProps) => (
    <Svg
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            fill="#181725"
            d="M10.092.076a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        />
        <Path
            fill="#181725"
            d="M10.092 15.076a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.092 5.076a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Z"
        />
    </Svg>
)

export default React.memo(About)