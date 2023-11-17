import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title?: string;
}
function Card({ children, ...props }: Props) {
  return (
    <div
      className="border-r-gray-900 border-b-gray-900 border-t-white border-l-white border-2 bg-primary rounded-sm p-1 text-xl"
      {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, ...props }: Props) {
  return (
    <div className="bg-sky-400 p-1 relative mb-4" {...props}>
      <div className="text-white-">{children}</div>
      <button
        className="border-r-gray-900 border-b-gray-900 border-t-white border-l-white border-2
			  hover:bg-[#c3c0c5]
			  active:border-l-gray-900 active:border-t-gray-900 active:border-b-white active:border-r-white
	  absolute right-1 top-1/2 -translate-y-1/2 h-5 w-5 bg-primary">
        <div className="absolute -top-1/2 left-0.5">&times;</div>
      </button>
      <button
        className="border-r-gray-900 border-b-gray-900 border-t-white border-l-white border-2
			  hover:bg-[#c3c0c5]
			  active:border-l-gray-900 active:border-t-gray-900 active:border-b-white active:border-r-white
	  absolute right-7 top-1/2 -translate-y-1/2 h-5 w-5 bg-primary">
        <div className="absolute -top-2.5 left-1">_</div>
      </button>
    </div>
  );
}

function Section({ children, title, ...props }: Props) {
  return (
    <div
      className="border border-neutral-200 outline outline-1 outline-stone-500 relative m-2 p-3"
      {...props}>
      <div className="absolute -top-[0.05rem] -translate-y-1/2 left-4 text-xs bg-primary px-0.5">
        {title}
      </div>
      {children}
    </div>
  );
}

export { Card, CardHeader, Section };
