import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6L10 6z" fill="black" />
    </Svg>
  )
}

export default Back
