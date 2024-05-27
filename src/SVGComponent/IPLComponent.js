import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function IPLComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.416667}
        y={0.416667}
        width={39.1667}
        height={39.1667}
        rx={19.5833}
        fill="#fff"
      />
      <Rect
        x={0.416667}
        y={0.416667}
        width={39.1667}
        height={39.1667}
        rx={19.5833}
        stroke="#EEE"
        strokeWidth={0.833333}
      />
      <G clipPath="url(#clip0_3984_7599)">
        <Path
          d="M24.217 14.076c.402 4.231.528 8.435 0 12.573h7.611L32 24.724c-1.13.28-2.418.473-3.92.381-.588-3.676-.221-7.352-.006-11.029h-3.857zM19.726 14l-5.684.076c.49 4.102.468 8.32.175 12.573h3.85c-.353-1.99-.471-3.736-.315-5.762 2.456.746 5.692-.38 5.692-3.444S21.968 14.215 19.726 14zm-1.659 1.404c1.72.117 1.989 1.036 1.989 2.373 0 1.337-.733 2.263-1.989 2.373v-4.746zM9 14.078h3.851c-.41 4.24-.335 8.421 0 12.569H9c.41-4.292.335-8.463 0-12.569z"
          fill="#00237D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3984_7599">
          <Path
            fill="#fff"
            transform="translate(9 14)"
            d="M0 0H23V12.6491H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IPLComponent
