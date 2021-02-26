import React, { useRef } from "react";
import { Link } from "react-router-dom";
import * as CONST from "../../../../common/constants"

interface ImageItemProps {
    item: CONST.ITEM;
}
  
// https://picsum.photos/200

const Image: React.FunctionComponent<ImageItemProps> = props => {

    return (
        <>
            <h1>IMAGE COMPONENT</h1>
            <h2>TITLE : {props.item.title}</h2>
            <img src={props.item.body} />
        </>
    );
};

export default Image;