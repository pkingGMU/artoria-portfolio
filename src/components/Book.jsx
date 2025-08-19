import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Book({ onClick, project_name }) {
  function book_interact() {
    console.log("Book Interact");
  }

  return (
    <>
      <h1>{project_name}</h1>
      <div className="book_div">
        <button className="book_button" onClick={onClick}>
          <img src="/src/assets/Sprites/book.svg" />
        </button>
      </div>
    </>
  );
}

export default Book;
