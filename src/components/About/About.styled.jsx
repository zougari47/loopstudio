import styled from 'styled-components';
import { device } from '../../global-styled';

export const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/src/img/mobile/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  @media ${device.md} {
    background-image: url('/src/img/desktop/image-hero.jpg');
    background-position: center;
    max-width: 1500px;
    max-height: 900px;
    margin: auto;
  }

  h1 {
    padding: 1rem;
    width: 80%;
    color: var(--White);
    border: 0.1rem solid var(--White);
    overflow: hidden;
    margin-left: 10%;
    @media ${device.sm} {
      max-width: 400px;
    }

    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.1rem;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.2;
  }
`;
