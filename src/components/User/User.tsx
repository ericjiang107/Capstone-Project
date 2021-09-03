import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Spinner} from 'react-bootstrap';
import './User.css'
import { doc, getDoc, updateDoc, arrayRemove, onSnapshot } from '@firebase/firestore';
import { useFirestore, useAuth } from 'reactfire';
import InfoIcon from '@material-ui/icons/Info';

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
        paddingTop: '100px',
        fontSize: '30px',
    },
    float: {
        float: 'right',
    },
    style: {
        padding: '20px',
    },
    buttonStyle: {
        backgroundColor: 'red',
        color: 'white',
    },
    bottom: {
        paddingBottom: '10px',
    },
    down: {
        paddingBottom: '10px',
        paddingTop: '10px'
    }
}))

export const User = () => {
    const auth = useAuth();
    const firestore = useFirestore();
    const [user, setUser] = useState({} as any);
    const [cards, setCards] = useState([]);
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // fetch user's info from firestore
        const fetchUser = () => {
            const unsub = onSnapshot(doc(firestore, "users", auth.currentUser.uid), (doc) => {
                setUser(doc.data()); 
                fetchFavorites(doc.data().favorites);
            });
        }

        const fetchFavorites = async (favorites: Array<any>) => {
            const cards = await Promise.all(favorites.map((productId: any) =>
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
            ));
            setCards(cards);
        }

        fetchUser();
    }, []);

    const handleRemoveClick = async (cardId: any) => {
        // get current user id and card id
        const userId = auth.currentUser.uid;

        // update user doc in firestore to remove card from favs
        await updateDoc(doc(firestore, 'users', userId), { favorites: arrayRemove(cardId)});
    
        alert("Success! Card removed from your account")
    };

    
    return (
        <div>
            <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                {/* <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/User'} >My Account</Button> */}
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/Home'} startIcon={<HomeIcon style={{ fontSize: 25 }}/>} >Home</Button>
                <div className={classes.float}>
                    <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/AboutMe'} startIcon={<InfoIcon style={{ fontSize: 25 }}/>} >More Info</Button>
                    <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/'} startIcon={<ExitToAppIcon style={{ fontSize: 25 }}/>} >Sign Out</Button>
                </div>
                <input className="filter" type="text" placeholder="Enter Card Name" onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </nav>
            <div className={classes.padding}>
                {/* <div className={classes.style}> */}
                <div className="row justify-content-start">
                    <div className="col-4">
                    <img className={classes.down} src={user.picture}></img>
                    <br></br>
                        Welcome, {user.displayName}
                        <br></br>
                        {user.email}
                    </div>
                    <div className="col-8">
                        <div className="divSpecify">
                            {
                                cards.length > 0 ?
                                <div className="row test2" id="test"> 
                                 {cards.filter((card) => {
                                    if(searchTerm == '') {
                                        return card
                                    } else if (card.cardName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return card
                                    }
                                })
                                    .map((card, index) =>
                                        <div className="col-3 test">
                                            <Link to={`/cards/${card.id}`}>
                                                <div className="center">
                                                    <img className="spacingTop" key={index} src={card.imgUrl}></img>
                                                    <div className="text">
                                                        {card.cardName}
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className={classes.bottom}>
                                                <Button className={classes.buttonStyle} onClick={() => handleRemoveClick(card.id)}>Remove</Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                : // else
                                <div>
                                    <div className="fonty">
                                        No Cards Added...
                                    </div>
                                </div>
                            } 
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}