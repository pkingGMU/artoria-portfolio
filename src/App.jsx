import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./components/Book.jsx";

function Content_Panel({ children, class_name }) {
  return <div className={class_name}>{children}</div>;
}

function Main_Box({ message }) {
  return (
    <div className="main_box">
      <h1 className="urmom"> {message} </h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("In effect" + count);
  }, [count]);

  function clickHandler() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <div className="vert_div">
        <Content_Panel class_name="left_vert">
          <Book />
          <Book />
        </Content_Panel>

        <Content_Panel class_name="main_vert">
          <Main_Box message="Welcome" />

          <div className="social_box">
            <button
              className="icon_button"
              type="button"
              id="1"
              onClick={clickHandler}
            >
              <img src="/src/assets/Icons/github.svg" alt="GitHub" />
            </button>
            <button className="icon_button" type="button" id="2">
              <img src="/src/assets/Icons/icons8-youtube.svg" alt="YoutTube" />
            </button>
            <button className="icon_button" type="button" id="3">
              <img src="/src/assets/Icons/icons8-linkedin.svg" alt="GitHub" />
            </button>
          </div>
        </Content_Panel>

        <Content_Panel class_name="right_vert"></Content_Panel>
      </div>
    </>
  );
}

export default App;
