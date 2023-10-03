import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Layout = () => {
  const [user, setUser] = useState(null);

  const updateUser = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <main className="layout">
      <Navbar user={user} updateUser={updateUser} />
      <Outlet context={{ updateUser }} />
      <Footer />
    </main>
  );
};

export default Layout;
