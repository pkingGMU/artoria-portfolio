import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./components/Book.jsx";
import Popup from "./components/Popup.jsx";
import IconButton from "./components/IconButton.jsx";
import BookShelf from "./components/BookShelf.jsx";
import Spritesheet from "react-responsive-spritesheet";

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
      description:
        "This project was written in MATLAB and was created for classifying physical activity and postural behavior using triaxial accelerometer data collected from Axivity AX3 devices. The pipeline processes raw .cwa files, extracts relevant motion features, and classifies windows of time into activity types (active vs. inactive) and postures (lying, sitting, or standing).",
      link: "https://github.com/pkingGMU/NIH-NIA-Women-s-Health",
      img1: "/assets/Images/ActivityClassification.png",
    },
    AVRO_READER: {
      project_name: ".AVRO Reader for Empatica Embrace Plus",
      description:
        "The Empatica Embrace Plus was a new device my lab received that was mainly used for BPA readings or skin conductance. It stored frame by frame data in a AWS bucket. The lab needed a way to get the unorganized frame by frame data into their analysis programs .mat format. This set of scripts that I wrote allowed anyone in the lab to easily turn the .avro files into .mat files with the right headers and structs.",
      link: "https://github.com/pkingGMU/avro_reader",
    },
    TRANSCRIPTION: {
      project_name: "Open AI Whisper Offline Transcription",
      description:
        "This project was created as a result of my participation in a research study done by GMU's Bioengineering department. The study revolved around interviewing patients with chronic neck pain. The team needed a way to quickly transcribe these hour long interview without having to pay people for a lot of time. A colleague and I using Open AI's Whisper, Segmentation 3.0, and a PII removal model to build an application that could be used totally offline and follow HIPAA compliance. This application is still being used by researches today.",
      img1: "assets/Images/Whisper.jpg",
      link: "https://github.com/pkingGMU/OpenAi-Whisper-Interview-Transcription",
    },
  };

  const project_data_right = {
    NIKKI: {
      project_name: "Project NIKKI a 2D Platformer",
      description:
        "This is an ongoing passion project for me to learn lua. It is a game that is centered around the core mechanic of rhythm. I can create my own music and export each section as a different midi file. I have a self made matlab parser that can make intricate csv files for each song. Every facet of the game will use the midi information from the different sections. It is still a large work in progress",
      link: "https://github.com/pkingGMU/project-nikki",
      img1: "assets/Images/nikki.png",
    },

    GESTURE_ML: {
      project_name:
        "Gesture Detection in Motion Capture using KNN Classification",
      description:
        "This project was created during my intership at the GMU S.M.A.R.T. Lab. I had one semester to create an abstract and present a poster for the lab. As part of a much larger project going on in the lab, I used MATLABs classifcation learner to develop a prototype KNN model.",
      link: "https://github.com/pkingGMU/Gesture_Machine_Learning",
      img1: "assets/Images/knn.png",
    },
    INTERFACE_MOD: {
      project_name: "Stardew Valley Mod: Central Storage Interface",
      description:
        "This is my other ongoing passion project that I'm working on with a friend. It's a mod for Stardew Valley written in C# using the SMAPI framework. It allows a player to have one interface to craft from using the vanilla machines on the players farm. It also has a storage mechanism where a player can obtain hard drives to store items on.",
      img1: "assets/Images/stardew.png",
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
        </Content_Panel>

        <Content_Panel class_name="right_vert">
          <BookShelf project_data={project_data_right} />
        </Content_Panel>
      </div>{" "}
      <div className="cat_wrapper">
        <Spritesheet
          className="cat_sprite"
          image={"/assets/Sprites/cat.png"}
          widthFrame={32}
          heightFrame={32}
          steps={4}
          fps={10}
          loop={true}
          autoplay={true}
        />
      </div>
      <div className="social_box">
        <IconButton
          img="/assets/Icons/github.svg"
          alt="GitHub"
          id="1"
          link="https://github.com/pkingGMU"
        />
        <IconButton
          img="/assets/Icons/icons8-youtube.svg"
          alt="YouTube"
          id="2"
          link="https://www.youtube.com/@artoria-codes/streams"
        />
        <IconButton
          img="/assets/Icons/icons8-linkedin.svg"
          alt="LinkedIn"
          id="3"
          link="https://www.linkedin.com/in/pkinggmu/"
        />
      </div>
    </>
  );
}

export default App;
