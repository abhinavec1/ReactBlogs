import { combineReducers } from "redux";
import { blogsData } from "../data";

export const blogsReducer = (blogs = blogsData, action) => {
    console.log('reducer called')
    switch (action.type) {
        case "ADD_BLOG": {
            return [...blogs, action.payload]
        }

        case "UPDATE_BLOG": {
            return blogs.map(blog => blog.id === action.payload.id ? action.payload : blog)
        }

        case "DELETE_BLOG": {
            return blogs.filter(blog => blog.id !== action.payload)
        }

        default: return blogs
    }
}

export const addReviewReducer = (reviews = [1, 2], action) => {
    if (action.type === "ADD_REVIEW") {
        return [...reviews, action.payload]
    }

    return reviews
}

export default combineReducers({
    blogs: blogsReducer,
    reviews: addReviewReducer
})