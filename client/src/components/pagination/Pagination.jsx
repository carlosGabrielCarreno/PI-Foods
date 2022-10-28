import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setRecipesPerPage } from '../../store/actions';
import { ContainerPagination, Item, ValueItem } from './Pagination.styled';

export const Pagination = () => {
  const { allRecipes, recipesPerPage } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const paginado = (numPage) => {
    dispatch(setRecipesPerPage(numPage));
  };

  let pageNumber = [];
  console.log('me dibuje');
  for (
    let index = 1;
    index <= Math.ceil(allRecipes.length / recipesPerPage);
    index++
  ) {
    pageNumber = [...pageNumber, index];
  }
  return (
    <ContainerPagination>
      {pageNumber.map((number, i) => (
        <ValueItem
          key={uuidv4()}
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
