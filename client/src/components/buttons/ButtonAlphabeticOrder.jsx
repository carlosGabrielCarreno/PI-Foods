import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByAlphabetRecipes } from '../../store/actions';
import { ButtonOrder } from './Buttons.styled';

export const ButtonAlphabeticOrder = () => {
  const dispatch = useDispatch();
  const [orderAlphabetic, setOrderAlphabetic] = useState('z-a');

  const handlerOrderAlphabetic = (event) => {
    event.preventDefault();
    setOrderAlphabetic(orderAlphabetic === 'z-a' ? 'a-z' : 'z-a');
    dispatch(orderByAlphabetRecipes(true));
  };

  return (
    <>
      <ButtonOrder onClick={(event) => handlerOrderAlphabetic(event)}>
        {orderAlphabetic}
      </ButtonOrder>
    </>
  );
};
