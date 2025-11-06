import './Navigation.css'

// This import is for us to be able to use the Link component
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            {/* this link redirects to "/", the homepage */}
            <Link className="nav-button" to="/">Homepage</Link>
            {/* this link redirects to "/courselist"     */}
            <Link className="nav-button" to="/courselist">Course List</Link>
        </>
    );
}