import Button from "@mui/material/Button";
import './SearchBar.sass'

export default function SearchAppBar() {
  return (
    
      <div className="header-container">
        <form className="search-form">
          <div className="search-container">
            <input className="search-input"
              type="search"
              placeholder="Введите поисковый запрос"
            />
            <Button variant="contained" size="large" color="primary" >
              Искать
            </Button>
          </div>
        </form>
      </div>
    
  );
}
