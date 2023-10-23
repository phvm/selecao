import { memo } from 'react';
import { IconButton, Tooltip } from '@mui/material';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = memo((props: CloseButtonProps) => {
  const { onClick } = props;

  return (
    <Tooltip title="Fecha requisição">
      <IconButton
        onClick={async () => {
          onClick();
        }}
        sx={{ color: '#db1e2f' }}
      ></IconButton>
    </Tooltip>
  );
});
