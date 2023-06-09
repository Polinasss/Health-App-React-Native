import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const SvgDiary = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3Z"
    />
  </Svg>
);
