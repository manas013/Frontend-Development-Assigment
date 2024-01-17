import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium12Bluegray300: "font-inter font-medium",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold14: "font-bold font-inter",
  txtInterSemiBold14Indigo800: "font-inter font-semibold",
  txtInterMedium10: "font-inter font-medium",
  txtInterMedium12Lightblue700: "font-inter font-medium",
  txtInterMedium12GreenA700: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
