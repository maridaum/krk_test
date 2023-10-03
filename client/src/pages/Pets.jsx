import { PetsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData, Link } from "react-router-dom";
import { useContext, createContext } from "react";
import Wrapper from "../assets/wrappers/Pets";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/pets");
    return { data };
  } catch (error) {
    return error;
  }
};

const PetsContext = createContext();

const Pets = () => {
  const { data } = useLoaderData();
  const { pets } = data;
  return (
    <PetsContext.Provider value={{ data }}>
      <Wrapper>
        <h1>Your Pets</h1>
        <PetsContainer />
        <Link to="/dashboard/add-pet">Add Pet</Link>
      </Wrapper>
    </PetsContext.Provider>
  );
};

export const usePetsContext = () => useContext(PetsContext);

export default Pets;
