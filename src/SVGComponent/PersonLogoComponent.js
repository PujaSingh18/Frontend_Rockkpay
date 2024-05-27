import * as React from "react"
import Svg, {
    Circle,
    ClipPath,
    Defs,
    G,
    LinearGradient,
    Mask,
    Path,
    Stop
} from "react-native-svg"

function PersonLogoComponent(props) {
  return (
    <Svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={32} cy={32} r={32} fill="#4D444C" />
      <G clipPath="url(#clip0_3762_17326)">
        <G clipPath="url(#clip1_3762_17326)">
          <G clipPath="url(#clip2_3762_17326)">
            <Mask
              id="a"
              style={{
                maskType: "alpha"
              }}
              maskUnits="userSpaceOnUse"
              x={17}
              y={17}
              width={30}
              height={30}
            >
              <Path
                d="M32 32a7.217 7.217 0 007.219-7.218A7.217 7.217 0 0032 17.562a7.217 7.217 0 00-7.219 7.22A7.217 7.217 0 0032 32zm0 3.61c-4.819 0-14.438 2.418-14.438 7.218v1.805a1.81 1.81 0 001.805 1.805h25.266a1.81 1.81 0 001.804-1.805v-1.805c0-4.8-9.618-7.218-14.437-7.218z"
                fill="url(#paint0_linear_3762_17326)"
              />
            </Mask>
            <G clipPath="url(#clip3_3762_17326)" mask="url(#a)">
              <Path
                transform="translate(17.563 17.563)"
                fill="#559AFF"
                d="M0 0H28.875V28.875H0z"
              />
              <Mask
                id="b"
                style={{
                  maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={17}
                y={17}
                width={30}
                height={30}
              >
                <Path
                  fill="url(#paint1_linear_3762_17326)"
                  d="M17.5625 17.5627H46.4375V46.4377H17.5625z"
                />
              </Mask>
              <G mask="url(#b)">
                <Path
                  fill="#F774B9"
                  d="M17.5625 17.5627H46.4375V46.4377H17.5625z"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_3762_17326"
          x1={17.5625}
          y1={17.5627}
          x2={46.4375}
          y2={41.6252}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFA8FF" />
          <Stop offset={1} stopColor="#FF8B5E" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3762_17326"
          x1={46.3177}
          y1={17.5627}
          x2={28.6568}
          y2={52.1094}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_3762_17326">
          <Path
            fill="#fff"
            transform="translate(10.667 10.667)"
            d="M0 0H42.6667V42.6667H0z"
          />
        </ClipPath>
        <ClipPath id="clip1_3762_17326">
          <Path fill="#fff" transform="translate(11 11)" d="M0 0H42V42H0z" />
        </ClipPath>
        <ClipPath id="clip2_3762_17326">
          <Path fill="#fff" transform="translate(11 11)" d="M0 0H42V42H0z" />
        </ClipPath>
        <ClipPath id="clip3_3762_17326">
          <Path
            fill="#fff"
            transform="translate(17.563 17.563)"
            d="M0 0H28.875V28.875H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PersonLogoComponent
