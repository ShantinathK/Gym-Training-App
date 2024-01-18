import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

// import ExerciseContext from '../context/HomeContext';

const HomePage = () => {
    const [exercises, setExercises] = useState([]); // comment state if using context API method to pass props to component
    const [bodyPart, setBodyPart] = useState('all');
  return (
    // <ExerciseContext>
    //     <HeroBanner />
    //     <SearchExercises setExercises={setExercises} bodyPart={bodyPart}/>
    //     <Exercises setExercises={setExercises} bodyPart={bodyPart}/>
    // </ExerciseContext>
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default HomePage