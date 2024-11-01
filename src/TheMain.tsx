import TheWelcomePage from "./TheWelcomePage";
import RepositoryInfo from "./RepositoryInfo";

interface TheMainProps {
  isSearching: boolean;
  searchQuery: string; // Добавляем пропс для текста поиска
}

export default function TheMain({ isSearching, searchQuery }: TheMainProps) {
  return (
    <>
      {isSearching ? <RepositoryInfo query={searchQuery} /> : <TheWelcomePage />}
    </>
  );
}