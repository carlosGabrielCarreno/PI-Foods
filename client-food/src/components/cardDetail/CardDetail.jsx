import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailRecipe } from '../../store/actions/index';
import {
  Button,
  ContainerInfoDetail,
  DetailContainer,
  ImgDetail,
  Item,
  Text,
  TitleDetail,
} from './CardDetail.styled';
import { Load } from '../index';

export const CardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.detailRecipe);
  const { loading } = useSelector((state) => state.recipesLoading);
  const load = async (id) => {
    await dispatch(getDetailRecipe(id));
  };
  useEffect(() => {
    load(id);
  }, [id]);

  return (
    <DetailContainer>
      {!loading ? (
        <>
          <ContainerInfoDetail>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <TitleDetail>{recipe.title}</TitleDetail>
            <ImgDetail src={recipe.image} />
          </ContainerInfoDetail>
          <ContainerInfoDetail>
            <TitleDetail>
              Score: <Text>{recipe.healthScore}</Text>
            </TitleDetail>
            <TitleDetail>
              Type of Diet: <Text>{recipe.typeOfDiets}</Text>
            </TitleDetail>
            <TitleDetail>
              Cuisines: <Text>{recipe.cuisines}</Text>
            </TitleDetail>
            <TitleDetail>
              Dish Type: <Text>{recipe.dishTypes}</Text>
            </TitleDetail>

            <TitleDetail>Sumary:</TitleDetail>
            <Text>{recipe.summary}</Text>

            <TitleDetail>Instructions:</TitleDetail>
            <ul>
              {Array.isArray(recipe.analyzedInstructions) ? (
                recipe.analyzedInstructions.map((elem) => {
                  return <Item key={uuidv4()}>{elem}</Item>;
                })
              ) : (
                <p>{recipe.analyzedInstructions}</p>
              )}
            </ul>
          </ContainerInfoDetail>
        </>
      ) : (
        <>
          <Load />
        </>
      )}
    </DetailContainer>
  );
};
