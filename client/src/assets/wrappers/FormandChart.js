import styled from "styled-components";

const Wrapper = styled.section`
  max-height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: clamp(20px, 2.5vw, 50px);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 85%;
  }

  .form {
    padding: 0 3rem;
    width: 50%;
  }

  .form-title {
    text-align: center;
  }

  .chart {
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    overflow: auto; 
    
    h1 {
      margin-bottom: 0.5rem;
      width: 80%;
    }

    .container {
      flex-direction: column;
      justify-content: space-between;
    }

    .form {
      width: 100%;
    }

    .chart {
      width: 90%;
    }
  }

  @media screen and (max-width: 414px) {
  }
`;

export default Wrapper;
