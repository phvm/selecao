import { StudentService } from '../../services/StudentService';
import { Links } from '../../links';
import { Student } from '../../types/student';
import { LoginForm } from './styles';
import { TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
interface HomeProps {
  student: Student;
  setStudent: (student: Student) => void;
}

export default function Home({ student, setStudent }: HomeProps) {
  const navigate = useNavigate();
  async function validateUser(student: Student) {
    const response = await StudentService.getStudent(student.user);
    if (response.status === 200) {
      return navigate(Links.STUDENT);
    }
    return alert('Usuário não cadastrado');
  }

  function changeUser(event: React.ChangeEvent<HTMLInputElement>) {
    setStudent({ ...student, user: event.target.value });
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <a href={Links.SECTOR}>
        <Button sx={{ backgroundColor: '#63e5ff', color: '#000000' }}>
          Acessar página de setores
        </Button>
      </a>
      <LoginForm>
        <h1>CInHelper</h1>
        <Typography sx={{ margin: '20px' }}>
          Insira seu login e senha para acessar o sistema
        </Typography>
        <TextField
          required
          label="User"
          value={student.user}
          onChange={changeUser}
        />
        <a href=""></a>
        <Button
          type="button"
          sx={{ backgroundColor: '#63e5ff', color: '#000000' }}
          onClick={() => validateUser(student)}
        >
          Login
        </Button>
      </LoginForm>
    </div>
  );
}
