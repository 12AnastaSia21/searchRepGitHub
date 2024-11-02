import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./stores/store";
import { fetchRepositories } from "./stores/slices/githubSlice";
import Button from "@mui/material/Button";
import "./TheSearchAppBar.sass";

interface TheSearchAppBarProps {
  onSearch: (query: string) => void;
}

export default function TheSearchAppBar({ onSearch }: TheSearchAppBarProps) {
  const [query, setQuery] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchRepositories(query));
      onSearch(query);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="header-container">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Введите поисковый запрос"
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSearch}
          >
            Искать
          </Button>
        </div>
      </form>
    </div>
  );
}
