import { connect } from "react-redux";

import Post from "../post/Post";
import "./posts.css";

function Posts({blogs}) {
  return (
    <div className="posts">
      {blogs.map(blog => (
        <Post blog={blog} key={blog.id}/>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(Posts)
