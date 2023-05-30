import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Minus = (props: SvgProps) => (
    <Svg
        width={18}
        height={3}
        fill="none"
        {...props}
    >
        <Path
            fill="#B3B3B3"
            d="M17.064 1.472c0 .376-.144.74-.413 1.002-.264.27-.627.42-1.003.42H1.48A1.422 1.422 0 0 1 .477.47 1.423 1.423 0 0 1 1.48.057h14.168c.376 0 .74.15 1.003.413.269.27.413.626.413 1.002Z"
        />
    </Svg>
)

export default React.memo(Minus)