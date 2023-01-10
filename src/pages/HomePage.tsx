import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_CHARACTERS } from '../queries';


function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home