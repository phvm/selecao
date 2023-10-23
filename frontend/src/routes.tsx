import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Links } from './links';
import Home from './pages/home';
import SectorRequests from './pages/sectorRequests';
import { useState } from 'react';
import { Student } from './types/student';
import StudentRequests from './pages/studentRequests';

export default function Router() {
  const [student, setStudent] = useState<Student>({ user: '', requests: [] });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Links.HOME}
          element={<Home student={student} setStudent={setStudent} />}
        />
        <Route
          path={Links.STUDENT}
          element={<StudentRequests user={student.user} />}
        />
        <Route path={Links.SECTOR} element={<SectorRequests />} />
      </Routes>
    </BrowserRouter>
  );
}
