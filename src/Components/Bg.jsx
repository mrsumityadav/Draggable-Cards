import React from "react";

function Bg() {
  return (
    <div className="w-full  h-screen pt-[0.01vw] z-[2] bg-[#0F1215] fixed top-0 left-0">
      <div className="title text-xl font-semibold text-gray-200 text-center py-10 my-10">
        Dragable Cards.
      </div>
      <h1 className="text-[13vw] tracking-tight font-semibold text-[white] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        Docs
      </h1>
    </div>
  );
}

export default Bg;
