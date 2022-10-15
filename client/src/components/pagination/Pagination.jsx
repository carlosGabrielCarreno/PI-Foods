import styled from 'styled-components';

const ContainerPagination = styled.div`
  /* border: solid red; */
  display: grid;
  gap: 1rem;
  grid-auto-rows: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(1.7rem, 1fr));

  width: 50%;
  margin: 1.5rem 0 1rem 0;
`;

const list = styled.ul``;

const Item = styled.li`
  /* border: solid green; */
`;

const ValueItem = styled.a`
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
  :hover {
    box-shadow: 0px 3px 15px rgba(248, 181, 37, 0.2);
    transform: scale(1.1);
    border: 1px solid #b19346;
    color: #b19346;
  }
`;

export const Pagination = (props) => {
  const { allRecipes, recipesPerPage, paginado } = props;
  let pageNumber = [];
  for (
    let index = 0;
    index <= Math.ceil(allRecipes / recipesPerPage);
    index++
  ) {
    pageNumber = [...pageNumber, index];
  }

  return (
    <ContainerPagination>
      {pageNumber &&
        pageNumber.map((number, i) => (
          <Item key={number + i}>
            <ValueItem onClick={() => paginado(number)}>{number}</ValueItem>
          </Item>
        ))}
    </ContainerPagination>
  );
};
