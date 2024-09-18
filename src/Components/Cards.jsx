import React from "react";
import { motion } from "framer-motion";

const Cards = ({ data, refer }) => {
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.1 }}
      //   dragElastic={2}
      className="w-60 relative overflow-hidden h-72 rounded-[2vw] px-8 py-10 bg-[#1A191C]"
    >
      <div className="up text-white">
        <i className="ri-save-3-fill text-[1.2vw]"></i>
        <p className="text-sm font-semibold mt-2 tracking-tight leading-tight">
          {data.desc}
        </p>
      </div>
      <div className="btm w-full absolute bottom-0 left-0">
        <div
          className={`dets px-8 flex mb-5 items-center justify-between text-white`}
        >
          <h3 className="text-[1.2vw]'">{data.fileSize}</h3>
          <span className="w-6 h-6 bg-[#54535A] rounded-full flex items-center justify-center cursor-wait">
            {data.close ? (
              <i className="ri-close-large-line text-xs"></i>
            ) : (
              <i className="ri-download-fill text-xs"></i>
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`download w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } text-white`}
          >
            <h3 className="text-sm font-semibold text-center">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
