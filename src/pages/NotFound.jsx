import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <p>Lo sentimos, la página que intentas buscar no esta disponible</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};
export default NotFound;
