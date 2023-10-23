import { GridColDef, DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Request } from '../../types/request';

interface requestsTableProps {
  requests: Request[];
}

export default function RequestsTable({ requests }: requestsTableProps) {
  const columns: GridColDef[] = [
    {
      field: 'text',
      headerName: 'Texto da requisição',
      headerAlign: 'center',
      description: 'Texto com a descrição da requisição',
      flex: 25,
    },
    {
      field: 'type',
      headerName: 'Tipo da requisição',
      headerAlign: 'center',
      description: 'Tipo da requisição',
      flex: 25,
    },
    {
      field: 'isClosed',
      headerName: 'Fechada',
      headerAlign: 'center',
      description: 'Se a requisição está aberta ou fechada',
      flex: 25,
    },
    {
      field: 'createdAt',
      headerName: 'Data de criação',
      headerAlign: 'center',
      description: 'Data de abertura da requisição',
      flex: 25,
    },
  ];

  return (
    <Box
      sx={{
        width: '60%',
        height: '50%',
        minWidth: '600px',
        minHeight: '400px',
      }}
    >
      <DataGrid
        rows={requests}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10]}
      ></DataGrid>
    </Box>
  );
}
