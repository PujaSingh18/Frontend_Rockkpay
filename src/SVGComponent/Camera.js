import * as React from "react"
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg"

function Camera(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_10_5)" d="M0 0H128V128H0z" />
      <Defs>
        <Pattern
          id="pattern0_10_5"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_10_5" transform="scale(.00781)" />
        </Pattern>
        <Image
          id="image0_10_5"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default Camera
