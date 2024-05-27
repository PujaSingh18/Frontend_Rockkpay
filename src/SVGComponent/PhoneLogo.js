import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PhoneLogo(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7c0-1.886 0-2.828.586-3.414C7.172 3 8.114 3 10 3h4c1.886 0 2.828 0 3.414.586C18 4.172 18 5.114 18 7v10c0 1.886 0 2.828-.586 3.414C16.828 21 15.886 21 14 21h-4c-1.886 0-2.828 0-3.414-.586C6 19.828 6 18.886 6 17V7zm3.5-2a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM12 19a1 1 0 100-2 1 1 0 000 2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default PhoneLogo
