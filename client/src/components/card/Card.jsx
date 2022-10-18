import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  border: 0;
  background-color: #1f1c1c;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 300ms;
  position: relative;
  :hover {
    box-shadow: 0px 3px 15px rgba(248, 181, 37, 0.2);
    transform: scale(1.1);
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.6);
`;
const ContainerInfoCard = styled.div`
  /* border: solid red; */
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 1rem;
`;

const Diets = styled.h3`
  text-align: center;
  font-size: 12px;
  color: #7c7b7a;
`;

export const Card = (props) => {
  const { image, title, typeOfDiets, id } = props;
  const diets = typeOfDiets[0]?.diets.length
    ? typeOfDiets[0].diets.join(' ')
    : 'Not diets';

  return (
    <CardContainer to={`/detail/${id}`}>
      <ImgCard src={image} alt={title} />
      <ContainerInfoCard>
        <Title>{title}</Title>
        <Diets>{diets}</Diets>
      </ContainerInfoCard>
    </CardContainer>
  );
};
