import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

function LeftComponent() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  bg-[url('/bg-img.jpg')]">
      {/*
       */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        src="/svg/alien.svg"
        class="img-fluid"
        alt="Phone image"
        className="w-1/2"
        width={"70%"}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    </div>
  );
}

export default LeftComponent;
