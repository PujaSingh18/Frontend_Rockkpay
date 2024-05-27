import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.167 17.5c-.459 0-.851-.163-1.177-.49a1.605 1.605 0 01-.49-1.177V4.167c0-.459.163-.851.49-1.177.326-.327.718-.49 1.177-.49H10v1.667H4.167v11.666H10V17.5H4.167zm9.166-3.333l-1.146-1.209 2.126-2.125H7.5V9.167h6.813l-2.126-2.125 1.146-1.209L17.5 10l-4.167 4.167z"
        fill="red"
      />
    </Svg>
  )
}

export default LogoutComponent
