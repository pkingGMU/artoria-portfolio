import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./components/Book.jsx";
import Popup from "./components/Popup.jsx";
import IconButton from "./components/IconButton.jsx";
import BookShelf from "./components/BookShelf.jsx";
function Content_Panel({ children, class_name }) {
  return <div className={class_name}>{children}</div>;
}

function Main_Box({ title, message, message2 }) {
  return (
    <div className="main_box">
      <h1 className="urmom"> {title} </h1>
      <p> {message}</p>
      <p> {message2} </p>
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

  const project_data_left = {
    NIH_ACTIVITY: {
      project_name: "3-Axis Accelerometer Activity Classification",
      description: "Test Description",
      link: "https://github.com/pkingGMU/NIH-NIA-Women-s-Health",
    },
    AVRO_READER: {
      project_name: ".AVRO Reader for Empatica Embrace Plus",
      description: "Test Description",
    },
    Project_2: {
      project_name: ".AVRO Reader for Empatica Embrace Plus",
      description: "Test Description",
    },
  };

  const project_data_right = {
    Project_3: {
      project_name: "Bruh",
      description: "Bruh Description",
    },

    Project_4: {
      project_name: "Bruh 2",
      description: "Bruh Description",
    },
    Project_5: {
      project_name: "Bruh 2",
      description: "Bruh Description",
    },
  };

  return (
    <>
      <div className="vert_div">
        <Content_Panel class_name="left_vert">
          <BookShelf project_data={project_data_left} />
        </Content_Panel>

        <Content_Panel class_name="main_vert">
          <Main_Box
            title="Welcome"
            message="My name is Patrick King and I am a self taught dev. I enjoy data
        science, but also love making games and game mods. For work I do data
        analysis and signal processing for Kinesiology and Biomechanics devices.
        I've worked with: motion capture data, kinematic data, kinetic data,
        front facing lab applications, and IMU data. My hobbies inlcude
        leetcode, reading books, learning new programming languages, and playing
        video games (hence the stardew valley theme)"
          />
          <Main_Box
            title="Tooling"
            message="Languages: C#, Java, Python, Matlab, R, lua"
            message2="Tools: Computer Hardware/Software, OS(Linux, Windows, Mac), System Admin, Git, Emacs, Vicon, Redcap"
          />
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
        </Content_Panel>

        <Content_Panel class_name="right_vert">
          <BookShelf project_data={project_data_right} />
        </Content_Panel>
      </div>
    </>
  );
}

export default App;
