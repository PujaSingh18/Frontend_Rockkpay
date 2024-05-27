import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function PersonImage(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#6633CC" />
      <G clipPath="url(#clip0_3762_16855)" fill="white">
        <Path d="M24 24a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM33 31.718a4.524 4.524 0 00-2.745-4.163 15.639 15.639 0 00-12.51 0A4.524 4.524 0 0015 31.718V33h18v-1.282z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3762_16855">
          <Rect x={4} y={4} width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PersonImage
