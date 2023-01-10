import React from 'react'
import type { MiniCharacter } from '../../types'
import {Card, CardContent, CardMedia, Typography} from '@mui/material';


interface Props {
    character: MiniCharacter
}

function CharacterCard({character}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{height: 250}}
        image={character.image}
        title={character.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterCard