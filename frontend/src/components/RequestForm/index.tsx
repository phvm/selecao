import {
  TextField,
  MenuItem,
  InputLabel,
  Button,
  Box,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Request, RequestType } from '../../types/request';
import { RequestService } from '../../services/RequestService';
import { Sector } from '../../types/sector';
import { SectorService } from '../../services/SectorService';

interface RequestFormProps {
  changeDisplay: () => void;
}

export default function RequestForm({ changeDisplay }: RequestFormProps) {
  useEffect(() => {
    RequestService.getRequestTypes().then((response) => {
      const { data } = response;
      const allRequestTypes: RequestType[] = data.map((requestType) => ({
        type: requestType.type,
        id: requestType.id,
      }));
      setRequestTypes(allRequestTypes);
    });
  }, []);

  useEffect(() => {
    SectorService.getSectors().then((response) => {
      const { data } = response;
      const allSectors: Sector[] = data.map((sector) => ({
        id: sector.id,
        name: sector.name,
        requests: sector.requests,
      }));
      setSectors(allSectors);
    });
  }, []);

  async function submitRequest() {
    changeDisplay();
    RequestService.createRequest(newRequest);
  }

  function handleChange(event: SelectChangeEvent) {
    setNewRequest({ ...newRequest, requestType: event.target.value });
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewRequest({ ...newRequest, text: event.target.value });
  }

  function handleSectorChange(event: SelectChangeEvent) {
    setSelectedSector({ ...selectedSector, name: event.target.value });
  }

  const [newRequest, setNewRequest] = useState<Request>({
    text: '',
    requestType: '',
  });

  const [requestTypes, setRequestTypes] = useState<RequestType[]>([
    {
      type: '',
    },
  ]);

  const [sectors, setSectors] = useState<Sector[]>([
    { id: 0, name: '', requests: [] },
  ]);

  const [selectedSector, setSelectedSector] = useState<Sector>({
    id: 0,
    name: '',
    requests: [],
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '220px',
        width: '30%',
        borderRadius: '8px',
        padding: '10px 40px',
        border: '1px solid #373737',
      }}
    >
      <FormControl sx={{ margin: '20px 0' }}>
        <InputLabel id="sector-select">Sector</InputLabel>
        <Select
          id="sector-select"
          value={selectedSector?.name}
          onChange={handleChange}
        >
          {sectors?.map((sector) => {
            return (
              <MenuItem value={sector.name} key={sector.id}>
                {sector.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="type-selector">Tipo da Requisição</InputLabel>
        <Select
          id="type-selector"
          value={newRequest.requestType}
          onChange={handleSectorChange}
        >
          {requestTypes?.map((requestType) => {
            return (
              <MenuItem value={requestType.type} key={requestType.id}>
                {requestType.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <TextField
        required
        multiline
        placeholder="Descrição da requisição"
        label="Texto"
        onChange={handleTextChange}
        sx={{ margin: '20px 0' }}
      ></TextField>
      <Button
        type="button"
        variant="contained"
        sx={{ margin: '20px 0' }}
        onClick={() => submitRequest}
      >
        Enviar requisição
      </Button>
    </Box>
  );
}
