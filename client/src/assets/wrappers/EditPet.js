import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - 14rem);
  overflow: hidden;
  h1 {
    text-align: center;
    margin-top: 3rem;
  }

  .container {
    display: flex;
  }

  .form {
    padding: 0 3rem;
  }

  .form-title {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export default Wrapper;
