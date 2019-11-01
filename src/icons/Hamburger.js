import React from "react";

const SvgHamburger = props => (
  <svg width={43} height={23} fill="none" {...props}>
    <path stroke="#fff" strokeWidth={3} d="M0 1.5h43M0 11.5h28M0 21.5h16" />
  </svg>
);

export default SvgHamburger;
