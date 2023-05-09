import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgCharts = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m23 6-9.5 9.5-5-5L1 18"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 6h6v6"
    />
  </Svg>
)
export default SvgCharts