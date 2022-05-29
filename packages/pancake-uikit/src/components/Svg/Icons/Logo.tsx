import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  var isDark : boolean;
isDark = false;
  return (
    <Svg viewBox="0 0 35 35" {...props}>
         <image width="35" height="35" href={isDark ? 'images/Lazermoon-Arrows.webp' : 'images/Lazermoon-Arrows.webp'}/>
    </Svg>
  );
};

export default Icon;
