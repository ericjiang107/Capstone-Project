import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import './CardTag.css';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setConstantValue } from 'typescript';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


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
        paddingTop: '80px'
    },
    sticky2: {
        position: 'fixed',
        top: 150,
        zIndex: 100,
        padding: '20px',
        fontSize: '20px',
        // paddingTop: '400px'
    },
    test2: {
        padding: '10px',
        paddingRight: '20px'
    }
}))


export const CardTag = () => {
    const classes = useStyles();
    const [allProductId, setAllProductId] = useState([]);
    const [cards, setCards] = useState([]);
    const [cardImage, setCardImage] = useState([]);
    // filter:
    const [searchTerm, setSearchTerm] = useState('');
    // For card set selector:
    const [Value, setValue] = useState('');
    const handleSelect=(e: any)=>{
        console.log(e);
        setValue(e)
    };

    useEffect(() => {

        // returns all product id by set name
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
                offset: 0, 
                filters: [
                    {
                        "name": "SetName",
                        "values": ["Glorious Bravery of Radiant Sword"]
                    }
                ]
            }),
        })
        .then(res => res.json())
        .then(info => {

            Promise.all(info.results.map((productId: any) =>
                fetch(`https://api.tcgplayer.com/catalog/products/${productId}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                })
                .then(response => response.json())
                .then(info => {
                    return { 
                        id: productId,
                        cardName: info.results[0].name,
                        imgUrl: info.results[0].imageUrl 
                    };
                })
                .catch((error) => {
                    console.error('Error: ', error);
                })
            )).then(cards => {
                setCards(cards);
            });
        })
        .catch((error) => {
            console.error('Error: ', error);
        });

    }, [])

    return (
        <div>
            <nav className={classes.sticky}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/User'} startIcon={<AccountBoxIcon style={{ fontSize: 25 }}/>} >My Account</Button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                     <DropdownButton
                        alignRight
                        title="Other Sets"
                        id="dropdown-menu-align-right"
                        className={classes.test2}
                        onSelect={handleSelect}
                            >
                                <Dropdown.Item eventKey="Genesis of the Five Greats">Genesis of the Five Greats</Dropdown.Item>
                                <Dropdown.Item eventKey="D-SS01: Festival Collection 2021">D-SS01: Festival Collection 2021</Dropdown.Item>
                                <Dropdown.Item eventKey="Advance of Intertwined Stars">Advance of Intertwined Stars</Dropdown.Item>
                                <Dropdown.Item eventKey="Divine Lightning Radiance">Divine Lightning Radiance</Dropdown.Item>
                                <Dropdown.Item eventKey="Storm of the Blue Cavalry">Storm of the Blue Cavalry</Dropdown.Item>
                                <Dropdown.Item eventKey="Demonic Advent">Demonic Advent</Dropdown.Item>
                                <Dropdown.Item eventKey="Absolute Judgment">Absolute Judgment</Dropdown.Item>
                                <Dropdown.Item eventKey="Glorious Bravery of Radiant Sword">Glorious Bravery of Radiant Sword</Dropdown.Item>
                                <Dropdown.Item eventKey="Phantom Dragon Aeon">Phantom Dragon Aeon</Dropdown.Item>
                                <Dropdown.Item eventKey="V-SS09: Revival Collection">V-SS09: Revival Collection</Dropdown.Item>
                                <Dropdown.Item eventKey="V-SS03: Festival Collection">V-SS03: Festival Collection</Dropdown.Item>
                                <Dropdown.Item eventKey="Raging Clash of the Blade Fangs">Raging Clash of the Blade Fangs</Dropdown.Item>
                                <Dropdown.Item eventKey="Ultimate Stride">Ultimate Stride</Dropdown.Item>
                        </DropdownButton>
                    </ul>
                    <input className="styleSearch" type="text" placeholder="Enter Card Name" onChange={(event) => {setSearchTerm(event.target.value)}}/>
                </div>
                <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/'} startIcon={<ExitToAppIcon style={{ fontSize: 25 }}/>} >Sign Out</Button>
                </nav>
            </nav>

            <div className="divSpecify">
                    {
                        cards.length > 0 ?
                        <div className="row test2"> 
                            {cards.filter((card) => {
                                if(searchTerm == '') {
                                    return card
                                } else if (card.cardName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return card
                                }
                            }).map((card, index) =>
                                <div className="col-3 test">
                                    <Link to={`/cards/${card.id}`}>
                                        <img className="spacingTop" key={index} src={card.imgUrl}></img>
                                        <div className="spacing">
                                            {card.cardName}
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        : // else
                        <div>Loading</div>
                    } 
            </div>
            <div className={`${classes.sticky2}`}>
                Current Set: {Value}
            </div>
        </div>
    )
}

