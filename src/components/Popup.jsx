import { useRef, useEffect, useState } from "react";

function Popup({ project_name, onClose }) {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="popup_overlay">
      <div className="popup_box">
        <h2>{project_name}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
          faucibus ex. In hac habitasse platea dictumst. Aenean orci nunc,
          vestibulum in dictum ac, accumsan et ipsum. Duis gravida fermentum est
          et lobortis. Praesent at erat molestie, egestas ante pretium, sodales
          purus. Sed ipsum sapien, sollicitudin vitae ipsum at, congue aliquam
          sem. Ut nunc nisi, tincidunt a mauris vel, vestibulum ullamcorper
          purus. Mauris vitae leo nulla. Praesent elementum lectus in euismod
          viverra. Integer vel libero eget quam condimentum tempus. Duis auctor
          euismod odio sed faucibus. Phasellus finibus dui iaculis scelerisque
          tincidunt. Cras sodales massa vitae molestie pulvinar. Maecenas lectus
          nulla, semper sed iaculis eu, pharetra sed velit. Nulla tristique
          lorem ut fringilla pulvinar. Proin id scelerisque erat. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Quisque eu mi sit amet ipsum mollis elementum nec sed quam. Nulla
          sit amet tempus erat, nec ornare lacus. Integer at cursus felis, in
          ultricies nisi. Fusce blandit facilisis scelerisque. Nulla nisl
          ligula, sodales at ultricies et, dignissim vitae risus. Etiam
          tristique sagittis nisl at hendrerit. Quisque molestie finibus enim
          vitae ultrices. Fusce ac mi faucibus, rhoncus felis non, porttitor
          nisi.{" "}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
