import React from 'react'
import type { MiniCharacter } from '../../types'
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Link } from 'react-router-dom';


interface Props {
    character: MiniCharacter
}

function CharacterCard({character}: Props) {
  return (
    <Link to={`/character/${character.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CharacterCard