import { Link } from 'react-router-dom';
import { route } from '../../../constants/route';

function GlobalNavigation() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={route.HOME}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" to={route.HOME}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={route.EDITOR}>
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={route.SETTINGS}>
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={route.LOGIN}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={route.REGISTER}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default GlobalNavigation;
