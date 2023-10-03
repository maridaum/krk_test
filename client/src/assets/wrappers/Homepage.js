import styled from "styled-components";

const Wrapper = styled.section`
  height: calc(100vh - 6rem);

  .hero {
    height: 100%;
    position: relative;
    padding: 0 1rem;
  }

  .hero img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -2;
    width: 700px;
    animation: transitionIn 1s ease-in-out;
  }

  .hero-btn {
    text-align: center;
    width: 50%;
  }

  .message-container {
    margin: 0 2rem;
    display: flex;
    flex: 0 1 1;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    position: absolute;
    top: 20%;
    animation: transitionIn 0.75s ease-in-out;
  }

  .message {
    font-size: clamp(30px, 5vw, 60px);
    line-height: 1;
  }

  @media screen and (max-width: 1024px) {
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-btn {
      width: 100%;
    }

    .hero img {
      width: 600px;
    }
  }

  @media screen and (max-height: 1100px) {
    .hero img {
      width: 550px;
    }
  }

  @media screen and (max-width: 800px) {
    .hero img {
      width: 450px;
    }
  }

  @media screen and (max-width: 540px) {
    .message-container {
      width: 70%;ß
    }


    .hero img {
      width: 250px;
    }
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: rotateX(-10deg);
    }

    to {
      opacity: 1;
      transform: rotateX(0);
    }
  }
`;

export default Wrapper;
