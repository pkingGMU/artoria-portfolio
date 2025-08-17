import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./components/Book.jsx";
import Popup from "./components/Popup.jsx";
import IconButton from "./components/IconButton.jsx";

function Content_Panel({ children, class_name }) {
  return <div className={class_name}>{children}</div>;
}

function Main_Box({ message }) {
  return (
    <div className="main_box">
      <h1 className="urmom"> {message} </h1>
      <p>
        My name is Patrick King and I am a self taught dev. I mostly enjoy
        making unfinshed games in lua, java, and C#. For work I do data analysis
        and signal processing for Kinesiology and Biomechanics devices. I've
        worked with: motion capture data, kinematic data, kinetic data, front
        facing lab applications, and IMU data. My hobbies inlcude leetcode,
        watching tsdoing on YouTube and playing video games (hence the stardew
        valley theme)
      </p>
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

  const [active_book, set_active_book] = useState(null);

  return (
    <>
      <div className="vert_div">
        <Content_Panel class_name="left_vert">
          <Book
            project_name="Project 1"
            onClick={() => set_active_book("Project 1")}
          />
          <Book
            project_name="Project 2"
            onClick={() => set_active_book("Project 2")}
          />
        </Content_Panel>

        <Content_Panel class_name="main_vert">
          <Main_Box message="Welcome" />

          <div className="social_box">
            <IconButton
              img="/src/assets/Icons/github.svg"
              alt="GitHub"
              id="1"
              link="https://github.com/pkingGMU"
            />
            <IconButton
              img="/src/assets/Icons/icons8-youtube.svg"
              alt="YouTube"
              id="2"
              link="https://www.youtube.com/@artoria-codes/streams"
            />
            <IconButton
              img="/src/assets/Icons/icons8-linkedin.svg"
              alt="LinkedIn"
              id="3"
              link="https://www.linkedin.com/in/pkinggmu/"
            />
          </div>

          {active_book && (
            <Popup
              project_name={active_book}
              onClose={() => set_active_book(null)}
            />
          )}
        </Content_Panel>

        <Content_Panel class_name="right_vert">
          {" "}
          <Book
            project_name="Project 3"
            onClick={() => set_active_book("Project 3")}
          />
          <Book
            project_name="Project 4"
            onClick={() => set_active_book("Project 4")}
          />
          <Book
            project_name="Project 5"
            onClick={() => set_active_book("Project 5")}
          />
        </Content_Panel>
      </div>
    </>
  );
}

export default App;
