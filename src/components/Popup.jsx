import { useRef, useEffect, useState } from "react";

function Popup({ project_name, onClose, description, img1, img2, link }) {
  return (
    <div className="popup_overlay">
      <div className="popup_box">
        <h2>{project_name}</h2>
        <a href={link}>GitHub Repo</a>
        <p>{description}</p>
        <img src={img1} />
        <img src={img2} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
