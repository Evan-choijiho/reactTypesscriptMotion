import React, { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { closePopup, addContent } from "../../main/mainSlice";
import {ITEM} from "../../../common/constants"

const Popup = () => {
  // TODO
  // popup class 구현.
  // Image, Video, Text, TODO에 따라 구성 될 수 있도록
  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.main.selectedItem);
  const title = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLInputElement>(null);

  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const submitValue:ITEM = {
      item: selectedItem,
      title: title.current!.value,
      body: body.current!.value
    }
    dispatch( addContent(submitValue) );
  }

  return (
    <div>
      <div>
          <div><button onClick={()=>dispatch(closePopup())}>&times;</button></div>
        <h1>{selectedItem}</h1>
        <div>
          <form onSubmit={submit}>
            <div><span>TEXT</span><input type="text" ref={title}/></div>
            <div><span>URL</span><input type="text" ref={body}/></div>
            <div><button type="submit">Submit</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
