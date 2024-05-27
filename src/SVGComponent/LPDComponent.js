import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function LPDComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12} width={40} height={40} rx={20} fill="#330066" />
      <Path
        d="M37.033 23.269H21.667a1 1 0 01-1-1V9a1 1 0 011-1h22a1 1 0 011 1v13.269a1 1 0 01-1 1h-2.269"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M34.288 19.266l-.365-.341-.88-.819-1.061-.986-.92-.856c-.15-.139-.296-.28-.448-.416l-.006-.007.147.357v-.288l-.503.503h.586c.201 0 .404.007.605-.002a2.645 2.645 0 002.235-1.402c.216-.414.332-.884.308-1.352a2.648 2.648 0 00-2.65-2.53h-1.339a.523.523 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147h1.271c.12 0 .238.003.355.018l-.133-.018c.189.025.373.075.549.149-.04-.018-.08-.035-.12-.05.172.073.333.167.48.28l-.1-.078c.142.112.27.24.382.383l-.079-.102c.114.148.208.309.282.48-.017-.04-.035-.08-.05-.12.073.177.123.361.148.55l-.018-.134c.024.185.024.373 0 .558l.018-.133a2.169 2.169 0 01-.149.549c.017-.04.035-.08.05-.12a2.215 2.215 0 01-.281.48l.079-.1c-.112.142-.24.27-.383.381l.102-.078a2.212 2.212 0 01-.48.281l.119-.05a2.17 2.17 0 01-.55.15l.134-.019c-.178.023-.358.018-.539.018H30.252a.51.51 0 00-.503.503v.28a.53.53 0 00.167.382l.193.179.842.782 1.116 1.039 1.006.935c.166.155.33.31.498.464l.007.006c.096.09.222.147.355.147.124 0 .271-.055.356-.147a.506.506 0 000-.712z"
        fill="white"
      />
      <Path
        d="M29.998 12.132h4.679c.216 0 .432.003.647 0h.01a.524.524 0 00.355-.147.508.508 0 000-.712.522.522 0 00-.356-.147h-4.678c-.216 0-.432-.003-.648 0h-.009a.524.524 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147zM29.998 14.273h4.679c.216 0 .432.003.647 0h.01a.524.524 0 00.355-.147.508.508 0 000-.712.522.522 0 00-.356-.147h-4.678c-.216 0-.432-.003-.648 0h-.009a.524.524 0 00-.356.147.508.508 0 000 .712c.099.09.22.147.356.147z"
        fill="white"
      />
      <Path
        d="M39.215 32a7.451 7.451 0 002.183-5.268V22.16A2.183 2.183 0 0039.215 20a2.17 2.17 0 00-2.183 2.183v3.268l-.228.115a3.543 3.543 0 00-1.954 3.166"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M28.302 26.697h-.75.75zm1.652 5.8a.75.75 0 001.06-1.062l-1.06 1.061zm-2.402-9.228v3.428h1.5V23.27h-1.5zm0 3.428c0 2.175.864 4.261 2.402 5.8l1.06-1.062a6.7 6.7 0 01-1.962-4.738h-1.5z"
        fill="white"
      />
      <Path
        //opacity={0.6}
        d="M26.41 59.08V60h-4.265v-.92h4.266zm-4.042-7.611V60h-1.131v-8.531h1.13zm4.479 5.431v-.134c0-.457.066-.881.199-1.272a3.02 3.02 0 01.574-1.025c.25-.293.553-.52.908-.68a2.819 2.819 0 011.195-.246c.446 0 .846.082 1.202.246.359.16.664.387.914.68.254.289.447.63.58 1.025.133.39.199.815.199 1.272v.134c0 .457-.066.881-.2 1.272-.132.39-.325.732-.58 1.025a2.66 2.66 0 01-.908.68c-.351.16-.75.24-1.195.24-.445 0-.846-.08-1.201-.24a2.72 2.72 0 01-.914-.68 3.098 3.098 0 01-.574-1.025c-.133-.39-.2-.815-.2-1.272zm1.083-.134v.134c0 .317.038.616.112.897.074.277.185.523.334.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.413-.295.562-.51a2.36 2.36 0 00.334-.738c.078-.281.117-.58.117-.897v-.134c0-.313-.039-.608-.117-.885a2.28 2.28 0 00-.34-.744 1.617 1.617 0 00-.562-.516 1.578 1.578 0 00-.786-.187c-.296 0-.558.062-.785.187-.222.125-.41.297-.562.516-.149.215-.26.463-.334.744a3.41 3.41 0 00-.112.885zm9.378 2.15v-3.264c0-.25-.051-.467-.153-.65a.997.997 0 00-.445-.434 1.614 1.614 0 00-.738-.152c-.274 0-.514.047-.721.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.084c0-.227.058-.451.175-.674.118-.222.285-.424.504-.603.223-.184.489-.328.797-.434.313-.11.66-.164 1.043-.164.461 0 .867.078 1.219.234.355.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.017.436.052.674.04.238.096.443.17.615V60h-1.13a2.022 2.022 0 01-.13-.498 4.011 4.011 0 01-.046-.586zm.187-2.76l.012.762H36.41c-.309 0-.584.025-.826.076-.242.047-.445.12-.61.217a1.03 1.03 0 00-.374.37.978.978 0 00-.13.509c0 .2.046.38.135.545.09.164.225.295.405.392.183.094.408.141.674.141.332 0 .625-.07.878-.211.254-.14.456-.313.604-.516.152-.203.234-.4.246-.591l.463.521a1.575 1.575 0 01-.223.545 2.607 2.607 0 01-1.2 1.025 2.328 2.328 0 01-.927.176c-.43 0-.806-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.264-.955c0-.34.066-.638.2-.896a1.73 1.73 0 01.573-.65c.25-.176.551-.31.903-.399.351-.09.744-.135 1.177-.135h1.26zm3.278-1.142V60h-1.084v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.349 2.349 0 011.858-.861c.312 0 .594.043.844.129.25.082.462.215.638.398.18.184.317.422.41.715.094.29.141.643.141 1.06V60h-1.09v-4.166c0-.332-.049-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.692-.14c-.269 0-.515.057-.738.17-.219.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.504 2.504 0 00-.128.809zM14.496 72.654h-2.279v-.92h2.28c.44 0 .798-.07 1.072-.21.273-.141.472-.337.597-.587a1.84 1.84 0 00.194-.855c0-.293-.065-.568-.194-.826a1.428 1.428 0 00-.597-.621c-.274-.16-.631-.24-1.073-.24h-2.015V76H11.35v-8.531h3.146c.645 0 1.19.111 1.635.334.445.222.783.531 1.014.925.23.391.346.838.346 1.342 0 .547-.116 1.014-.346 1.4a2.21 2.21 0 01-1.014.886c-.445.199-.99.298-1.635.298zm7.52 2.262v-3.264c0-.25-.05-.466-.152-.65a.996.996 0 00-.445-.434 1.613 1.613 0 00-.739-.152c-.273 0-.513.047-.72.14a1.255 1.255 0 00-.48.37.809.809 0 00-.17.492h-1.085c0-.227.059-.451.176-.674a1.97 1.97 0 01.504-.603c.223-.184.488-.329.797-.434.312-.11.66-.164 1.043-.164.46 0 .867.078 1.218.234.356.157.633.393.832.71.204.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.096.443.17.615V76h-1.131a2.022 2.022 0 01-.129-.498 4.011 4.011 0 01-.047-.586zm.188-2.76l.011.762H21.12c-.309 0-.584.025-.826.076a1.89 1.89 0 00-.61.217 1.03 1.03 0 00-.375.37.978.978 0 00-.129.509c0 .2.045.38.135.545a.98.98 0 00.404.392c.184.094.409.141.674.141.332 0 .625-.07.88-.211a1.83 1.83 0 00.603-.516c.152-.203.234-.4.246-.591l.463.521a1.575 1.575 0 01-.223.545 2.607 2.607 0 01-1.201 1.025 2.328 2.328 0 01-.926.176c-.43 0-.807-.084-1.13-.252a1.933 1.933 0 01-.75-.674 1.784 1.784 0 01-.265-.955c0-.34.067-.638.2-.896a1.73 1.73 0 01.574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26zm3.88 3.188l1.764-5.684h1.16l-2.542 7.319a4.019 4.019 0 01-.235.503 2.412 2.412 0 01-.363.522 1.73 1.73 0 01-.54.398 1.622 1.622 0 01-.743.159c-.086 0-.196-.012-.328-.036a3.179 3.179 0 01-.282-.058l-.006-.88c.032.005.08.009.147.013a1.744 1.744 0 00.773-.088.948.948 0 00.434-.323c.121-.148.225-.353.31-.615l.452-1.23zM24.79 69.66l1.646 4.922.282 1.143-.78.398-2.332-6.463h1.184zm5.867 1.26V76h-1.09v-6.34H30.6l.058 1.26zm-.222 1.67l-.504-.018a4.33 4.33 0 01.17-1.2c.109-.372.271-.694.486-.968.215-.273.482-.484.803-.632.32-.153.691-.229 1.113-.229.297 0 .57.043.82.129.25.082.467.213.65.392.184.18.327.41.428.692.102.281.153.621.153 1.02V76H33.47v-4.172c0-.332-.057-.597-.17-.797a.97.97 0 00-.469-.433 1.691 1.691 0 00-.715-.141c-.32 0-.588.057-.802.17-.215.113-.387.27-.516.469a2.11 2.11 0 00-.281.685 3.834 3.834 0 00-.082.809zm4.107-.598l-.727.223a3.19 3.19 0 01.17-1.002c.114-.32.276-.606.487-.856.215-.25.478-.447.79-.591.313-.149.67-.223 1.073-.223.34 0 .64.045.902.135.266.09.489.228.668.416.184.183.322.42.416.709.094.289.14.633.14 1.031V76h-1.089v-4.178c0-.355-.057-.63-.17-.826a.885.885 0 00-.469-.416 1.872 1.872 0 00-.714-.123c-.239 0-.45.041-.633.123a1.308 1.308 0 00-.463.34c-.125.14-.22.303-.287.486a1.806 1.806 0 00-.094.586zm7.783 4.125c-.441 0-.841-.074-1.2-.223a2.723 2.723 0 01-.92-.638 2.841 2.841 0 01-.587-.973 3.566 3.566 0 01-.205-1.23v-.246c0-.516.077-.975.229-1.377.152-.407.36-.75.62-1.032a2.66 2.66 0 01.892-.638 2.557 2.557 0 011.03-.217c.454 0 .845.078 1.173.234.332.157.603.375.814.657.211.277.367.605.469.984a4.7 4.7 0 01.152 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 00-.176-.82 1.474 1.474 0 00-.468-.657c-.215-.172-.508-.257-.88-.257a1.475 1.475 0 00-1.212.615 2.3 2.3 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.491.37.69.163.2.36.356.591.47.234.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.137.207-.31.404-.521.591a2.49 2.49 0 01-.78.457 3.017 3.017 0 01-1.084.176zm4.409-5.103V76H45.65v-6.34h1.025l.059 1.354zm-.258 1.576l-.451-.018c.004-.433.068-.834.193-1.2.125-.372.301-.694.527-.968a2.35 2.35 0 011.858-.861c.312 0 .594.043.844.129.25.082.463.215.638.398.18.184.317.422.41.715.094.29.141.643.141 1.06V76h-1.09v-4.166c0-.332-.048-.598-.146-.797a.9.9 0 00-.428-.44 1.535 1.535 0 00-.691-.14c-.27 0-.516.057-.739.17-.218.113-.408.27-.568.469-.156.199-.28.427-.37.685a2.507 2.507 0 00-.128.809zm8.053-2.93v.832H51.1v-.832h3.428zm-2.268-1.54h1.084v6.31c0 .214.034.377.1.486.066.11.152.182.258.217.105.035.218.053.34.053.09 0 .183-.008.28-.024.102-.02.179-.035.23-.047l.005.885c-.086.027-.199.053-.34.076a2.588 2.588 0 01-.498.041c-.265 0-.51-.053-.732-.158a1.179 1.179 0 01-.533-.527c-.13-.25-.194-.586-.194-1.008v-6.305z"
        fill="#000"
      />
    </Svg>
  )
}

export default LPDComponent
