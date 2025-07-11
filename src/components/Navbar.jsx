import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const {isLoggedIn, user, logOutUser} = useContext(AuthContext)
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      {/*  👇  UPDATE  👇   */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>        
          <button>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
