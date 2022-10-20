import styled, { keyframes } from 'styled-components';
import { Card } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { getRecipes } from '../../store/actions';

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

const loadRecipes = async (dispatch) => {
  await dispatch(getRecipes());
};

export const Cards = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.recipesLoading);
  const { allRecipes } = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    loadRecipes(dispatch);
  }, []);

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
