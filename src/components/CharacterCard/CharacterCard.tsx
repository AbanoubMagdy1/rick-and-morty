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
<<<<<<< HEAD
          loading='lazy'
=======
          loading="lazy"  
>>>>>>> 694fa6d91dd3e7470f89ce7c21d0e0e70c5d00bf
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
