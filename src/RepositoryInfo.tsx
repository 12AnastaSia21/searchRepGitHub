import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import {
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import "./RepositoryInfo.sass";
import { Typography } from "@mui/material";

export default function RepositoryInfo() {
  return (
      <div className="search-results">
        <Typography className="search-message" variant="h1" gutterBottom>
          Результаты поиска
        </Typography>
        <DataGrid
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pagination
          pageSizeOptions={[10, 15]}
          style={{border: "none"  }} 
          className="rep-info"
          showColumnVerticalBorder={false}
          showCellVerticalBorder={false}
          hideFooterSelectedRowCount={true}
          disableColumnMenu={true}
          disableColumnResize={true}
          ignoreDiacritics={true}
          rows={rows}
          columns={columns}
          
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
    field: "forks",
    headerName: "Число форков",
    type: "number",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "stars",
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
    type: "date",
    flex: 20,
    editable: false,
    align: "left",
    headerAlign: "left",
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    language: "JS",
    forks: 4,
    stars: 555,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    language: "C",
    forks: 45,
    stars: 66666,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    language: "TS",
    forks: 66,
    stars: 24545,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    language: "Ruby",
    forks: 555,
    stars: 25,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 6,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 7,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 8,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 9,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 10,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 11,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 12,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 13,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 14,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 15,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 16,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
  {
    id: 17,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },{
    id: 18,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },{
    id: 19,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },{
    id: 20,
    name: randomTraderName(),
    language: "Java",
    forks: 122,
    stars: 234,
    dateOfUpdate: randomUpdatedDate(),
  },
];
