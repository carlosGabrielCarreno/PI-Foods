import styled, { keyframes } from 'styled-components';

export const ContainerCards = styled.div`
  /* border: solid green; */
  border: 0;
  width: 100%;
  height: 100%;
  /* height: 100vh;
width: 100vw; */
  display: grid;
  gap: 2rem;
  grid-auto-rows: 23rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  margin: 1rem 0;
`;
