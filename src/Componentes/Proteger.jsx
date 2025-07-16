import { Navigate } from "react-router-dom";

const Proteger = ({ rutaProtegida, children }) => {
  
  if (!rutaProtegida) {

    return <Navigate to="/" replace />;
  }

  return children
};

export default Proteger;
