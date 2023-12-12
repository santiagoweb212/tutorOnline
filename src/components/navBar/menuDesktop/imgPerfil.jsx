import React from "react";
import OverlayCardProfile from "./overlayCardProfile";

const ImgPerfil = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    
      <div className="w-8 h-8 relative cursor-pointer" onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
        <img
          src="../../../public/woman.webp"
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <OverlayCardProfile isVisible={isVisible} />
      </div>
      
    
  );
};

export default ImgPerfil;
