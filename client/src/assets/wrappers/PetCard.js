import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 100%;
    object-fit: cover;
  }

  .pet-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pet-info p {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .pet-info a {
    font-weight: 500;
  }

  .name {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .actions {
    text-align: right;
    margin: 0 1rem 1rem 0;
    display: flex;
    justify-content: flex-end;
  }

  .icon {
    font-size: 1rem;
  }

  .delete {
    * {
      color: red;
    }
  }

  button {
    border: none;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;
