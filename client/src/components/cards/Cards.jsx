import styled from 'styled-components';
import { Card } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { getRecipes } from '../../store/actions';
import { Pagination } from '../pagination/Pagination';

const ContainerCards = styled.div`
  /*  border: solid green; */
  border: 0;
  width: 100%;
  height: 100%;
  /* height: 100vh;
  width: 100vw; */
  display: grid;
  gap: 1rem;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  margin: 1rem 0;
`;

export const Cards = () => {
  const { loading } = useSelector((state) => state.recipesLoading);
  const { allRecipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

  const curr = useMemo(() => dispatch(getRecipes()), [allRecipes]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Pagination
        allRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage}
        paginado={paginado}
      />
      <ContainerCards>
        {!loading ? (
          <>
            {currentRecipes?.map((recipe) => (
              <Card key={recipe.id} {...recipe} />
            ))}
          </>
        ) : (
          <>
            <h1>Load...</h1>
          </>
        )}
      </ContainerCards>
    </>
  );
};
