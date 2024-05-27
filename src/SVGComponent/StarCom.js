import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function StarCom(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={6} fill="#6633CC" />
      <G clipPath="url(#clip0_3634_6791)">
        <Path
          d="M11.67 24.177h16.666v1.667H11.669v-1.667zm.958-3.375l.708-1.233.708 1.233 1.084-.625-.709-1.233h1.417v-1.25h-1.417l.709-1.225-1.084-.625-.708 1.225-.708-1.225-1.084.625.709 1.225h-1.417v1.25h1.417l-.709 1.233 1.084.625zm5.583-.625l1.083.625.709-1.233.708 1.233 1.083-.625-.708-1.233h1.417v-1.25h-1.417l.708-1.225-1.083-.625-.708 1.225-.709-1.225-1.083.625.708 1.225h-1.416v1.25h1.416l-.708 1.233zm10.958-2.483h-1.416l.708-1.225-1.083-.625-.709 1.225-.708-1.225-1.083.625.708 1.225h-1.417v1.25h1.417l-.708 1.233 1.083.625.708-1.233.709 1.233 1.083-.625-.708-1.233h1.416v-1.25z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3634_6791">
          <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default StarCom
