import * as React from "react"
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SplashComponent(props) {
  return (
    <Svg
      width={360}
      height={800}
      viewBox="0 0 360 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_942_3141)">
        <Path fill="#00031A" d="M0 0H360V800H0z" />
        <G filter="url(#filter0_f_942_3141)">
          <Ellipse cx={269} cy={343.5} rx={73} ry={37.5} fill="#0024DF" />
        </G>
        <G filter="url(#filter1_f_942_3141)">
          <Circle cx={268.5} cy={672.5} r={145.5} fill="#002FD7" />
        </G>
        <G filter="url(#filter2_f_942_3141)">
          <Circle cx={100} cy={725} r={172} fill="#30425D" />
        </G>
        <G filter="url(#filter3_f_942_3141)">
          <Ellipse
            cx={218.802}
            cy={799.638}
            rx={138.745}
            ry={133.498}
            transform="rotate(-.89 218.802 799.638)"
            fill="#430054"
          />
        </G>
        <Circle
          cx={316}
          cy={39}
          r={134.5}
          stroke="url(#paint0_linear_942_3141)"
          strokeWidth={3}
        />
        <Circle
          cx={56.5}
          cy={174.5}
          r={80}
          stroke="url(#paint1_linear_942_3141)"
          strokeWidth={3}
        />
        <G filter="url(#filter4_f_942_3141)">
          <Ellipse cx={182} cy={809.5} rx={128} ry={87.5} fill="#fff" />
        </G>
        <G filter="url(#filter5_f_942_3141)">
          <Ellipse cx={324} cy={31.5} rx={87} ry={79.5} fill="#04208B" />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_942_3141"
          x1={153.5}
          y1={-2}
          x2={394.5}
          y2={198.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.151716} stopColor="#3F004E" />
          <Stop offset={0.383002} stopColor="#fff" />
          <Stop offset={0.735945} stopColor="#474747" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_942_3141"
          x1={128}
          y1={156.5}
          x2={-8.99999}
          y2={359}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.0219156} stopColor="#00031A" />
          <Stop offset={0.269628} stopColor="#2A0044" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <ClipPath id="clip0_942_3141">
          <Path fill="#fff" d="M0 0H360V800H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SplashComponent
