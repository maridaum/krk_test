import PetCard from "./PetCard";
import { usePetsContext } from "../pages/Pets";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/PetsContainer";

const PetsContainer = () => {
  const { data } = usePetsContext();
  const { pets } = data;

  return (
    <Wrapper>
      {pets.map((pet) => {
        return <PetCard key={pet._id} {...pet} />;
      })}
    </Wrapper>
  );
};

export default PetsContainer;
