import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const FilledStar = (props: SvgProps) => (
    <Svg
        width={16}
        height={15}
        fill="none"
        {...props}
    >
        <Path
            fill="#F3603F"
            d="M8.3 11.97 3.75 14.36l.87-5.065L.937 5.708l5.086-.739L8.299.361l2.275 4.608 5.085.74-3.68 3.587.87 5.065-4.55-2.392Z"
        />
    </Svg>
)

export default React.memo(FilledStar)
