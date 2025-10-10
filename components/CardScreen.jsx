import React from "react";

const CardScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-8">
        <div
          className="card1 relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('./images/cardbgDesign.svg')" }}
        >
          <img
            src="./images/servicescard.svg"
            alt="cards"
            className="w-78 h-auto"
          />
        </div>
        
        <div
          className="card2 relative flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('./images/cardbgDesign.svg')" }}
        >
          <img
            src="./images/servicescard.svg"
            alt="cards"
            className="w-78 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CardScreen;
