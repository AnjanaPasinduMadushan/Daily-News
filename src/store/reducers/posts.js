import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name:'posts',
    initialState:{},
    reducers:{
        loading:true,
        articles:{
            items:[]
        }
    }
})

export default postsSlice.reducer;