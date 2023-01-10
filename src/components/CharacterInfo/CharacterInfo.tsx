import { Divider, Typography } from '@mui/material';
import React from 'react'


interface Props {
    text: string;
    data: string | undefined;
    isLast?: boolean;
    sx: any;
}

function CharacterInfo({text, data, isLast, ...rest}: Props) {
  return (
    <>
        <Typography variant="h6" component="p" {...rest}>
            {text}: {data || 'Unknown'}
        </Typography>
        {!isLast && <Divider/>}
    </>
  )
}

export default CharacterInfo