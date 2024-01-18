import React, {Children, createContext, useContext, useState} from 'react';

const ExerciseContext = createContext();


const HomeContext = ({children}) => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all')
  return (
    <ExerciseContext.Provider value={{exercises, setExercises, bodyPart, setBodyPart}} >
        {children}
    </ExerciseContext.Provider>
  )
}

export default ExerciseContext;