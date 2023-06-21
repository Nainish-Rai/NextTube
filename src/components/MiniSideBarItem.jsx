import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const MiniSideBarItem = ({ icon, title }) => {
  return (
    <motion.div
    
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
       
        duration: 0.1,
      }}
      className="w-8 h-8 flex cursor-pointer  hover:bg-white/10 rounded flex-col items-center justify-center"
    >
      <div>{icon}</div>
    </motion.div>
  );
};

export default MiniSideBarItem;
