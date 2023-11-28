/*import './Error.css'*/
import {Link} from "react-router-dom";

const Error = () => {

    return(
        <div>
            <h1>Pagina no encontrada 404</h1>
            <Link to="/" >Home</Link>
        </div>
    )
}

export default Error;