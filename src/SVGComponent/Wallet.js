import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Wallet(props) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.375 4.5l.563-.563H13.5l.563.563v1.125h.562l.563.563v7.875l-.563.562H3.937l-.562-.563V4.5zm10.688 7.313h-2.25a1.688 1.688 0 010-3.376h2.25V6.75H4.5v6.75h9.563v-1.688zm-1.126-6.75v.562H4.5v-.563h8.438zm-1.687 5.062c0-.31.252-.563.563-.563h2.25v1.126h-2.25a.563.563 0 01-.563-.563z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Wallet
