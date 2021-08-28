import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './CardImage.css';

export const CardImage = () => {
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
            <img className="img" id="heighter" src={cardImage}></img>
        </div>
    )
}