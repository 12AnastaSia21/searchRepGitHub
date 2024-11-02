import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './stores/store';
import { selectRepo, fetchRepositories, fetchTopics } from './stores/slices/githubSlice';
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import "./RepositoryInfo.sass";
import { Typography } from "@mui/material";
import { useEffect } from 'react';

interface RepositoryInfoProps {
  query: string;
}

export default function RepositoryInfo({ query }: RepositoryInfoProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { repositories, loading, error } = useSelector((state: RootState) => state.github);

  useEffect(() => {
    if (query) {
      dispatch(fetchRepositories(query)); 
    }
  }, [dispatch, query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const rows = repositories.map((repo) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language,
    forks_count: repo.forks_count,
    stargazers_count: repo.stargazers_count,
    dateOfUpdate: new Date(repo.updated_at).toLocaleDateString(),
  }));

  const handleRowClick = (params: GridRowParams) => {
    const repo = repositories.find((repo) => repo.id === params.id);
    if (repo) {
      dispatch(selectRepo(repo));
      dispatch(fetchTopics({ owner: repo.owner.login, repo: repo.name }));
    }
  };

  return (
    <div className="search-results">
      <Typography className="search-message" variant="h1" gutterBottom>
        Результаты поиска
      </Typography>
      <DataGrid
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pagination
        pageSizeOptions={[10, 15]}
        style={{ border: "none" }}
        className="rep-info"
        showColumnVerticalBorder={false}
        showCellVerticalBorder={false}
        hideFooterSelectedRowCount={true}
        disableColumnMenu={true}
        disableColumnResize={true}
        ignoreDiacritics={true}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Название",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "language",
    headerName: "Язык",
    type: "string",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "forks_count",
    headerName: "Число форков",
    type: "number",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "stargazers_count",
    headerName: "Число звезд",
    type: "number",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "dateOfUpdate",
    headerName: "Дата обновления",
    type: "string",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
];