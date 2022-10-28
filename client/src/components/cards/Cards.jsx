import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../store/actions';
import { Card } from '../index';
import { Pagination } from '../pagination/Pagination';
import { ContainerCards } from './Cards.styled';
import { Load } from '../index';

export const Cards = () => {
  const dispatch = useDispatch();
  const { allRecipes } = useSelector((state) => state.recipes);
  const { loading } = useSelector((state) => state.recipesLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexLastRecipe = currentPage * recipesPerPage;
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  return (
    <>
      {!loading ? (
        <>
          <Pagination
            allRecipes={allRecipes.length}
            recipesPerPage={recipesPerPage}
            paginado={paginado}
          />
          <ContainerCards>
            {currentRecipes.length ? (
              <>
                {currentRecipes.map((recipe) => (
                  <Card key={recipe.id} {...recipe} />
                ))}
              </>
            ) : (
              //cuando no capta que hay recipes en la paginacion actual!
              <>
                {allRecipes.map((recipe) => (
                  <Card key={recipe.id} {...recipe} />
                ))}
              </>
            )}
          </ContainerCards>
        </>
      ) : (
        <>
          <Load />
        </>
      )}
    </>
  );
};
