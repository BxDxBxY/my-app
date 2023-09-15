import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LeftComponent = () => {
  const regOrLog = useSelector((state) => state.regOrLog);
  console.log(regOrLog);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  bg-[url('/bg-img.jpg')]">
      {regOrLog == "log" ? (
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          src="/svg/alien.svg"
          alt="Phone image"
          className="img-fluid w-1/2"
          width={"70%"}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          src="/svg/alien2.svg"
          whileHover={{ scale: 1.2 }}
          alt="Phone image"
          className="img-fluid w-1/2"
          width={"70%"}
        />
      )}
    </div>
  );
};

export default LeftComponent;
