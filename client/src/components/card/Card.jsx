import {
  CardContainer,
  ContainerInfoCard,
  Diets,
  ImgCard,
  Title,
} from './Card.styled';

export const Card = (props) => {
  const { image, title, typeOfDiets, id, healthScore } = props;
  const diets = typeOfDiets[0]?.diets.length
    ? typeOfDiets[0].diets.join(', ')
    : 'Not diets';

  return (
    <CardContainer to={`/detail/${id}`}>
      <ImgCard src={image} alt={title} />
      <ContainerInfoCard>
        <Title>{title}</Title>
        <Title>Score: {healthScore}</Title>
        <Diets>{diets}</Diets>
      </ContainerInfoCard>
    </CardContainer>
  );
};
