import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addBlog, updateBlog } from "../../actions";
import history from "../../history";

import "./write.css";

const Write = ({blogs ,addBlog, updateBlog}) => {
  const [blogImg, setBlogImg] = useState("https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const { blogid } = useParams()

  useEffect(() => {
    const blog = blogs.find(blog => blog.id === parseInt(blogid))
    if (blog !== undefined) {
      setBlogTitle(blog.title)
      setBlogContent(blog.content)
      setBlogImg(blog.img)
    }
  }, [])

  const publishBlog = (e) => {
    e.preventDefault()
    const blogItem = {
      id: parseInt(blogid),
      title: blogTitle,
      content: blogContent,
      img: blogImg
    }
    if (blogid) {
      console.log(blogItem)
      updateBlog(blogItem)
    }
    else {
      blogItem.id = Math.floor(Math.random() * 100) + 5
      addBlog(blogItem)
    }
    history.push('/')
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src={blogImg}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            value={blogTitle}
            onChange={(e) => (setBlogTitle(e.target.value))}
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            value={blogContent}
            onChange={(e) => (setBlogContent(e.target.value))}
            type="text"
            autoFocus={true}
          />
        </div>
          <button className="writeSubmit" type="submit" onClick={publishBlog}>
            Publish
          </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.blogs)
  return {
    blogs: state.blogs,
  }
}

export default connect(mapStateToProps, {
  addBlog,
  updateBlog
})(Write)