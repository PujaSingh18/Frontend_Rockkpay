import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconComponent(props) {
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
        d="M22.76 21.27L28.49 27 27 28.49l-5.73-5.73C20.2 23.53 18.91 24 17.5 24a6.5 6.5 0 116.5-6.5c0 1.41-.47 2.7-1.24 3.77zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z"
        fill="black"
      />
    </Svg>
  )
}

export default IconComponent
