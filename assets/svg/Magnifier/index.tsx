import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Magnifier = (props: SvgProps) => (
    <Svg
        width={20}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#181B19"
            d="M8.952 14.116a6 6 0 1 0 0-12.001 6 6 0 0 0 0 12.001Zm6.32-1.094 3.58 3.58a1.001 1.001 0 0 1-1.09 1.638 1 1 0 0 1-.325-.225l-3.58-3.58a8 8 0 1 1 1.414-1.414l.001.001Z"
        />
    </Svg>
)

export default React.memo(Magnifier)