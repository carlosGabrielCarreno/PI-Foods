import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../store/actions';

import {
  ContainerSearchBar,
  ContainerSearchInput,
  ContainerSearchIcon,
  SearchIcon,
  SearchInput,
  ButtonSearchbar,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const onSubmitSearching = (event) => {
    event.preventDefault();
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
      </ContainerSearchInput>
      <ButtonSearchbar onClick={onSubmitSearching}>Search</ButtonSearchbar>
    </ContainerSearchBar>
  );
};
