import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function BackArrowBlack(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_3762_17054)">
        <Path
          d="M32 23H19.83l5.59-5.59L24 16l-8 8 8 8 1.41-1.41L19.83 25H32v-2z"
          fill="#3F4946"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3762_17054">
          <Rect x={4} y={4} width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BackArrowBlack
