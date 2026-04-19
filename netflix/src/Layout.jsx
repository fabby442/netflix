import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user">Users</Link>
      </nav>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}