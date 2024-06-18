import {createSlice} from "@reduxjs/toolkit";
const tweetSlice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
        refresh:false,
        isActive:true
    },
    
});
