import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  alphabeticOrder,
  orderByAlphabetRecipes,
  orderRecipesByHealthScore,
} from '../../store/actions';

export const BtnAlphabeticalOrder = () => {
  const dispatch = useDispatch();

  const [orderAlphabetic, setOrderAlphabetic] = useState('z-a');
  const [orderByHealthScore, setOrderByHealthScore] = useState(
    'order-by-healthScore'
  );

  const handlerOrderAlphabetic = (event) => {
    event.preventDefault();
    setOrderAlphabetic(orderAlphabetic === 'z-a' ? 'a-z' : 'z-a');
    dispatch(orderByAlphabetRecipes(true));
  };

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
    <div>
      <button onClick={(e) => handlerOrderAlphabetic(e)}>
        {orderAlphabetic}
      </button>
      <button onClick={(e) => handlerOrderByHealthScore(e)}>
        {orderByHealthScore}
      </button>
    </div>
  );
};
