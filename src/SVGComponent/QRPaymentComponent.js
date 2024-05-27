import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QRPaymentComponent(props) {
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
        d="M20.875 28.563v-1.875h1.875v1.875h-1.875zM19 26.688v-4.75h1.875v4.75H19zm7.625-2.875v-3.75H28.5v3.75h-1.875zm-1.875-3.75v-1.875h1.875v1.875H24.75zm-11.375 1.875v-1.875h1.875v1.875h-1.875zM11.5 20.063v-1.875h1.875v1.875H11.5zm8.5-6.625v-1.876h1.875v1.876H20zm-7.125 2.374h2.875v-2.874h-2.875v2.874zM11.5 17.189v-5.625h5.625v5.624H11.5zm1.375 10h2.875v-2.875h-2.875v2.875zM11.5 28.563v-5.625h5.625v5.625H11.5zm12.75-12.75h2.875v-2.876H24.25v2.876zm-1.375 1.374v-5.625H28.5v5.626h-5.625zm1.875 11.375v-2.875h-1.875v-1.875h3.75v2.875H28.5v1.875h-3.75zm-3.875-6.625v-1.875h3.875v1.875h-3.875zm-3.75 0v-1.875H15.25v-1.875h5.625v1.875H19v1.875h-1.875zm1-4.75v-3.75H20v1.876h1.875v1.874h-3.75zm-4.5-2.125v-1.374H15v1.374h-1.375zm0 11.376v-1.375H15v1.375h-1.375zM25 15.063v-1.376h1.375v1.376H25z"
        fill="#A9315C"
      />
    </Svg>
  )
}

export default QRPaymentComponent
