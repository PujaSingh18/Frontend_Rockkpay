import * as React from "react"
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg"

function UPBackground(props) {
  return (
    <Svg
      width={128}
      height={128}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_22_15)" d="M0 0H128V128H0z" />
      <Defs>
        <Pattern
          id="pattern0_22_15"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_22_15" transform="scale(.00781)" />
        </Pattern>
        <Image
          id="image0_22_15"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAG/0lEQVR4Ae2dW2gkRRSGe9f1Lt4QFY0aMU9R4uIgMRuN3V3/P6IRRCH4oCDewEV9EdEHwbvoq7cHUVEEFRUUxBfBy6qvXhBXVlBBRfGyCq6g4nXdo/MwhmynO0l1V039gYHOVE2dOt9/unumuupUlulPBERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABCIisL4oipOdcxcDuKPf7z8E4El72THJ251zFznnprIsWx+RX+pqBYENAOZJPk3y+36/v7POi+R2C4yiKM7JsmxDRfsqCpHA2NjYvgCuJfl5HcGr6gD4zDl39fj4+D4h+qo+LSJQFIUD8FGVqCspI/np4IqwyKL+DYKAnaEk712JuE0+A+CJXq+3XxBOqxP/Ecjz/EiS7zYRcpV1356enj5C/AMgUJblcQA+WaWgtb4cDtswmwCODQBBul3o9XqHkdw2LEybxyQ/3rRp0+HpKtCt5/YT7802BV/KFoDXFxYW9ugWRYLWAdy5lCBdvOecuy1BCbpzOc/zk0j+3oXYS9kk+cdgBLE7KClZJvnGUkJ0+R7JV1PSoDNfAeRdCl1l2zl3RmdgUjEM4KUqEbosI/liKjp04qcNvtj9tkuRq2xb3zRA5DE0AFxTJUAIZQA2e0SQdtMAXghB5Ko+kHwubZU8ek/yuyr4IZSR/MYjgnSbtmHfEASu04eZmZlD01XKk+dFUUzXgR9CHefcqZ4wpNtsURRnhSBunT4455iuUp48L8vy/DrwQ6hjffWEId1mbXJnCOLW6UNZlmenq5Qnz8uynKsDP4Q6AE73hCHdZvM8Hw9B3Dp9mJubOyZdpfx5vp7kL3UE6LIOyZ+zLFvnD0PCLZN8q0tx69gmuSVhify6bsu36ojQZR0At/ilkHDr/X6/16W4dWzb+sOEJfLvOskP6gjRRR2SW/0TSNzCroctV3Uhbh2bZVlekbg8/t2fmJjYm+SXdQRps44tRF1YWNjLPwFZyGyNf5vi1rHlnLtQ0rRHYB3JV+oI00Ydki+357os/UvA5t4B+LoNgatskPx2dnb2KMnSAYGiKM4k+WuVQD7LzLamgncg/LBJABd0MVPYbOqx77ASHR475861MXifZ/tw22bLHk936LJMLyZgo4SWxmVYKB/HtiS8LMtTFtvX/wEQAHAQgEdJ/r3W4pP8i+TD09PTBwbgqrpQRcA5NwPgtbUKAvvJaZNSq2yqLEACeZ6fNrgi7GgaDCR/JPmIhA9Q2KZdsgxizrnCHieTfB7AhyR/IPnb4GXHW63Mkj3YCmQbcm5qR/VFQAREQAREQAREQAREQAQ8E1hnmTqdc7Bs3s65ewA8SPIxks96elnbD5itgU0oW6hnlYebH6SF3TwQN5hcAZa3AMAzNl3N+jjcZx2vksDk5OQBAC6z+fY+hnibDhAtV38wZLwFwKXW91W6n+7Hbcx91/P2G5vs9LGcOG2Xk9xhtwsljGgQx71eb0/n3A0AfmpbMF/2LBAAXG++NUCRXlVbAWzDtL6E6LpdW9OglcNLxLVl2wZwK8k/uxbJt337HmO3BWUYHwSC5du3lOu+wYfWvuUWtsRXS5wP6bw1+Fm35hs8hSb27vpju46UZXlCOooPeVoUxYkkv9odnFTet1VOzrnJITSjf2gZNEh+kYrIy/lpJ4JlQBl95bMss/uej339loMcenkq+w9ZmpdglnSFFhQjv/9QDBk+ug6KXT8Tbx7JW4EtobJx8q4Bh27fxkKKopgdtSCwLd7eDx1+KP2zCaojNWxsD3VCgRtLP5xz143EVWB+fv6QUXqw01YA2bqEjRs3Hhx9EFjatLagjZodADdFHQA2IcIWYIyaMG35Q3L71NTU/tEGgXPu8rZgjaod59wl0QaATeMaVWHa8ssGzqIMAHvSF8McvraEXKkdGzvJ83wsuiCw/fNW6rQ+1985zADAldEFgE3dHnZCx/8XtQkPkk/FFgCWxy+YeftNYIdYd7AXYTx7ENhqmRBBxtynmZmZo6O5Cti2aTHDDrHvZVmW0QRADJs8hyhyVZ+i2pQawN1Vzqis+RdCkndFcwWwFbQSubnIVcwA3BdTADxe5YzKmgeHLXuPKQA0BtBvLnLViWHjKgqANYZaBTy0MgVAwuJbMCoAFAC6BYR2WW6zP1FdASxfTptwUrBlTKP5Egjg/hREadPHqMYBbCuVNuGkYAvAedFcASz7Bcn3UhCmDR8BvBNdRpG5ubnjLQFCG4BG2YatGo526bht4TLI0b/N8vKPslBr6dtgD4NttneBtqiJ5sanjoqACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIhAMAT+AQlUMY9S/tCgAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default UPBackground
