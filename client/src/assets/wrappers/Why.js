import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 60px;
    letter-spacing: 3px;
  }

  span {
    color: #AF0000;
  }

  .swiper {
    height: 400px;
    width: 70%;
  }

  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 80%;

  }

  .slide img {
    width: 200px;
  }

  .info h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

`;

export default Wrapper;
