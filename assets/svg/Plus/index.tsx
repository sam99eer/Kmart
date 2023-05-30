import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Plus = (props: SvgProps) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M17.553 8.63c0 .376-.144.739-.414 1.002-.263.27-.626.42-1.002.42h-5.665v5.662c0 .376-.15.74-.42 1.002-.263.263-.62.414-.996.414a1.423 1.423 0 0 1-1.423-1.416v-5.662H1.97A1.422 1.422 0 0 1 .966 7.628a1.423 1.423 0 0 1 1.003-.414h5.664V1.552c0-.376.15-.74.42-1.003a1.403 1.403 0 0 1 2 0c.269.263.419.627.419 1.003v5.662h5.665a1.407 1.407 0 0 1 1.416 1.416Z"
        />
    </Svg>
)

export default Plus
