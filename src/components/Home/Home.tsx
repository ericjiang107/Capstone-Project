import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CardTag } from '../CardTag';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    padding: {
        paddingTop: '80px'
    }
}))


export const Home = () => {
    const classes = useStyles();
    const [allProductId, setAllProductId] = useState([]);

    return (
        <div>
            <div className={classes.padding}>
                <div className="container-fluid px-0">
                    <CardTag/>
                </div>
            </div>
        </div>
    )
}
            