import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SerachBar(props) {
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
        d="M23.103 21.57l5.13 5.13a1.084 1.084 0 01-1.533 1.533l-5.13-5.13c-1.102.792-2.43 1.276-3.88 1.276a6.69 6.69 0 116.69-6.69c0 1.452-.485 2.78-1.277 3.88zm-5.414-8.512a4.625 4.625 0 00-4.63 4.631 4.625 4.625 0 004.63 4.632 4.625 4.625 0 004.632-4.632 4.625 4.625 0 00-4.632-4.63z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SerachBar
