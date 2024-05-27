import * as React from "react"
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg"

function CheckBalance(props) {
  return (
    <Svg
      width={48}
      height={92}
      viewBox="0 0 48 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        width={48}
        height={48}
        rx={24}
        fill="url(#paint0_linear_3897_6391)"
      />
      <Path
        d="M16.751 33.063c-.55 0-1.02-.196-1.413-.588a1.926 1.926 0 01-.587-1.413v-14c0-.55.196-1.02.588-1.412a1.926 1.926 0 011.412-.588h14c.55 0 1.02.196 1.412.588.392.392.588.862.588 1.412v2.5h-2v-2.5h-14v14h14v-2.5h2v2.5c0 .55-.196 1.021-.587 1.413a1.926 1.926 0 01-1.413.587h-14zm8-4c-.55 0-1.02-.196-1.413-.588a1.926 1.926 0 01-.587-1.413v-6c0-.55.196-1.02.587-1.412a1.926 1.926 0 011.413-.587h7c.55 0 1.02.195 1.412.587.392.392.588.863.588 1.413v6c0 .55-.196 1.02-.587 1.412a1.926 1.926 0 01-1.413.587h-7zm7-2v-6h-7v6h7zm-4-1.5c.417 0 .77-.146 1.063-.438.291-.292.437-.646.437-1.063 0-.416-.146-.77-.438-1.062a1.447 1.447 0 00-1.062-.438c-.417 0-.77.146-1.063.438a1.446 1.446 0 00-.437 1.063c0 .416.146.77.438 1.062.291.292.645.438 1.062.438zM7.06 61.8c0-.632.108-1.208.324-1.728.216-.528.516-.98.9-1.356a4.05 4.05 0 011.332-.888 4.358 4.358 0 011.656-.312c.84 0 1.588.196 2.244.588.664.392 1.168.956 1.512 1.692l-.96.348a2.692 2.692 0 00-.732-.912 3.077 3.077 0 00-.972-.516 3.503 3.503 0 00-1.068-.168c-.568 0-1.084.132-1.548.396-.456.264-.816.64-1.08 1.128-.256.488-.384 1.064-.384 1.728 0 .656.128 1.228.384 1.716.264.488.624.868 1.08 1.14.464.264.98.396 1.548.396.368 0 .732-.06 1.092-.18.36-.12.696-.312 1.008-.576.312-.272.568-.624.768-1.056l.96.336c-.36.848-.876 1.48-1.548 1.896-.672.408-1.44.612-2.304.612a4.358 4.358 0 01-1.656-.312 4.05 4.05 0 01-1.332-.888 4.143 4.143 0 01-.9-1.356A4.52 4.52 0 017.06 61.8zm9.308-4.44h1.128v3.3c.192-.232.44-.412.744-.54a2.44 2.44 0 011.008-.204c.448 0 .84.1 1.176.3.344.192.612.484.804.876.192.384.288.864.288 1.44V66h-1.188v-3.324c0-.56-.116-.988-.348-1.284-.232-.296-.572-.444-1.02-.444-.464 0-.824.152-1.08.456-.256.304-.384.748-.384 1.332V66h-1.128v-8.64zm9.149 8.724c-.576 0-1.088-.132-1.536-.396a2.923 2.923 0 01-1.044-1.116c-.248-.472-.372-1.012-.372-1.62 0-.584.124-1.104.372-1.56a2.82 2.82 0 011.02-1.08c.44-.264.936-.396 1.488-.396.56 0 1.056.124 1.488.372.432.24.768.58 1.008 1.02.24.432.356.932.348 1.5 0 .096-.004.196-.012.3-.008.096-.02.204-.036.324H23.8c.024.32.112.604.264.852.16.24.36.428.6.564.248.136.528.204.84.204.4 0 .748-.076 1.044-.228.296-.16.504-.372.624-.636l.984.348c-.24.488-.592.868-1.056 1.14-.456.272-.984.408-1.584.408zm1.536-3.624c0-.288-.072-.548-.216-.78a1.473 1.473 0 00-.588-.54 1.626 1.626 0 00-.816-.204c-.272 0-.524.068-.756.204a1.758 1.758 0 00-.864 1.32h3.24zm4.95 3.624c-.576 0-1.084-.128-1.524-.384a2.79 2.79 0 01-1.032-1.08c-.24-.456-.36-.988-.36-1.596 0-.616.123-1.156.372-1.62a2.77 2.77 0 011.032-1.092c.44-.264.951-.396 1.535-.396.616 0 1.156.144 1.62.432.472.288.813.676 1.02 1.164l-1.02.36a1.416 1.416 0 00-.611-.672 1.83 1.83 0 00-.96-.252c-.369 0-.685.088-.949.264a1.645 1.645 0 00-.611.72c-.145.304-.216.664-.216 1.08 0 .624.16 1.12.48 1.488.32.368.752.552 1.296.552.36 0 .68-.08.96-.24.288-.16.504-.38.648-.66l1.008.36c-.224.48-.577.864-1.056 1.152-.48.28-1.024.42-1.633.42zm3.824-8.724h1.14v5.148h.492L39.703 60h1.536l-2.784 3 2.796 3h-1.548l-2.244-2.52h-.492V66h-1.14v-8.64zM8.875 79.928c0-.408-.136-.728-.408-.96-.264-.24-.648-.36-1.152-.36H5.06v2.628h2.268c.488 0 .868-.116 1.14-.348.272-.232.408-.552.408-.96zM3.86 86v-8.4h3.564c.592 0 1.084.1 1.476.3.392.2.684.464.876.792.2.328.3.692.3 1.092 0 .376-.072.692-.216.948-.136.256-.32.46-.552.612-.224.152-.48.26-.768.324v.084c.344.048.644.152.9.312.264.152.468.368.612.648.152.28.228.628.228 1.044 0 .416-.108.796-.324 1.14a2.232 2.232 0 01-.936.816c-.4.192-.888.288-1.464.288H3.86zm1.2-1.008h2.388c.512 0 .912-.116 1.2-.348.296-.24.444-.58.444-1.02 0-.448-.156-.788-.468-1.02-.304-.24-.708-.36-1.212-.36H5.06v2.748zM15.188 86l-.096-.876a1.97 1.97 0 01-.72.708c-.288.16-.664.24-1.128.24-.432 0-.8-.068-1.104-.204a1.721 1.721 0 01-.708-.588 1.64 1.64 0 01-.24-.888c0-.504.188-.92.564-1.248.376-.336.92-.544 1.632-.624l1.704-.192v-.468a.818.818 0 00-.312-.648c-.208-.184-.508-.276-.9-.276-.368 0-.68.088-.936.264-.256.168-.428.42-.516.756l-1.008-.36a2.16 2.16 0 01.888-1.236c.448-.296.988-.444 1.62-.444.752 0 1.324.188 1.716.564.392.376.588.872.588 1.488V86h-1.044zm-.096-2.748l-1.644.204c-.352.048-.616.148-.792.3a.706.706 0 00-.264.576.73.73 0 00.252.564c.176.144.42.216.732.216.384 0 .704-.072.96-.216.256-.144.444-.344.564-.6.128-.264.192-.568.192-.912v-.132zm2.524-5.892h1.128V86h-1.128v-8.64zM23.883 86l-.096-.876a1.97 1.97 0 01-.72.708c-.288.16-.664.24-1.128.24-.432 0-.8-.068-1.104-.204a1.721 1.721 0 01-.708-.588 1.64 1.64 0 01-.24-.888c0-.504.188-.92.564-1.248.376-.336.92-.544 1.632-.624l1.704-.192v-.468a.818.818 0 00-.312-.648c-.208-.184-.508-.276-.9-.276-.368 0-.68.088-.936.264-.256.168-.428.42-.516.756l-1.008-.36a2.16 2.16 0 01.888-1.236c.448-.296.988-.444 1.62-.444.752 0 1.324.188 1.716.564.392.376.588.872.588 1.488V86h-1.044zm-.096-2.748l-1.644.204c-.352.048-.616.148-.792.3a.706.706 0 00-.264.576.73.73 0 00.252.564c.176.144.42.216.732.216.384 0 .704-.072.96-.216.256-.144.444-.344.564-.6.128-.264.192-.568.192-.912v-.132zM26.311 80h1.032l.073.696c.192-.248.436-.44.732-.576.296-.136.623-.204.983-.204.465 0 .864.1 1.2.3.345.192.608.48.793.864.192.384.288.864.288 1.44V86h-1.128v-3.336c0-.56-.12-.984-.36-1.272-.232-.296-.572-.444-1.02-.444-.465 0-.825.152-1.08.456-.257.296-.385.736-.385 1.32V86h-1.128v-6zm9.055 6.084c-.576 0-1.084-.128-1.524-.384a2.79 2.79 0 01-1.032-1.08c-.24-.456-.36-.988-.36-1.596 0-.616.124-1.156.372-1.62a2.77 2.77 0 011.032-1.092c.44-.264.952-.396 1.536-.396.616 0 1.156.144 1.62.432.472.288.812.676 1.02 1.164l-1.02.36a1.416 1.416 0 00-.612-.672 1.83 1.83 0 00-.96-.252c-.368 0-.684.088-.948.264a1.645 1.645 0 00-.612.72c-.144.304-.216.664-.216 1.08 0 .624.16 1.12.48 1.488.32.368.752.552 1.296.552.36 0 .68-.08.96-.24.288-.16.504-.38.648-.66l1.008.36c-.224.48-.576.864-1.056 1.152-.48.28-1.024.42-1.632.42zm6.429 0c-.576 0-1.088-.132-1.536-.396a2.923 2.923 0 01-1.044-1.116c-.248-.472-.372-1.012-.372-1.62 0-.584.124-1.104.372-1.56a2.82 2.82 0 011.02-1.08c.44-.264.936-.396 1.488-.396.56 0 1.056.124 1.488.372.432.24.768.58 1.008 1.02.24.432.356.932.348 1.5 0 .096-.004.196-.012.3-.008.096-.02.204-.036.324h-4.44c.024.32.112.604.264.852.16.24.36.428.6.564.248.136.528.204.84.204.4 0 .748-.076 1.044-.228.296-.16.504-.372.624-.636l.984.348c-.24.488-.592.868-1.056 1.14-.456.272-.984.408-1.584.408zm1.536-3.624c0-.288-.072-.548-.216-.78a1.473 1.473 0 00-.588-.54 1.626 1.626 0 00-.816-.204c-.272 0-.524.068-.756.204a1.758 1.758 0 00-.864 1.32h3.24z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3897_6391"
          x1={24}
          y1={0}
          x2={24}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A63B27" />
          <Stop offset={1} stopColor="#D17EA4" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CheckBalance