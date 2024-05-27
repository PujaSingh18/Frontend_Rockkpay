import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusComponent(props) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 2v12m6-6h-12"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PlusComponent
