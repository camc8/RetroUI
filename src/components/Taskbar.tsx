import { ReactNode } from "react";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}
function Taskbar({ ...props }: Props) {
  return (
    <div className="fixed top-0 right-0 bg-black w-screen">
      <div
        className="border-b-zinc-500 border-x-0 border-t-0 border-2 bg-zinc-200 text-xl rounded-sm flex px-5 rounded-t-lg"
        {...props}>
        <div className="group relative px-2 hover:bg-zinc-300 cursor-pointer">
          File
          <div className="group-hover:block hidden absolute left-0 w-48 bg-zinc-300 border-r-gray-900 border-b-gray-900 border-t-zinc-200 border-l-white border-2 [&>div]:px-3 [&>div]:py-[0.75px] [&>*:hover]:bg-zinc-200">
            <div>New</div>
            <div>Open</div>
            <div>Close</div>
            <div>Save</div>
            <div>Save As...</div>
            <hr className="border-zinc-400 mx-auto w-[90%]" />
            <div>Exit</div>
          </div>
        </div>

        <div className="group relative px-2 hover:bg-zinc-300 cursor-pointer">
          Edit
          <div className="group-hover:block hidden absolute left-0 w-48 bg-zinc-300 border-r-gray-900 border-b-gray-900 border-t-zinc-200 border-l-white border-2 [&>div]:px-3 [&>div]:py-[0.75px] [&>*:hover]:bg-zinc-200">
            <div>Copy</div>
            <div>Cut</div>
            <div>Paste</div>
            <div>Delete</div>
          </div>
        </div>

        <div className="group relative px-2 hover:bg-zinc-300 cursor-pointer">
          View
          <div className="group-hover:block hidden absolute left-0 w-48 bg-zinc-300 border-r-gray-900 border-b-gray-900 border-t-zinc-200 border-l-white border-2 [&>div]:px-3 [&>div]:py-[0.75px] [&>*:hover]:bg-zinc-200">
            <div>Full Screen</div>
            <div>Minimize</div>
          </div>
        </div>
        {/* {children} */}
      </div>
    </div>
  );
}

export default Taskbar;
