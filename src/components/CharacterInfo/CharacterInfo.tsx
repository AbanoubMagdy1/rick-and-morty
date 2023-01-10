import { Divider, Typography } from '@mui/material';
import React from 'react'
import './CharacterInfo.scss'


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
            <span className='info-property'>{text}:</span> {data || 'Unknown'}
        </Typography>
        {!isLast && <Divider/>}
    </>
  )
}

export default CharacterInfo