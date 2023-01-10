import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_CHARACTERS } from '../queries';
import AsyncHandler from '../components/AsyncHandler/AsyncHandler';
import { formatError } from '../utils';
import './HomePage.scss'
import type { MiniCharacter } from '../types';
import CharacterCard from '../components/CharacterCard/CharacterCard';

interface QueryData {
  characters: {
    results:  MiniCharacter[];
    info : {
      pages: number;
    }
  }
}

function Home() {
  const [page, setPage] = React.useState(1);
  const { loading, error, data } = useQuery<QueryData>(GET_CHARACTERS, {
    variables: { page },
  });
  
  return (
    <div className='page'>
      <AsyncHandler loading={loading} error={formatError(error)}>
        <>
        <div className='characters-grid'>
          {data?.characters.results.map((character) => (<CharacterCard character={character}/>))}
        </div>

        </>
        
      </AsyncHandler>
    </div>
  )
}

export default Home