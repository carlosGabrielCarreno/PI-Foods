import styled from 'styled-components';

export const ContainerPagination = styled.div`
  margin: 1rem 0;
  width: 100%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ValueItem = styled.button`
  padding: 2rem;
  background-color: #111110;
  text-decoration: none;
  color: #424141;
  padding: 0.3rem;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid #424141;
  cursor: pointer;
  transition: all 300ms;
  position: relative;
  &.focus {
    box-shadow: 0px 3px 15px rgba(248, 181, 37, 0.2);
    transform: scale(1.1);
    border: 1px solid #b19346;
    color: #b19346;
  }
  :hover {
    box-shadow: 0px 3px 15px rgba(248, 181, 37, 0.173);
    transform: scale(1.1);
    border: 1px solid #a08748;
    color: #9d823e;
  }
`;
