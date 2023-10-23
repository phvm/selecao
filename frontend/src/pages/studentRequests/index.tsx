import RequestsTable from '../../components/RequestsTable';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Request } from '../../types/request';
import { StudentService } from '../../services/StudentService';
import RequestForm from '../../components/RequestForm/index';

interface StudentRequestsProps {
  user: string;
}

export default function StudentRequests({ user }: StudentRequestsProps) {
  const [newRequest, setNewRequest] = useState<boolean>(false);
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 0,
      text: '',
      requestType: '',
      isClosed: false,
      createdAt: new Date(),
    },
  ]);

  function changeFormDisplay() {
    setNewRequest(!newRequest);
  }

  useEffect(() => {
    StudentService.getStudentRequests(user).then((response) => {
      const { data } = response;
      const allRequests: Request[] = data.map((request) => ({
        id: request.id,
        text: request.text,
        requestType: request.requestType,
        isClosed: request.isClosed,
        createdAt: request.createdAt,
      }));
      setRequests(allRequests);
    });
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '25px 0',
      }}
    >
      <h3>Requisições já realizadas pelo usuário</h3>
      <RequestsTable requests={requests}></RequestsTable>
      <Button
        type="button"
        variant="contained"
        sx={{ margin: '20px 0' }}
        onClick={() => changeFormDisplay()}
      >
        {newRequest ? 'Encerrar requisição' : 'Abrir nova requisição'}
      </Button>
      {newRequest && <RequestForm changeDisplay={changeFormDisplay} />}
    </Box>
  );
}
