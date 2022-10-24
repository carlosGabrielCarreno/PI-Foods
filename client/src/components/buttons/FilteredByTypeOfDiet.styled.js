import styled from 'styled-components';

export const ContainerSelect = styled.div`
  /* border: solid red; */
`;

export const SelectElement = styled.select`
  outline: none;
  /* appearance: none; */
  border: 0;
  height: 40px;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 10px;
  color: #111110;
  background: linear-gradient(to right, #ffd160, #f8b525);
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
`;
