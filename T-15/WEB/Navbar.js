import { Link } from 'react-router-dom';
const Navbar = () => {
    return (  
       <nav className="navbar">
           <h1>Course Manager</h1>
           <div className="links">
                <Link to="/">Home</Link>
                <Link to="/new-course">New Course</Link>
           </div>
       </nav>
    );
}
 
export default Navbar;