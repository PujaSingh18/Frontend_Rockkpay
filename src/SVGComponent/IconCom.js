import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function IconCom(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_993_5672)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.76 25.27L32.49 31 31 32.49l-5.73-5.73C24.2 27.53 22.91 28 21.5 28a6.5 6.5 0 116.5-6.5c0 1.41-.47 2.7-1.24 3.77zM21.5 17c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_993_5672">
          <Rect x={4} y={4} width={40} height={40} rx={20} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconCom
