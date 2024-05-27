import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackComponent(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 3.332a.833.833 0 00-.834.834v9.308L5.6 9.407a.834.834 0 10-1.18 1.18l5.373 5.371a1 1 0 001.414 0l5.372-5.371a.831.831 0 00-1.175-1.176l-4.071 4.063V4.166a.833.833 0 00-.833-.834z"
        fill="white"
      />
    </Svg>
  )
}

export default BackComponent
