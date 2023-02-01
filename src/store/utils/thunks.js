import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const URL_SERV = " http://localhost:3001"

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
     async({page=1, order="asc", limit="10"}, {getState})=>{
        try{

            const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

            //console.log(response.data)

            const prevState = getState().posts;

            return{
                items:[...prevState.articles.items, ...response.data],
                page:page,
                end: response.data.length === 0 ? true : false
            }

        }catch(err){
            throw err
        }
     }

)

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostsById',

    async(id)=>{
        try{

            const response = await  axios.get(`${URL_SERV}/posts/${id}`)
            return response.data
            
        }catch(err){
            throw err
        }
    }
)