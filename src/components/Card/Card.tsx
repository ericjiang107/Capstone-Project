import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { CardImage } from '../../components';
import './Card.css';
import { info } from 'console';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.7),
        borderRadius: 3,
        fontSize: '17px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
    },
},
    sticky: {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: '#e0e0e0'
    },
    padding: {
        paddingTop: '50px'
    }
}))

export const Card = () => {

    const classes = useStyles();

    const { productId } = useParams<{ productId: string }>()
    const [cardImage, setCardImage] = useState()
    const [cardLowPrice, setCardLowPrice] = useState()
    const [cardMidPrice, setCardMidPrice] = useState()
    const [cardHighPrice, setCardHighPrice] = useState()
    const [cardMarketPrice, setCardMarketPrice] = useState()
    const [cardName, setCardName] = useState()
    const [cardEffect, setCardEffect] = useState()
    const [cardUnit, setCardUnit] = useState()
    const [cardGrade, setCardGrade] = useState()
    const [cardSkill, setCardSkill] = useState()
    const [cardNation, setCardNation] = useState()
    const [cardRace, setCardRace] = useState()
    const [cardPower, setCardPower] = useState()
    const [cardShield, setCardShield] = useState()
    const [cardCric, setCardCric] = useState()
    const [cardTrigger, setCardTrigger] = useState()
    const [cardFlavor, setCardFlavor] = useState()

    // For Image:
    useEffect(() => {
        // product image 
        fetch(`https://api.tcgplayer.com/catalog/products/${productId}?getExtendedFields=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ${process.env.REACT_APP_TOKEN}`,
            },
        })
        .then(response => response.json())
        .then(info => {
            // console.log(info)
            setCardImage(info.results[0].imageUrl)
            setCardName(info.results[0].name)
            setCardEffect(info.results[0].extendedData[10].value)
            setCardUnit(info.results[0].extendedData[2].value)
            setCardGrade(info.results[0].extendedData[3].value)
            setCardSkill(info.results[0].extendedData[4].value)
            setCardNation(info.results[0].extendedData[5].value)
            setCardRace(info.results[0].extendedData[6].value)
            setCardPower(info.results[0].extendedData[7].value)
            setCardShield(info.results[0].extendedData[8].value)
            setCardCric(info.results[0].extendedData[9].value)
            setCardTrigger(info.results[0].extendedData[10].value)
            setCardFlavor(info.results[0].extendedData[12].value)
            console.log(info.results[0].extendedData)
            
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
            <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/User'} startIcon={<AccountBoxIcon style={{ fontSize: 25 }}/>} >My Account</Button>
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/Home'} startIcon={<HomeIcon style={{ fontSize: 25 }}/>} >Home</Button>
            </nav>

            <div className={classes.padding}>
                <div className="row justify-content-center" id="cardPadding">
                    <div className="col-4">
                        <CardImage/>
                    </div>
                    <div className="col-4" id="border">
                        <div className="addStyling">
                            <div className="addPadding">
                                <div className="weight" id="lowPrice">
                                    Low Price:
                                </div>
                                <div id="cardBorder">${ cardLowPrice }</div>
                            </div>
                        </div>
                        <div className="addStyling" id="borderstylingBox">
                            <div className="weight" id="highPrice">
                                High Price:
                            </div>
                            <div id="moreCardBorder">${ cardHighPrice }</div>
                        </div>
                        <div className="addStyling" id="borderstylingBox">
                            <div className="weight" id="midPrice">
                                Market Price:
                            </div>
                            <div className="borderBot" id="moreCardBorder">${ cardMarketPrice }</div>
                        </div>
                    </div>
                </div>
                    <div className="row justify-content-center">
                        <div className="col-8" id="moreAdding">
                            <div className="card">
                                <div className="card-header">
                                    Card Details
                                </div>
                                <div className="moreAdding">
                                    <h5 className="botPadding">{ cardName }</h5>
                                    <div className="fontSize" >
                                        <p className=""> <span className="boldStyle">Skill:</span> { cardEffect } </p>
                                    </div>
                                    <p className=""> Unit/Grade/Skill: { cardUnit } / { cardGrade } / { cardSkill }</p>
                                    <p> Nation/Race: { cardNation } / { cardRace }</p>
                                    <p> Power/Shield: { cardPower } / { cardShield } </p>
                                    <p> Critical/Trigger: { cardCric } / { cardTrigger } </p>
                                    <p> Flavor: { cardFlavor } </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}