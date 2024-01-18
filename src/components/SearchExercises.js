import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExecriseData = async ()=>{
            const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            const bodyPartsData = await response.json()
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExecriseData();
        // console.log(bodyParts);
    }, [])
    
    

    const handleSearch = async ()=>{
        if(search){
            const exercisesData  = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            
            // console.log(exercisesData)

            // const searchedExercises = exercisesData.filter(
            //     (exercise)=> exercise.name.toLowerCase().includes(search) 
            //     || exercise.target.toLowerCase().includes(search) 
            //     || exercise.equiment.toLowerCase().includes(search) 
            //     || exercise.bodypart.toLowerCase().includes(search) 
            // );
            // setSearch('');
            // setExercises(searchedExercises);
            
            const searchedExercises = exercisesData.filter((exercise) => {
                const exerciseName = exercise.name ? exercise.name.toLowerCase() : '';
                const exerciseTarget = exercise.target ? exercise.target.toLowerCase() : '';
                const exerciseEquipment = exercise.equipment ? exercise.equipment.toLowerCase() : '';
                const exerciseBodyPart = exercise.bodypart ? exercise.bodypart.toLowerCase() : '';
            
                return (
                    exerciseName.includes(search) ||
                    exerciseTarget.includes(search) ||
                    exerciseEquipment.includes(search) ||
                    exerciseBodyPart.includes(search)
                );
            });
            
            setSearch('');
            setExercises(searchedExercises);
            // console.log(searchedExercises);
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise you <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {lg: '800px',md: '700px' , xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
        sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '12px'},
            height: '56px',
            position: 'absolute',
            right: '0'
        }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box xs={{ position: 'relative', width: '800%', p: '20px'}} width="98vw" overflow="scroll">
        <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
      </Box>
    </Stack>
  );
};

export default SearchExercises;
