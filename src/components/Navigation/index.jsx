import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import '../../App.css';


const Navigation = () => {
    return (
      <nav className="menu">
        <NavLink
          exact
          to={routes.home}
          className="nav-link"
          activeClassName="active"
        >
          Главная
        </NavLink>
        <NavLink
          to={routes.movies}
          className="nav-link"
          activeClassName="active"
        >
          Movies
        </NavLink>
      </nav>
    );
}
export default Navigation;
