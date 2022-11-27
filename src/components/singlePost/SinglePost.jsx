import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteBlog, addReview } from "../../actions";
import history from "../../history";

import "./singlePost.css";

function SinglePost({blogs, reviews, deleteBlog, addReview}) {
  const [review, setReview] = useState('')
  const [blog, setBlog] = useState(null)
  const {id} = useParams()
  console.log(blog)

  useEffect(() => {
    setBlog(blogs.find(blog => blog.id === parseInt(id)))
  }, [])

  const submitreview = (e) => {
    e.preventDefault()
    addReview({
      blogId: id,
      content: review
    })
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={blog ? blog.img : ''}
          alt=""
        />
        <h1 className="singlePostTitle">
          {blog ? blog.title : ''}
          <div className="singlePostEdit">
            <Link to={`/write/${blog ? blog.id : ''}`} >
              <i className="singlePostIcon far fa-edit"></i>
            </Link>
            <i className="singlePostIcon far fa-trash-alt" onClick={() => {deleteBlog(blog.id); history.push('/')}}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="">
                Abhinav
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {blog ? blog.content : ''}
        </p>
        <br />
        <br />
        <textarea 
          className="reviewtextarea" 
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="addReview" type="submit" onClick={submitreview}>
            Add Review
        </button>
        <div className="singlePostInfo">
          Reviews
        </div>
        {reviews.map((review,idx) => {
          if (review.blogId === id) {
            return (
          <div key={idx}>
            <p className="reviewDesc">
            {review.content}
            </p>
            <br />
            <hr />
            <br />
          </div>
        )}})}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.blogs)
  return {
    blogs: state.blogs,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, {
  deleteBlog,
  addReview
})(SinglePost)
