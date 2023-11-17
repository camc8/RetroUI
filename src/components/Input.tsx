import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <label>
      {label}
      <input
        className="m-2 border-t-gray-900 border-l-gray-900 outline-gray-400 focus:outline-none border-2 bg-white rounded-sm"
        {...props}></input>
    </label>
  );
}

export default Input;
