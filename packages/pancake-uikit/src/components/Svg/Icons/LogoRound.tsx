import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  var isDark : boolean;
  isDark = false;
    return (
      <Svg viewBox="0 0 512 512" {...props}>
        <circle cx="256" cy="256" r="256" fill="url(#paint0_linear_logoround)" />
          <image width="256" height="256" href={isDark ? 'images/Lazermoon-Arrows.webp' : 'images/Lazermoon-Arrows.webp'}/>
      </Svg>
    );
  };

export default Icon;
