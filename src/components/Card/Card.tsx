import React, { useEffect } from 'react';

export const Card = () => {
    useEffect(() => {
        fetch(`https://api.tcgplayer.com/catalog/products/243039/media`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `bearer ag738y_BkgtYuGuBjB5vmzSJcAm1wgewBA4cW2oNNt-slN7j2LwzGwReoZn5-Ep8Z616PyDJDS2EsdU93U8MdKc08t2TPjYEDGAza1RTZRXM7qnsP2c9_5wXmRJva9RTldHH17Ik1lKahyfMQTBrTO4t2rzzGMV8mh3FaOg8Sy8LzPN9Nf72Ju0SnnyyQfA7SBlmu_ODKG5K9IvgGRh3xh43Vtn3Sp_s4xNbswl2B74nznvJQGhwSzdkt54PSauUM8sYmbJGrIyVW_oodAwof_o36hysZZ9eM2qqoXCgcezYlevMWzBZhOfNd5d3nKSxQ3odHQ`,
            },
        })
        .then(response => response.json())
        .then(info => {
            console.log(info);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
    }, [])

    return (
        <div>
            {process.env.REACT_APP_TOKEN}
        </div>
    )
}