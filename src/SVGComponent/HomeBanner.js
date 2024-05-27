import * as React from "react"
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg"
function HomeBanner(props) {
  return (
    <Svg
      width={360}
      height={324}
      viewBox="0 0 360 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M-99 -19H455.07399999999996V350.383H-99z"
      />
      <Path
        fill="#37003C"
        d="M37.21 140.296H318.40299999999996V191.0861H37.21z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_3911_6412" transform="scale(.00083 .00125)" />
        </Pattern>
        <Image
          id="image0_3911_6412"
          width={1200}
          height={800}
        />
      </Defs>
    </Svg>
  )
}
export default HomeBanner