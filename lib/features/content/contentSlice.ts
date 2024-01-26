import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface IContent{
    id: number,
    title:string,
    description: string
}
const initialState:IContent[] = [
    {
        id:1,title:"Hey there", description:"Once again, it’s 5 in the morning, and here I am. Since I began learning ReactJS, I’ve developed a bit of an obsession with folder structure and naming conventions. I’ve faced numerous failures in this area; my GitHub repository is essentially a graveyard for those unsuccessful projects. However, I believe I’ve finally cracked the code."
    }
]



const postsSLice= createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPosts:(state, action:PayloadAction<any>)=>{
            const {id, title, description}=action.payload;
            state.push({id, title, description})
        },
        addPostsFromApi:(state, action:PayloadAction<any>)=>{
            state.push(...action.payload)
        },
        deletePost:(state, action:PayloadAction<number>)=>{
            const postId=action.payload;
            state.filter((post)=>{post.id !== postId})
        }
    }
})

export const{addPosts,deletePost}=postsSLice.actions
export default postsSLice.reducer







