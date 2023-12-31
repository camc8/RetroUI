import { ReactNode } from "react";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="m-2 border-r-gray-900 border-b-gray-900 border-t-white border-l-white border-2 bg-[#AAA8AB] py-1.5 px-8 text-xl rounded-sm
        hover:bg-[#c3c0c5]
      active:border-l-gray-900 active:border-t-gray-900 active:border-b-white active:border-r-white"
      {...props}>
      {children}
    </button>
  );
}

export default Button;
