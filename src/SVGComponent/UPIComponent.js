import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UPIComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.644 20.203L22.518 8l-6.806 24 12.932-11.797z"
        fill="#097939"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.288 20.203L18.163 8l-6.807 24 12.932-11.797z"
        fill="#ED752E"
      />
    </Svg>
  )
}

export default UPIComponent
