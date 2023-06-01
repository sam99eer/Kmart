import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

const RightChevron = (props: SvgProps) => (
    <Svg
        width={10}
        height={14}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#181725"
                d="M1.283 1.908A.935.935 0 0 1 .987 1.2c0-.263.11-.505.317-.698C1.502.32 1.775.21 2.06.21c.285 0 .559.091.767.273l6.198 5.723a.996.996 0 0 1 .23.324.941.941 0 0 1 .088.384c0 .131-.033.263-.088.394a.996.996 0 0 1-.23.324l-6.198 5.722a1.12 1.12 0 0 1-.778.304 1.22 1.22 0 0 1-.427-.071 1.317 1.317 0 0 1-.361-.223 1.037 1.037 0 0 1-.23-.333.807.807 0 0 1-.088-.394c0-.132.033-.263.088-.385.054-.121.142-.232.252-.333l5.42-5.005-1.029-.94-4.391-4.065Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M9.343 13.657h-8.4V.21h8.4z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default React.memo(RightChevron)