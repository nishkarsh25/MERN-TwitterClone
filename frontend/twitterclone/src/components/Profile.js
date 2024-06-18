import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";
import { useSelector,useDispatch } from "react-redux";
import useGetProfile from '../hooks/useGetProfile';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import { followingUpdate } from '../redux/userSlice';
import { getRefresh } from '../redux/tweetSlice';



