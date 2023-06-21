import React from "react";
import { motion } from "framer-motion";

const SideBarItem = ({ title, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04  }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      className="flex gap-1  hover:bg-slate-300/10  px-4 cursor-pointer  pl-2 items-center p-1 rounded"
    >
      <div className="">{icon}</div>
      <div className=" text-gray-300 pl-2 text-sm cursor-pointer hover:text-gray-200 ">
        {title}
      </div>
    </motion.div>
  );
};

export default SideBarItem;
