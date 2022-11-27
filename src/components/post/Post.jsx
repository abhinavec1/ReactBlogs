import { Link } from "react-router-dom";
import "./post.css";

export default function Post({blog}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={blog.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${blog.id}`} className="link">
            {blog.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {blog.content}
      </p>
    </div>
  );
}
