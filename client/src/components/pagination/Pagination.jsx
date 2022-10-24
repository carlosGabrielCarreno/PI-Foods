import { ContainerPagination, Item, ValueItem } from './Pagination.styled';

export const Pagination = (props) => {
  const { allRecipes, recipesPerPage, paginado } = props;
  let pageNumber = [];
  console.log('me dibuje');
  for (
    let index = 1;
    index <= Math.ceil(allRecipes / recipesPerPage);
    index++
  ) {
    pageNumber = [...pageNumber, index];
  }
  return (
    <ContainerPagination>
      {pageNumber.map((number, i) => (
        <ValueItem
          key={number + i}
          onClick={() => {
            console.log('Hola');
            paginado(number);
          }}
        >
          {number}
        </ValueItem>
      ))}
    </ContainerPagination>
  );
};
