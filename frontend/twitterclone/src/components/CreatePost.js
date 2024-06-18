import React, { useState } from 'react';
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

const CreatePost = () => {
    const [description, setDescription] = useState("");
    const { user } = useSelector(store => store.user);
    const {isActive} = useSelector(store=>store.tweet);
    const dispatch = useDispatch();

    

    
    

    
}

