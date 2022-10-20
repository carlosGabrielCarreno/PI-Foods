import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createRecipe } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import imageRecipe from '../../assets/foodCreateRecipe.jpg';
const ContainerCreateRecipe = styled.div`
  border: solid red;
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

const InputForm = styled.input`
  padding: 15px 10px;
  border: solid green;
  background-color: transparent;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70%;
  margin: 0 auto;
`;

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

  const handleSelect = (e) => {
    setValues({
      ...values,
      diets: [...values.diets, e.target.value],
    });
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

  return (
    <ContainerCreateRecipe>
      <button onClick={() => navigate(-1)}>Back</button>
      <Form onSubmit={handleSubmit}>
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
        <textarea
          onChange={handleChange}
          value={values.summary}
          name="summary"
          type="text"
          placeholder="Summary"
        />
        <textarea
          onChange={handleChange}
          value={values.analyzedInstructions}
          name="analyzedInstructions"
          type="text"
          placeholder="Add Instruction"
        />
        <select onChange={handleSelect}>
          {diets?.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
        <ul>
          {values.diets.map((diet) => (
            <li key={diet}>{diet}</li>
          ))}
        </ul>
        <button type="submit">Create Recipe</button>
      </Form>
    </ContainerCreateRecipe>
  );
};
