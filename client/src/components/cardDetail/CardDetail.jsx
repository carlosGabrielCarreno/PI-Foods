import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getDetailRecipe } from '../../store/actions/index';

const DetailContainer = styled.div`
  border: solid red;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    height: 50%;
  }
`;

const Button = styled.button`
  width: 20%;
  padding: 15px 10px;
  border: 0;
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    color: #f8b525;
    background: transparent;
    border: 1px solid #f8b525;
  }
  @media (min-width: 700px) {
    padding: 10px 10px;
  }
`;

const TitleDetail = styled.h2`
  font-size: 16px;
  color: #fbc13e;
  @media (min-width: 400px) {
    font-size: 20px;
    margin: 0.5rem 0;
  }
`;

const ImgDetail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  @media (min-width: 700px) {
    width: 100%;
    height: 300px;
  }
  @media (min-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;

const Item = styled.li`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 0.2rem;
`;

const ContainerInfoDetail = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
  }
`;

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
              {recipe.analyzedInstructions?.map((elem) => {
                return <Item key={uuidv4()}>{elem}</Item>;
              })}
            </ul>
          </ContainerInfoDetail>
        </>
      ) : (
        <>
          <h1>loading</h1>
        </>
      )}
    </DetailContainer>
  );
};
