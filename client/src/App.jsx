import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Layout,
  Homepage,
  Calculator,
  About,
  Guidelines,
  Why,
  Login,
  SignUp,
  DashboardLayout,
  Recipes,
  Pets,
  AddPet,
  EditPet,
  Pet,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { action as signUpAction } from "./pages/SignUp";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as petsLoader } from "./pages/Pets";
import { action as addPetAction } from "./pages/AddPet";
import { loader as petLoader } from "./pages/Pet";
import { loader as editPetLoader } from "./pages/EditPet";
import { action as editPetAction } from "./pages/EditPet";
import { action as deletePetAction } from "./pages/DeletePet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "guidelines",
        element: <Guidelines />,
      },
      {
        path: "why-feed-raw",
        element: <Why />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Pets />,
            loader: petsLoader,
          },
          {
            path: "add-pet",
            element: <AddPet />,
            action: addPetAction,
          },
          {
            path: "pets/:id",
            element: <Pet />,
            loader: petLoader,
          },
          {
            path: "edit-pet/:id",
            element: <EditPet />,
            loader: editPetLoader,
            action: editPetAction,
          },
          {
            path: "delete-pet/:id",
            action: deletePetAction,
          },
          {
            path: "recipes",
            element: <Recipes />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
