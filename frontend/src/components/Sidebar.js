import { Link } from 'react-router-dom';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white h-full p-4">
    <ul>
      <li className="mb-4">
        <Link to="/" className="flex items-center p-2 hover:bg-gray-600 rounded">
          <AiFillHome className="mr-2" /> Home
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-600 rounded">
          <AiFillProject className="mr-2" /> Project Dashboard
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/login" className="flex items-center p-2 hover:bg-gray-600 rounded">
          <RiLoginBoxFill className="mr-2" /> Login
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
