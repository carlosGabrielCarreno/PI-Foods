import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredByTypeOfDiet } from '../../store/actions';
import { ContainerSelect, SelectElement } from './FilteredByTypeOfDiet.styled';

export const FilteredByTypeOfDiet = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(['']);
  const { diets } = useSelector((state) => state.diets);

  const handleSelect = (e) => {
    setValue([e.target.value]);
  };

  const onFilteredByTypeOfDiet = (e) => {
    e.preventDefault();
    const [type] = value;
    if (type.length > 0) {
      dispatch(filteredByTypeOfDiet(type));
    }
  };

  return (
    <ContainerSelect onClick={onFilteredByTypeOfDiet}>
      <SelectElement onChange={handleSelect}>
        {diets?.map((diet) => (
          <option key={diet} value={diet}>
            {diet}
          </option>
        ))}
      </SelectElement>
    </ContainerSelect>
  );
};
