import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import './CardTag.css';

export const CardTag = () => {

    const [allProductId, setAllProductId] = useState([]);
    const [cards, setCards] = useState([]);
    const [cardImage, setCardImage] = useState([]);
    // filter:
    const [searchTerm, setSearchTerm] = useState('')

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
                        name: "SetName",
                        values: ["A Brush with the Legends"]
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
        <div className="divSpecify">
            {/* Filter search bar */}
            <div className="filterSpace">
                <input className="styleSearch" type="text" placeholder="Enter Card Name" onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </div>
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
    )
}

