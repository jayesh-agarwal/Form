import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <div className="LinkOut">
      <div className="LinkInnerLeft">
        <h1>Navbar</h1>
      </div>
      <div className="LinkInnerRight">
        <button><Link to="/">Home </Link></button>
        <button><Link to="/App">App </Link></button>
        <button><Link to="/header">heading </Link></button>
        <button><Link to="/form">form </Link></button>
        <button><Link to="/footer">footer</Link></button>
      </div>
    </div>
  );
};

export default Navbar;