import { useDispatch, useSelector } from 'react-redux';
import { setRecipesPerPage } from '../../store/actions';
import { ContainerPagination, ValueItem } from './Pagination.styled';

export const Pagination = () => {
  const { allRecipes, recipesPerPage, currentPage } = useSelector(
    (state) => state.recipes
  );
  const dispatch = useDispatch();

  const paginado = (numPage) => {
    dispatch(setRecipesPerPage(numPage));
  };

  let pagesNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(allRecipes.length / recipesPerPage);
    index++
  ) {
    pagesNumbers = [...pagesNumbers, index];
  }

  const handlePagination = (number) => {
    paginado(number);
  };

  const isAutoFocus = (numberPage) => currentPage === numberPage && 'autoFocus';

  return (
    <ContainerPagination>
      {pagesNumbers.map((number) => (
        <ValueItem key={number} onClick={() => handlePagination(number)}>
          {number}
        </ValueItem>
      ))}
    </ContainerPagination>
  );
};
