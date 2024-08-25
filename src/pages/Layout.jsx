import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <p>header</p>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default Layout;
