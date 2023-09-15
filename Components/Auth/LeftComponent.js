import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const LeftComponent = () => {
  const regOrLog = useSelector((state) => state.regOrLog);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {regOrLog == "log" ? (
          <motion.img
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            key={"log-image"}
            src="/svg/alien.svg"
            alt="Alien image"
            className="img-fluid w-1/2"
            width={"70%"}
            whileHover={{ scale: 1.2 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 0.8,
              //   delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        ) : (
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: 200 }}
            src="/svg/alien2.svg"
            whileHover={{ scale: 1.2 }}
            alt="Alien image"
            className="img-fluid w-1/2"
            width={"70%"}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeftComponent;
