//styles
import {
  ContainerSearchBar,
  ContainerSearchInput,
  ContainerSearchIcon,
  SearchIcon,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <ContainerSearchBar>
      <ContainerSearchInput>
        <ContainerSearchIcon>
          <SearchIcon fontSize="small" />
        </ContainerSearchIcon>
        <SearchInput type="text" placeholder="Search for a recipe..." />
      </ContainerSearchInput>
    </ContainerSearchBar>
  );
};
