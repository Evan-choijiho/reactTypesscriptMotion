import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { openPopup } from '../mainSlice'
import PopupContainer from "../../popup/PopupContainer";
import * as CONST from "../../../common/constants"

const Header = () => {
  const isShowPopup = useSelector(state => state.main.isShowPopup);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <ul>
          <li className="main-menu" onClick={() => dispatch(openPopup(CONST.CARD_IMAGE))}>
            Image
          </li>
          <li className="main-menu" onClick={() => dispatch(openPopup(CONST.CARD_VIDEO))}>
            Video
          </li>
          <li className="main-menu" onClick={() => dispatch(openPopup(CONST.CARD_TEXT))}>
            Note
          </li>
          <li className="main-menu" onClick={() => dispatch(openPopup(CONST.CARD_TODO))}>
            Todo
          </li>
        </ul>
      </header>
      {isShowPopup ? <PopupContainer /> : ''}
    </div>
  );
};

export default Header;
