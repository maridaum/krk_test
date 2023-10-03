import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - 7rem);
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 70vw;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }

  img {
    height: 500px;
  }

  small {
    display: block;
  }
`;

export default Wrapper;
