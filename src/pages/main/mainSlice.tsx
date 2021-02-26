import { createSlice } from '@reduxjs/toolkit'
import { ITEM } from '../../common/constants'

interface MainState {
    cardContent: ITEM[],
    isShowPopup:boolean,    
    selectedItem:string
  }
  
  const initialState = {
    cardContent: [],
    isShowPopup:false,
    selectedItem:''
  } as MainState


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        addContent: (state, action) =>{
            state.cardContent.push(action.payload);
            state.isShowPopup = false;
            console.log(action.payload);
        },
        openPopup: (state, action)=>{
            state.selectedItem = action.payload;
            state.isShowPopup = true;
            console.log(state.selectedItem);
        },
        closePopup: (state) =>{
            state.isShowPopup = false;
        }
    }
})

export const { addContent, openPopup, closePopup } = mainSlice.actions;
export default mainSlice.reducer;