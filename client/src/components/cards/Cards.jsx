import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../index';
import { ContainerCards } from './Cards.styled';
import { Load } from '../index';

export const Cards = () => {
  const { currentRecipes } = useSelector((state) => state.recipes);
  const { loading } = useSelector((state) => state.recipesLoading);

  return (
    <>
      {!loading ? (
        <>
          <ContainerCards>
            {currentRecipes?.map((recipe) => (
              <Card key={recipe.id} {...recipe} />
            ))}
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
