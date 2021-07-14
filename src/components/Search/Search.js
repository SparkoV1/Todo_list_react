import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, useLocation } from "react-router";
import { useDebounce } from "../../hooks/useDebounce";
import { objectToQueryString, queryStringToObject } from "../../utils/queryStringHelpers";

const Search = () => {
  const { search } = useLocation();
  const { push } = useHistory();

  const [query, setQuery] = useState("");

  const searchDebounced = useDebounce(query, 500);
  const queryParams = search ? queryStringToObject(search) : {};

  const queryInputHandler = (e) => setQuery(e.target.value);
  const clearInputHandler = () => setQuery("");

  useEffect(() => {
    push({ search: objectToQueryString({ ...queryParams, page: "", search: query }) });
  }, [searchDebounced, push]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TextField
      label="Search query"
      variant="outlined"
      size="small"
      fullWidth
      value={query}
      margin="dense"
      onChange={queryInputHandler}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: query ? (
          <InputAdornment position="end">
            <IconButton size="small" onClick={clearInputHandler}>
              <Close />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default Search;
