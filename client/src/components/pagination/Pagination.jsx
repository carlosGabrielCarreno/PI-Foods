import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setRecipesPerPage } from '../../store/actions';
import { ContainerPagination, ValueItem } from './Pagination.styled';

export const Pagination = () => {
  const { allRecipes, recipesPerPage } = useSelector((state) => state.recipes);
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
    console.log('number:', number);
    paginado(number);
  };

  return (
    <ContainerPagination>
      {pagesNumbers.map((number) => (
        <ValueItem key={uuidv4()} onClick={() => handlePagination(number)}>
          {number}
        </ValueItem>
      ))}
    </ContainerPagination>
  );
};
