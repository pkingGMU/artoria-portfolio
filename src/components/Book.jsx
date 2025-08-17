import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Book({ onClick, project_name }) {
  function book_interact() {
    console.log("Book Interact");
  }

  return (
    <motion.div
      initial={{
        scale: 4,
        y: 0,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="book_rect_div"
    >
      <h1>{project_name}</h1>
      <div className="book_div">
        <button className="book_button" onClick={onClick}>
          <img src="/src/assets/Sprites/book.svg" />
        </button>
      </div>
    </motion.div>
  );
}

export default Book;
