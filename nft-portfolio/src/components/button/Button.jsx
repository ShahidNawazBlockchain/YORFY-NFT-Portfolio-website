import React from "react";
export default function Buttons({ text, padding }) {
  return (
    <div className="w-[115px] h-10 px-8 py-2 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
      <button
        type="button"
        class={`text-white text-sm font-semibold font-['Poppins'] leading-normal ${padding} `}
      >
        {text}
      </button>
    </div>
  );
}
