import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { createRecipe } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
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
  SpanCheck,
  ListItemChecked,
  MessageAlert,
} from './CreateRecipe.styled';
import { SelectElement } from '../buttons/FilteredByTypeOfDiet.styled';
import { getCusines } from '../../helpers';

export const CreateRecipe = () => {
  // inputs checkbox
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    //console.log(checkedState);
  };
  //
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { diets } = useSelector((state) => state.diets);
  const cusinesArr = getCusines();
  const [missingData, setMissingData] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    'vegan',
    'glutenFree',
    'vegetarian',
  ]);
  const [values, setValues] = useState({
    title: '',
    image: imageRecipe,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    summary: '',
    healthScore: '',
    analyzedInstructions: '',
    cuisines: [],
    dishTypes: ['not dish types'],
    diets: [],
  });
  const handleChange = (e) => {
    console.log(e.target.value);
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

  const handleCusines = ({ target }) => {
    if (!values.cuisines.includes(target.value)) {
      setValues({
        ...values,
        cuisines: [...values.cuisines, target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.vegan = checkedState[0];
    values.glutenFree = checkedState[1];
    values.vegetarian = checkedState[2];
    console.log('lo que se despacha:', values);
    if (
      values.title.length > 1 &&
      values.diets.length > 1 &&
      values.cuisines.length > 1 &&
      values.summary.length > 1 &&
      values.healthScore.length > 1
    ) {
      values.healthScore = parseInt(values.healthScore);
      dispatch(createRecipe(values));
      alert('recipe create!');
      setValues({
        title: '',
        image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: '',
        healthScore: '',
        analyzedInstructions: '',
        cuisines: [],
        dishTypes: ['not dish types'],
        diets: [],
      });
      setMissingData(false);
      navigate(-1);
    } else {
      //alert('missing data');
      setMissingData(!missingData);
    }
  };

  const onFilter = (value, list) => {
    setValues({
      ...values,
      [list]: values[list].filter((item) => item !== value),
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
            type="text"
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
              <option key={uuidv4()} value={diet}>
                {diet}
              </option>
            ))}
          </SelectElement>
          <ContainerItems>
            {values.diets.map((diet) => (
              <Item key={uuidv4()}>
                {diet}
                <Span onClick={() => onFilter(diet, 'diets')}>x</Span>
              </Item>
            ))}
          </ContainerItems>
        </ContainerFormInputs>
        <ContainerFormInputs>
          <SelectElement onChange={handleCusines}>
            {cusinesArr?.map((cusine) => (
              <option key={uuidv4()} value={cusine}>
                {cusine}
              </option>
            ))}
          </SelectElement>
          <ContainerItems>
            {values.cuisines.map((cusine) => (
              <Item key={uuidv4()}>
                {cusine}
                <Span onClick={() => onFilter(cusine, 'cuisines')}>x</Span>
              </Item>
            ))}
          </ContainerItems>
          <ListItemChecked>
            {checkboxes.map((check, index) => {
              return (
                <label key={uuidv4()}>
                  <SpanCheck>{check}: </SpanCheck>
                  <InputForm
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={check}
                    value={check}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                </label>
              );
            })}
          </ListItemChecked>
        </ContainerFormInputs>
        <Button type="submit">Create Recipe</Button>
        <MessageAlert className={`span ${missingData ? 'alert' : ''}`}>
          {missingData ? (
            <>
              Missing Data <ErrorIcon fontSize="small" />
            </>
          ) : (
            <></>
          )}
        </MessageAlert>
      </Form>
    </ContainerCreateRecipe>
  );
};
