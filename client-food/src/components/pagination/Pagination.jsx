import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberPageActive, setRecipesPerPage } from '../../store/actions';
import { ContainerPagination, ValueItem } from './Pagination.styled';

export const Pagination = () => {
  const { allRecipes, recipesPerPage, currentPage } = useSelector(
    (state) => state.recipes
  );

  const { pageActive } = useSelector((state) => state.statusPagination);

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
    dispatch(setNumberPageActive(parseInt(number)));
    paginado(number);
  };

  return (
    <ContainerPagination>
      {pagesNumbers.map((number) => (
        <ValueItem
          className={`${
            parseInt(number) == parseInt(pageActive) ? 'focus' : ''
          }`}
          key={number}
          onClick={() => handlePagination(number)}
        >
          {number}
        </ValueItem>
      ))}
    </ContainerPagination>
  );
};
