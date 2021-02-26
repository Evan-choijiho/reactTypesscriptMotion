import React from "react";
import { connect } from "react-redux";
import Popup from "./components/Popup";


const PopupContainer = () => {
  return (
    <div>
      <div className="popup-bg">
        <div className="popup">
            <Popup />
        </div>
      </div>
    </div>
  );
};

export default PopupContainer;
