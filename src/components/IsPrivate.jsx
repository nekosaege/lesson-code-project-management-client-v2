import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function IsPrivate({children}){
    const {isLoggedIn, isLoading} = useContext(AuthContext);

    if (isLoading) return <p>Loading...</p>;

    if (!isLoggedIn){
        return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;