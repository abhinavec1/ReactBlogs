export const addBlog = (blog) => {
    return {
        type: "ADD_BLOG",
        payload: blog
    }
}

export const updateBlog = (blog) => {
    console.log('updateBlog called')
    return {
        type: "UPDATE_BLOG",
        payload: blog
    }
}

export const deleteBlog = (id) => {
    return {
        type: "DELETE_BLOG",
        payload: id
    }
}

export const addReview = (review) => {
    return {
        type: "ADD_REVIEW",
        payload: review
    }
}