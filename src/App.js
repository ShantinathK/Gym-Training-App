import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';  // The Box component servers as a wrapper component for most of the css utility needs

import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercise/:id' element={<ExerciseDetailPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
