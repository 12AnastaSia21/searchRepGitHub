import Button from "@mui/material/Button";
import './TheSearchAppBar.sass'

export default function TheSearchAppBar() {
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
