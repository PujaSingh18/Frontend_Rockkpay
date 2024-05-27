import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Time(props) {
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
        d="M12 21c-2.3 0-4.304-.762-6.013-2.288C4.28 17.188 3.3 15.283 3.05 13H5.1c.233 1.733 1.004 3.167 2.313 4.3C8.72 18.433 10.25 19 12 19c1.95 0 3.604-.68 4.962-2.038C18.322 15.604 19 13.95 19 12c0-1.95-.68-3.604-2.038-4.963C15.604 5.68 13.95 5 12 5a6.75 6.75 0 00-3.225.8A7.431 7.431 0 006.25 8H9v2H3V4h2v2.35a8.732 8.732 0 013.113-2.475A8.93 8.93 0 0112 3c1.25 0 2.42.237 3.512.712a9.147 9.147 0 012.85 1.925 9.149 9.149 0 011.926 2.85A8.707 8.707 0 0121 12c0 1.25-.238 2.42-.712 3.512a9.148 9.148 0 01-1.925 2.85 9.148 9.148 0 01-2.85 1.926A8.707 8.707 0 0112 21zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2-1.4 1.4z"
        fill="white"
      />
    </Svg>
  )
}

export default Time
