import { useQuery } from '@apollo/client';
import { useState, useLayoutEffect, ChangeEvent } from 'react'
import { GET_CHARACTERS } from '../queries';
import AsyncHandler from '../components/AsyncHandler/AsyncHandler';
import { formatError } from '../utils';
import type { MiniCharacter } from '../types';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import { Pagination, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useParams, useNavigate } from 'react-router-dom';
import './HomePage.scss'
import useDebounce from '../hooks/useDebounce';

interface QueryData {
  characters: {
    results:  MiniCharacter[];
    info : {
      pages: number;
    }
  }
}

function Home() {
  const [filterName, setFilterName] = useState("")
  const navigate = useNavigate();
  const debouncedFilterName = useDebounce(filterName, 500)

  useLayoutEffect(() => {
    if(debouncedFilterName) navigate(`/1`)
  }, [debouncedFilterName])

  const params = useParams();
  const page = Number(params.page) || 1;
  const { loading, error, data } = useQuery<QueryData>(GET_CHARACTERS, {
    variables: { page, name: debouncedFilterName },
  });

  function handlePageChange (_event: any, page: number): void {
    navigate(`/${page}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function handleNameChange (event: ChangeEvent<HTMLInputElement>): void {
    setFilterName(event.target.value)
  }



  return (
    <div className='page'>
      <div className='search-input-container'>
          <TextField
            label="Search by name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            value={filterName}
            onChange={handleNameChange}
          />
        </div>
      <AsyncHandler loading={loading} error={formatError(error)}>
        <>
        <div className='characters-grid'>
          {data?.characters.results.map((character) => (<CharacterCard key={character.id} character={character}/>))}
        </div>

        <Pagination 
          className='pagination' 
          count={data?.characters.info.pages} 
          page={page}
          onChange={handlePageChange}
          variant="outlined" 
          color="primary"
          disabled={loading}
        />
      </>
        
      </AsyncHandler>
    </div>
  )
}

export default Home