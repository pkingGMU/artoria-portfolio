import { useRef, useEffect, useState } from "react";

function Popup({ project_name, onClose, description, img1, img2 }) {
  return (
    <div className="popup_overlay">
      <div className="popup_box">
        <h2>{project_name}</h2>
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
