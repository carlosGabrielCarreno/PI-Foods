import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  border: solid green;
  width: 290px;
  height: 290px;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 50%;
`;
const ContainerInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h2`
  text-align: center;
  color: #fff;
`;

export const Card = (props) => {
  const { image, title, typeOfDiets } = props;
  console.log(typeOfDiets);
  return (
    <CardContainer>
      <ImgCard src={image} alt={title} />
      <ContainerInfoCard>
        <Title>{title}</Title>
      </ContainerInfoCard>
    </CardContainer>
  );
};
