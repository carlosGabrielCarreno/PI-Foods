import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredByTypeOfDiet } from '../../store/actions';

export const FilteredByTypeOfDiet = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);
  const { diets } = useSelector((state) => state.diets);

  const handleSelect = (e) => {
    setValue([e.target.value]);
  };

  const onFilteredByTypeOfDiet = (e) => {
    e.preventDefault();
    const [type] = value;
    dispatch(filteredByTypeOfDiet(type));
  };

  return (
    <div onClick={onFilteredByTypeOfDiet}>
      <select onChange={handleSelect}>
        {diets?.map((diet) => (
          <option key={diet} value={diet}>
            {diet}
          </option>
        ))}
      </select>
    </div>
  );
};
