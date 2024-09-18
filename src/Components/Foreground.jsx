import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
   const parent =  useRef()
  var arr = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, tempora?",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Show More", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel.",
      fileSize: "0.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now"},
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae!",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={parent} className="w-full h-screen flex gap-5 fixed top-0 left-0 p-5 z-[3]">
      {arr.map((elem, idx) => (
        <Cards key={idx} refer={parent} data={elem} />
      ))}
    </div>
  );
};

export default Foreground;
