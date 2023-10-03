import { Link, Form } from "react-router-dom";
import { BiSolidDog } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Wrapper from "../assets/wrappers/PetCard";

const PetCard = ({ _id, name, weight, lifeStage, avatar }) => {
  return (
    <Wrapper>
      <header>
        <Link to={`/dashboard/pets/${_id}`}>
          {avatar ? (
            <img src={avatar} alt="avatar" className="avatar" />
          ) : (
            <BiSolidDog />
          )}
        </Link>
      </header>

      <div className="pet-info">
        <p className="name">{name}</p>
        <p className="weight">{weight} Pounds</p>
        <p className="lifeStage">{lifeStage}</p>
        <Link to={`/dashboard/pets/${_id}`}>View Feeding Plan</Link>
      </div>

      <div className="actions">
        <Link to={`/dashboard/edit-pet/${_id}`}>
          <FaEdit className="edit icon" />
        </Link>
        <Form method="post" action={`/dashboard/delete-pet/${_id}`}>
          <button type="submit">
            <RiDeleteBinLine className="delete icon" />
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default PetCard;
