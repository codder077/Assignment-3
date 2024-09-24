import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 p-4 text-white">
    <nav>
      <Link className="mx-2" to="/">Home</Link>
      <Link className="mx-2" to="/dashboard">Project Dashboard</Link>
      <Link className="mx-2" to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
