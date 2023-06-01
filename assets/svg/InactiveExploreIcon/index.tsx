import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"

const InactiveExploreIcon = (props: SvgProps) => (
    <Svg
        width={30}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            fill="#181725"
            d="M19.021 14.071a6 6 0 1 0 0-12.001 6 6 0 0 0 0 12.001Zm6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414l.001.001Z"
        />
        <Rect
            width={8.855}
            height={2.399}
            x={0.877}
            y={0.071}
            fill="#181725"
            rx={1.2}
        />
        <Rect
            width={6.464}
            height={2.399}
            x={0.877}
            y={7.509}
            fill="#181725"
            rx={1.2}
        />
        <Rect
            width={8.855}
            height={2.399}
            x={0.877}
            y={14.948}
            fill="#181725"
            rx={1.2}
        />
    </Svg>
)

export default React.memo(InactiveExploreIcon)