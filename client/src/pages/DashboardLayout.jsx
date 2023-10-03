import { useContext, createContext, useEffect } from "react";
import customFetch from "../utils/customFetch";
import {
  Outlet,
  redirect,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const { updateUser } = useOutletContext();

  useEffect(() => {
    loader();
    updateUser(user);
  }, []);

  return (
    <div>
      <DashboardContext.Provider value={{ user }}>
        <Outlet />
      </DashboardContext.Provider>
    </div>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardLayout;
