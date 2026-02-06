import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-main">
      <Sidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
