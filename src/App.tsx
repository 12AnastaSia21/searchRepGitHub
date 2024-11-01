import { useState } from 'react';
import "./App.sass";
import TheSearchAppBar from "./TheSearchAppBar";
import TheFooter from "./TheFooter";
import TheSidebar from "./TheSidebar";
import TheMain from "./TheMain";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Состояние для поиска

  const handleSearch = (query: string) => {
    setIsSearching(true);
    setSearchQuery(query); // Сохраняем введенный запрос
  };

  return (
    <>
      <div className="app-container">
        <TheSearchAppBar onSearch={handleSearch} />
        <div className="body">
          <div className="content">
            <TheMain isSearching={isSearching} searchQuery={searchQuery} /> {/* Передаем searchQuery */}
          </div>
          {isSearching && <TheSidebar />}
        </div>
        <TheFooter />
      </div>
    </>
  );
}

export default App;