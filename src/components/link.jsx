import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/App">App </Link>
        <Link to="/header">heading </Link>
        <Link to="/form">form </Link>
        <Link to = "/footer">footer</Link>
        
      </div>
    );
  };

export default Navbar;