import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
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
        d="M5 17v-7h2v7H5zm6 0v-7h2v7h-2zm-9 4v-2h20v2H2zm15-4v-7h2v7h-2zM2 8V6l10-5 10 5v2H2zm4.45-2h11.1L12 3.25 6.45 6z"
        fill="white"
      />
    </Svg>
  )
}

export default Home
