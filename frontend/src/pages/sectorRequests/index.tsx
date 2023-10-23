import {
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { SectorService } from '../../services/SectorService';
import SectorRequestsTable from '../../components/SectorRequestsTable';
import { Sector } from '../../types/sector';

export default function SectorRequests() {
  const [selectedSector, setSelectedSector] = useState<Sector>({
    id: 0,
    name: '',
    requests: [],
  });
  const [sectors, setSectors] = useState<Sector[]>([
    { id: 0, name: '', requests: [] },
  ]);

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

  function handleChange(event: SelectChangeEvent) {
    setSelectedSector({ ...selectedSector, name: event.target.value });
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
        }}
      >
        <p>Selecione o setor que você deseja visualizar as requisições</p>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
        <SectorRequestsTable
          requests={selectedSector.requests}
        ></SectorRequestsTable>
      </div>
    </div>
  );
}
