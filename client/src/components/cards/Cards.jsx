import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { getRecipes } from '../../store/actions';
import { Card } from '../index';
import { Pagination } from '../pagination/Pagination';

const ContainerCards = styled.div`
  /*  border: solid green; */
  border: 0;
  width: 100%;
  height: 100%;
  /* height: 100vh;
  width: 100vw; */
  display: grid;
  gap: 2rem;
  grid-auto-rows: 23rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  margin: 1rem 0;
`;

/* const loadRecipes = async (dispatch) => {
  await dispatch(getRecipes());
};
 */
export const Cards = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.recipesLoading);
  const { allRecipes } = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

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
            {allRecipes.length > 0 ? (
              <>
                {currentRecipes.map((recipe) => (
                  <Card key={recipe.id} {...recipe} />
                ))}
              </>
            ) : (
              <>
                <h1>Recipes not Found</h1>
              </>
            )}
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
