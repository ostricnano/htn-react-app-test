import iconSearch from "@/assets/icons/Icon-search.png";
import { searchStyles } from "./search-bar-styles";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box sx={searchStyles.searchBarContainer}>
      <Box
        component="input"
        sx={{
          ...searchStyles.searchInput,
          "&::placeholder": {
            ...searchStyles.searchInputPlaceholder,
          },
          "&:focus": {
            ...searchStyles.searchInputFocus,
          },
          "&:active": {
            ...searchStyles.searchInputFocus,
          },
        }}
        type="text"
        placeholder="Search what you want to watch"
      />
      <Box
        sx={searchStyles.searchIcon}
        component="img"
        className="search-icon"
        src={iconSearch}
      />
    </Box>
  );
};

export default SearchBar;
