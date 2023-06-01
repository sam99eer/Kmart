import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"

const ExploreIcon = (props: SvgProps) => (
    <Svg
        width={29}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#53B175"
            d="M18.517 14.071a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm6.32-1.094 3.58 3.58a.999.999 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414v.001Z"
        />
        <Rect
            width={8.855}
            height={2.399}
            x={0.372}
            y={0.071}
            fill="#53B175"
            rx={1.2}
        />
        <Rect
            width={6.464}
            height={2.399}
            x={0.372}
            y={7.509}
            fill="#53B175"
            rx={1.2}
        />
        <Rect
            width={8.855}
            height={2.399}
            x={0.372}
            y={14.948}
            fill="#53B175"
            rx={1.2}
        />
    </Svg>
)

export default React.memo(ExploreIcon)