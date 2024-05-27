import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function FlashComponent(props) {
  return (
    <Svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G strokeWidth={5.11675} strokeLinecap="round">
        <Path
          d="M39.655 5.117H20.467l-7.675 29.421h10.234l-5.117 21.746 33.259-35.817h-15.35l3.837-15.35z"
          fill="#5CE1E6"
          stroke="#213063"
          strokeLinejoin="round"
        />
        <Path d="M26.863 14.073l-2.558 10.233" stroke="#fff" />
      </G>
    </Svg>
  )
}

export default FlashComponent
