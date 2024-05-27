import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TermComponent(props) {
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
        d="M8.001 17.996h8v-2h-8v2zm0-4h8v-2h-8v2zm-2 8c-.55 0-1.02-.196-1.413-.587a1.926 1.926 0 01-.587-1.413v-16c0-.55.196-1.02.587-1.412a1.926 1.926 0 011.413-.588h8l6 6v12c0 .55-.196 1.02-.588 1.413a1.926 1.926 0 01-1.412.587h-12zm7-13v-5h-7v16h12v-11h-5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default TermComponent
