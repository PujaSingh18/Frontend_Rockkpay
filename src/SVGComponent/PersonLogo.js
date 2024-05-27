import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function PersonLogo(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={20} fill="#6633CC" />
      <G clipPath="url(#clip0_3984_7655)" fill="white">
        <Path d="M20 20a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM29 27.718a4.524 4.524 0 00-2.745-4.163 15.639 15.639 0 00-12.51 0A4.524 4.524 0 0011 27.718V29h18v-1.282z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3984_7655">
          <Rect
            x={3.33301}
            y={3.33301}
            width={33.3333}
            height={33.3333}
            rx={16.6667}
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PersonLogo
