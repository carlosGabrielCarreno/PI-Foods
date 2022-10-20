import styled from 'styled-components';

const ContainerPagination = styled.div`
  /* border: solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  gap: 1rem;
  margin: 1.5rem 0 1rem 0;
`;

const Item = styled.li`
  /* border: solid green; */
`;

const ValueItem = styled.button`
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
  :focus {
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

const Button = styled.button`
  transition: all 600ms;
  backdrop-filter: blur(10px);
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 5px;
  font-weight: 600;
  border: 0;
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  position: relative;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    color: #f8b525;
    background: transparent;
    border: 1px solid #f8b525;
    transform: scale(1.1);
  }
`;

export const Pagination = (props) => {
  const { allRecipes, recipesPerPage, paginado } = props;
  let pageNumber = [];
  for (
    let index = 1;
    index <= Math.ceil(allRecipes / recipesPerPage);
    index++
  ) {
    pageNumber = [...pageNumber, index];
  }
  return (
    <ContainerPagination>
      {pageNumber && (
        <>
          {pageNumber.map((number, i) => (
            <Item key={number + i}>
              <ValueItem onClick={() => paginado(number)}>{number}</ValueItem>
            </Item>
          ))}
        </>
      )}
    </ContainerPagination>
  );
};
