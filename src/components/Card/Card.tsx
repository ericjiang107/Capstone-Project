import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => {
//     imageSelect: {
//         backgroundImage: `url$(${pic})`
//     }
// })

export const Card = () => {

    const { productId } = useParams<{ productId: string }>()
    const [cardImage, setCardImage] = useState()
    const [cardLowPrice, setCardLowPrice] = useState()
    const [cardMidPrice, setCardMidPrice] = useState()
    const [cardHighPrice, setCardHighPrice] = useState()
    const [cardMarketPrice, setCardMarketPrice] = useState()

    // For Image:
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

        // product price
        fetch(`https://api.tcgplayer.com/pricing/product/${productId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ${process.env.REACT_APP_TOKEN}`,
            },
        })
        .then(response => response.json())
        .then(info => {
            setCardLowPrice(info.results[0].lowPrice)
            setCardMidPrice(info.results[0].midPrice)
            setCardHighPrice(info.results[0].highPrice)
            setCardMarketPrice(info.results[0].marketPrice)
        })
        .catch((error) => {
            console.error('Error: ', error);
        });

    }, [])



    return (
        <div>
            {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
            <Button variant="contained" type="submit" component={Link} to={'/Home'} >Home</Button>
            <Button variant="contained" type="submit" component={Link} to={'/User'} >My Account</Button>

            <Container maxWidth='sm'>
                <img src={cardImage}></img>
                <div>Low Price: ${ cardLowPrice }</div>
                <div>Mid Price: ${ cardMidPrice }</div>
                <div>High Price: ${ cardHighPrice }</div>
                <div>Market Price: ${ cardMarketPrice }</div>
            </Container>
        </div>
    )
}