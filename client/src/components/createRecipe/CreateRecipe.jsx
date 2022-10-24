import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createRecipe } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import imageRecipe from '../../assets/foodCreateRecipe.jpg';
import {
  ContainerCreateRecipe,
  InputForm,
  Form,
  TextArea,
  Button,
  Item,
  ContainerItems,
  Span,
  ContainerFormInputs,
} from './CreateRecipe.styled';
import { SelectElement } from '../buttons/FilteredByTypeOfDiet.styled';

export const CreateRecipe = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { diets } = useSelector((state) => state.diets);
  const [values, setValues] = useState({
    title: '',
    image: imageRecipe,
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    summary: '',
    healthScore: '',
    analyzedInstructions: '',
    cuisines: ['african', 'argento'],
    dishTypes: ['pescao', 'nose'],
    diets: [],
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = ({ target }) => {
    if (!values.diets.includes(target.value)) {
      setValues({
        ...values,
        diets: [...values.diets, target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipe(values));
    setValues({
      title: '',
      image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      summary: '',
      healthScore: '',
      analyzedInstructions: '',
      cuisines: ['african', 'argento'],
      dishTypes: ['pescao', 'nose'],
      diets: [],
    });
    alert('recipe create!');
    navigate('/recipes');
  };

  const onFilter = (diet) => {
    setValues({
      ...values,
      diets: values.diets.filter((item) => item !== diet),
    });
  };

  return (
    <ContainerCreateRecipe>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Form onSubmit={handleSubmit}>
        <ContainerFormInputs>
          <InputForm
            onChange={handleChange}
            value={values.title}
            name="title"
            type="text"
            placeholder="Title"
          />
          <InputForm
            onChange={handleChange}
            value={values.healthScore}
            name="healthScore"
            type="number"
            placeholder="Score"
          />
          <TextArea
            onChange={handleChange}
            value={values.summary}
            name="summary"
            type="text"
            placeholder="Summary"
          />
          <TextArea
            onChange={handleChange}
            value={values.analyzedInstructions}
            name="analyzedInstructions"
            type="text"
            placeholder="Add Instruction"
          />
        </ContainerFormInputs>
        <ContainerFormInputs>
          <SelectElement onChange={handleSelect}>
            {diets?.map((diet) => (
              <option key={diet} value={diet}>
                {diet}
              </option>
            ))}
          </SelectElement>
          <ContainerItems>
            {values.diets.map((diet) => (
              <Item key={diet}>
                {diet}
                <Span onClick={() => onFilter(diet)}>x</Span>
              </Item>
            ))}
          </ContainerItems>
        </ContainerFormInputs>
        <Button type="submit">Create Recipe</Button>
      </Form>
    </ContainerCreateRecipe>
  );
};
