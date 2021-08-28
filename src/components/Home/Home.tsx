import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CardTag } from '../CardTag';


export const Home = () => {
    const [allProductId, setAllProductId] = useState([]);

    useEffect(() => {
        // product by set
        fetch(`https://api.tcgplayer.com/catalog/categories/16/search`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ 
                sort: "ProductName ASC", 
                limit: 1000, 
                offset: 3, 
                filters: [
                    {
                        name: "SetName",
                        values: ["A Brush with the Legends"]
                    }
                ]
            }),
        })
        .then(res => res.json())
        .then(info => {
            console.log(info.results);
            setAllProductId(info.results);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    }, [])
    return (
        <div>
            <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button>
            {/* <Button variant="contained" type="submit" component={Link} to={'./Home'} >Home</Button> */}
            <Button variant="contained" type="submit" component={Link} to={'./User'} >My Account</Button>

            {
                allProductId.length > 0 ? allProductId.map((data) => { // ? means if
                    return(
                        <CardTag cardData={data} />
                        
                    )
                })
                : // else
                <div>No Products</div>
            }
        </div>
    )
}
            