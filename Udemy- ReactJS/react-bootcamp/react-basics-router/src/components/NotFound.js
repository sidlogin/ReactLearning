import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
        <h2>Post not found</h2>
        <p>Well, that's disappointing</p>
        <p>
            <Link to="/">Back to Homepage</Link>
        </p>
    </>
  )
}

export default NotFound;