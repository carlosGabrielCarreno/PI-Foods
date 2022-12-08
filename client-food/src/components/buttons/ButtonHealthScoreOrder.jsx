import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderRecipesByHealthScore } from '../../store/actions';
import { ButtonOrder } from './Buttons.styled';

export const ButtonHealthScoreOrder = () => {
  const dispatch = useDispatch();
  const [orderByHealthScore, setOrderByHealthScore] = useState(
    'order-by-healthScore'
  );

  const handlerOrderByHealthScore = (event) => {
    event.preventDefault();
    setOrderByHealthScore(
      orderByHealthScore === 'order-by-healthScore'
        ? 'reset-order'
        : 'order-by-healthScore'
    );
    dispatch(
      orderRecipesByHealthScore(
        orderByHealthScore === 'order-by-healthScore' ? true : false
      )
    );
  };

  return (
    <>
      <ButtonOrder onClick={(event) => handlerOrderByHealthScore(event)}>
        {orderByHealthScore}
      </ButtonOrder>
    </>
  );
};
