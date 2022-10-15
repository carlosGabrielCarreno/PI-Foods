import styled from 'styled-components';
import { Card } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from '../../store/actions';

const ContainerCards = styled.div`
  border: solid red;
  width: 100%;
  height: 100%;
  height: 100vh;
  width: 100vw;

  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Cards = () => {
  const loading = useSelector((state) => state.recipesLoading.loading);
  const {
    recipes: { allRecipes },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(allRecipes);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <ContainerCards>
      {!loading ? (
        <>
          {/*  {allRecipes?.map((recipe) => {
            console.log(recipe);
            <Card key={recipe.id} {...recipe} />;
          })} */}
        </>
      ) : (
        <>
          <h1>Load...</h1>
        </>
      )}
    </ContainerCards>
  );
};
