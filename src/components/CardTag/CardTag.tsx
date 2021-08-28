import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

interface Props {
    cardData: string;
}

export const CardTag = ((cardData:Props) => {
    return (
        <div> {cardData} </div>

    )
})

