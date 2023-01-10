import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Character } from '../types'
import { GET_CHARACTER } from '../queries'
import { Button, Divider, Grid, Typography } from '@mui/material';
import AsyncHandler from '../components/AsyncHandler/AsyncHandler';
import { formatError } from '../utils';
import { Stack } from '@mui/system';
import CharacterInfo from '../components/CharacterInfo/CharacterInfo';

interface QueryData {
    character: Character;
}

function DetailsPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<QueryData>(GET_CHARACTER, {
    variables: { id },
  });


  return (
    <div className='page'>
        <Button className='my-md' variant='text' onClick={() => navigate(-1)}>Go back</Button>

        <AsyncHandler loading={loading} error={formatError(error)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src={data?.character.image}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CharacterInfo sx={{mb: 2}} text='Name' data={data?.character.name} isLast={false}/>
                    <CharacterInfo sx={{my: 2}} text='Gender' data={data?.character.gender} isLast={false}/>
                    <CharacterInfo sx={{my: 2}} text='Type' data={data?.character.type} isLast={false}/>
                    <CharacterInfo sx={{my: 2}} text='Species' data={data?.character.species} isLast={false}/>
                    <CharacterInfo sx={{mt: 2}} text='Status' data={data?.character.status} isLast={true}/>
                </Grid>
            </Grid>
        </AsyncHandler>
        
    </div>
  )
}

export default DetailsPage