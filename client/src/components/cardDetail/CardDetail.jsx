import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getDetailRecipe } from '../../store/actions/index';

const DetailContainer = styled.div`
  color: #fff;
`;

export const CardDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  const load = async (id) => {
    const detailRecipe = await getDetailRecipe(id);
    setRecipe(detailRecipe);
  };
  useEffect(() => {
    load(id);
  }, [id]);

  console.log(recipe);

  return <DetailContainer>CardDetail</DetailContainer>;
};
