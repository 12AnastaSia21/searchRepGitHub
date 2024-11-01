import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './stores/store';
import { fetchRepositories } from './stores/slices/githubSlice';
import Button from "@mui/material/Button";
import './TheSearchAppBar.sass';

interface TheSearchAppBarProps {
  onSearch: (query: string) => void; // Изменяем тип onSearch
}

export default function TheSearchAppBar({ onSearch }: TheSearchAppBarProps) {
  const [query, setQuery] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchRepositories(query));
      onSearch(query); // Передаем query в onSearch
    }
  };

  return (
    <div className="header-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите поисковый запрос"
          />
          <Button variant="contained" size="large" color="primary" onClick={handleSearch}>
            Искать
          </Button>
        </div>
      </form>
    </div>
  );
}