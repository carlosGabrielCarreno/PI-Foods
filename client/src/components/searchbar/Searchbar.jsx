//styles
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../store/actions';
import {
  ContainerSearchBar,
  ContainerSearchInput,
  ContainerSearchIcon,
  SearchIcon,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const onSubmitSearching = (e) => {
    e.preventDefault();
    dispatch(getRecipesByName(searchTerm));
    setSearchTerm('');
  };

  return (
    <ContainerSearchBar>
      <ContainerSearchInput>
        <ContainerSearchIcon>
          <SearchIcon fontSize="small" />
        </ContainerSearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button onClick={onSubmitSearching}>Search</button>
      </ContainerSearchInput>
    </ContainerSearchBar>
  );
};
