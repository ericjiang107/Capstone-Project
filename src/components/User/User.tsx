import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const User = () => {
    return (
        <div>
            <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button>
            <Button variant="contained" type="submit" component={Link} to={'./Home'} >Home</Button>
            {/* <Button variant="contained" type="submit" component={Link} to={'./User'} >My Account</Button> */}
            User Page
        </div>
    )
}