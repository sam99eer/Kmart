import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"

const EmptyOrderHistory = (props: SvgProps) => (
    <Svg
        width={250}
        height={200}
        fill="none"
        {...props}
    >
        <Path fill="#fff9ff" d="M0 0h250v200H0z" />
        <Path
            fill="#EDF7F1"
            fillRule="evenodd"
            d="M63 134h91c.515 0 1.017-.056 1.5-.161.483.105.985.161 1.5.161h52a7 7 0 1 0 0-14h-6a7 7 0 1 1 0-14h19a7 7 0 1 0 0-14h-22a7 7 0 1 0 0-14h-64a7 7 0 1 0 0-14H79a7 7 0 1 0 0 14H39a7 7 0 1 0 0 14h25a7 7 0 1 1 0 14H24a7 7 0 1 0 0 14h39a7 7 0 1 0 0 14Zm163 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#53B175"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M167 148h22.428M64 148h21.454H64Zm-12.872 0H58h-6.872Zm143 0H197h-2.872Z"
        />
        <Path
            stroke="#B9DFC7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="m98 43.303 11.1 12.453m41-12.453L139 55.756l11.1-12.453ZM124 39v16.756V39Z"
        />
        <Path
            fill="#B9DFC7"
            fillRule="evenodd"
            d="M92.798 71h62.606l-5.606 8.41 7.475 5.606H90.929l8.41-5.606L92.797 71Z"
            clipRule="evenodd"
        />
        <Rect width={71} height={75} x={89} y={83} fill="#FFF9FF" rx={2} />
        <Path
            fill="#EDF7F1"
            fillRule="evenodd"
            d="M93.585 124.006v-34.36c0-1.416 1.16-2.564 2.592-2.564l60.976 64.082c0 1.888-1.511 3.418-3.375 3.418H96.96c-1.864 0-3.375-1.53-3.375-3.418v-27.158Zm0 7.419v-3.848Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#53B175"
            strokeLinecap="round"
            strokeWidth={2.5}
            d="M90 124.463V86.885c0-1.548 1.27-2.803 2.838-2.803h64.923c1.021 0 1.848.837 1.848 1.869v68.213c0 2.064-1.655 3.738-3.696 3.738H93.696c-2.041 0-3.696-1.674-3.696-3.738V136.41m0-3.834v-4.208"
        />
        <Path
            stroke="#53B175"
            strokeWidth={2.5}
            d="M91.863 84.082V72.869c0-1.032.751-1.87 1.677-1.87h62.056c.926 0 1.677.838 1.677 1.87v11.213"
        />
        <Path
            fill="#E8F0FE"
            stroke="#53B175"
            strokeLinecap="round"
            strokeWidth={2.5}
            d="M109.15 103.705a3.27 3.27 0 1 0 0-6.54 3.27 3.27 0 0 0 0 6.54ZM139.986 103.705a3.271 3.271 0 1 0 0-6.542 3.271 3.271 0 0 0 0 6.542Z"
        />
        <Path
            stroke="#53B175"
            strokeLinecap="round"
            strokeWidth={2.5}
            d="M139.519 103.705c0 8.257-6.694 14.951-14.951 14.951-8.257 0-14.951-6.694-14.951-14.951M92.855 71.931l6.578 6.494a1 1 0 0 1-.218 1.587l-7.352 4.07M156.44 72l-6.295 6.42a1 1 0 0 0 .235 1.578l7.487 4.084"
        />
    </Svg>
)

export default React.memo(EmptyOrderHistory)
