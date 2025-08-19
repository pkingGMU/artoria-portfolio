import { useRef, useEffect, useState } from "react";

function Popup({ project_name, onClose, description, img1, img2, link }) {
  return (
    <div className="popup_overlay">
      <div className="popup_box">
        <div className="popup_text_div">
          <h2 className="popup_h2">{project_name}</h2>
          <a href={link}>GitHub Repo</a>
          <p className="popup_p">{description}</p>
        </div>
        <div className="popup_img_div">
          <img src={img1} />
          <img src={img2} />
        </div>
        <button className="popup_button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
