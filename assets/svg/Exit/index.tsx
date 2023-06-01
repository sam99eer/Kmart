import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Exit = (props: SvgProps) => (
    <Svg
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            stroke="#53B175"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7.335 19.882h-4a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h4m7 14 5-5m0 0-5-5m5 5h-12"
        />
    </Svg>
)

export default React.memo(Exit)