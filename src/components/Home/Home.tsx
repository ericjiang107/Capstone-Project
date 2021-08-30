import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CardTag } from '../CardTag';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.7),
        background: 'linear-gradient(45deg, #5f2c82 30%, #49a09d 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 190, 250, .3)',
        borderRadius: 3,
        fontSize: '17px'
    },
    sticky: {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: '#e0e0e0'
    },
    padding: {
        paddingTop: '80px'
    }
}))


export const Home = () => {
    const classes = useStyles();
    const [allProductId, setAllProductId] = useState([]);

    /* useEffect(() => {
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
                limit: 10, 
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
    }, []) */
    return (
        <div>
            <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/User'} >My Account</Button>
                {/* <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/Home'} >Home</Button> */}
            </nav>
            <div className={classes.padding}>
                <div className="container-fluid px-0">
                    <CardTag/>
                </div>
            </div>
            

        </div>
    )
}
            