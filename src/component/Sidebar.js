import React, { useEffect } from "react";
import { FaTimes, FaBars, FaRegWindowClose } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi";
import { useGlobalContext } from "../Auth/ContextProvider";
import { path } from "../FormPages/Links";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const {
    auth,
    setAuth,
    isSidebarOpen,
    closeSidebar,
    users,
    openSidebar,
    loading,
    setLoading,
  } = useGlobalContext();
  let user = auth.id;

  const logout = async () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    setAuth({ status: false, id: 0, firstname: "", successfull: true });
  };

  return (
    <div className="container-home">
      <div className="navbar">
        <h4>Triage System</h4>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>

        <aside
          className={`${isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}`}
        >
          <div className="sidebar-header">
            <div></div>
            <button className="close-btn" onClick={closeSidebar}>
              <FaRegWindowClose />
            </button>
          </div>
          <div className="links">
            {path.map((path) => {
              const { id, url, text, icon } = path;
              if (url === `/homepage`) {
                return (
                  <li key={id} onClick={closeSidebar}>
                    <Link to="/homepage">
                      {icon}
                      {text}
                    </Link>
                  </li>
                );
              } else if (url === "/profile") {
                return (
                  <li key={id} onClick={closeSidebar}>
                    <Link to={`/profile/${user}`}>
                      {icon}
                      {text}
                    </Link>
                  </li>
                );
              } else if (url === "/userdata") {
                return (
                  <li key={id} onClick={closeSidebar}>
                    <Link to="/userdata">
                      {icon}
                      {text}
                    </Link>
                  </li>
                );
              } else if (text === "Logout") {
                return (
                  <li key={id} onClick={closeSidebar}>
                    <a onClick={logout} href={`/login`}>
                      {icon}
                      {text}
                    </a>
                  </li>
                );
              }
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
