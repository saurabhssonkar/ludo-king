import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const  gameSlice = createSlice({
    name:'game',
    initialState:initialState,
    reducers:{
        resetGame:()=>initialState,
        updateDiceNo:(state,action)=>{
            state.diceNo =action.payload.diceNo;
            console.log("@#%@%",action.payload.diceNo)
            state.isDiceRolled = true;
        },
        enablePileSelection:(state,action)=>{
            state.touchDiceBlock =true;
            state.pileSelectionPlayer = action.payload.playerNo;
        },

        enableCellSelection:(state,action)=>{
            state.touchDiceBlock =true;
            state.cellSelectionPlayer = action.payload.playerNo;
        },
        diableTouch:state =>{
            state.touchDiceBlock =true;
            state.cellSelectionPlayer = -1;
            state.pileSelectionPlayer =-1;
        },

        unfreezDice:state =>{
            state.touchDiceBlock =true;
            state.isDiceRolled = false;
        },
        updateFireworks:(state,action) =>{
            state.fireworks =action.payload;
           
        },
        annouceWinner:(state,action) =>{
            state.winner = action.payload;
        },
        updatePlayerChance:(state,action) =>{
            state.chancePlayer  = action.payload.chancePlayer;
            state.isDiceRolled=false;

        }
    },
});

export const {resetGame ,updateDiceNo,enablePileSelection,enableCellSelection,diableTouch,unfreezDice,updateFireworks,annouceWinner,updatePlayerChance} = gameSlice.actions;
export default gameSlice.reducer;