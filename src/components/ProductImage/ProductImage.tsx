import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export const cardImage = () => {
    const { productId } = useParams<{ productId: string }>()
    const [cardImage, setCardImage] = useState()
    useEffect(() => {
        // product image 
        fetch(`https://api.tcgplayer.com/catalog/products/${productId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ${process.env.REACT_APP_TOKEN}`,
            },
        })
        .then(response => response.json())
        .then(info => {
            console.log(info)
            setCardImage(info.results[0].imageUrl)
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
        
    }, [])
    return (
        <div>
            <Container maxWidth='sm'>
                <img src={cardImage}></img>
            </Container>
        </div>
    )
}