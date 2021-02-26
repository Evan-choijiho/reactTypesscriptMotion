import React, { ReactElement, useRef } from "react";
import { Link } from "react-router-dom";
import * as CONST from "../../../common/constants"
import { useDispatch, useSelector } from 'react-redux'
import Image from './items/image'
import Video from './items/video'
import Text from './items/text'
import Todo from './items/todo'

const Main= ()=> {


    const itemList = useSelector(state => state.main.cardContent);

    const generateItem = (item:CONST.ITEM):ReactElement=>{
        let output:ReactElement= <></>;
        switch(item.item){
            case(CONST.CARD_IMAGE):{
                output = <Image item={item} />        
                break;
            }
            case(CONST.CARD_VIDEO):{
                output = <Video/>        
                break;
            }
            case(CONST.CARD_TEXT):{
                output = <Text/>        
                break;
            }
            case(CONST.CARD_TODO):{
                output = <Todo/>        
                break;
            }
        } 
        return output;

    }
  
    return (
        <div>
            <div className="content-head">
                <h1>motion</h1>
                <ul>
                    {itemList.map( (item:CONST.ITEM)=>
                        ( 
                            generateItem(item)
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Main;