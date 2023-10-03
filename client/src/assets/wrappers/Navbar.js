import styled from "styled-components";
import bars from "../images/bars.svg";
import close from "../images/close.svg";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 0 1.5rem;

  .logo {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
  }

  .toggle {
    display: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link,
  .auth-link {
    font-size: 0.8rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .nav-link::after,
  .mobile-link:not(:last-child)::after {
    display: block;
    content: "";
    background-color: black;
    width: 0;
    height: 1px;
    margin: 0 auto;
    transition: 0.3s ease-in-out;
  }

  .nav-link:hover:after,
  .mobile-link:hover:after {
    width: 100%;
  }

  .auth-links {
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .auth-link {
    font-weight: 500;
  }

  .mobile-nav {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    background-color: white;
    transform-origin: top;
    transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -o-transform: scale(1, 0);
  }

  .mobile-link {
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .mobile-nav.active {
    margin: 0 auto;
    inset: 0;
    z-index: 2;
    animation: transitionIn 0.5s ease-in-out;
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
  }

  @media screen and (max-width: 1024px) {
    .toggle {
      display: block;
      position: absolute;
      right: 5%;
      background-image: url(${bars});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 30px;
      height: 30px;
      z-index: 5;
      cursor: pointer;
    }

    .toggle.active {
      background-image: url(${close});
      background-size: 25px;
    }

    .nav-links,
    .auth-links {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-height: 0;
      opacity: 0;
      transform-origin: top;
      transform: scale(1, 0);
      -webkit-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -o-transform: scale(1, 0);
    }

    padding-left: 1rem;
  }

  @media screen and (max-width: 400px) {
    padding-left: 0rem;
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
