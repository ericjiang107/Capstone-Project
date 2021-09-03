import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './AboutMe.css';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    center: {
        textAlign: 'center',
    },
    padding: {
        padding: '10px',
    },
    morePadding: {
        paddingRight: '10px',
        paddingLeft: '10px',
        margin: '10px'
    },
    left: {
        float: 'left',
    },
    words: {
        fontSize: '25px',
        padding: '10px',
    },
    para: {
        fontSize: '18px',
    },
    width: {
        width: '100%',
        height: '45px',
    },
    top: {
        paddingTop: '20px',
    },
    size: {
        fontSize: '17px',
    },
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
    float: {
        float: 'right',
    },
}))

export const AboutMe = () => {
    const classes = useStyles()

    return (
        <div className="">
             <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/User'} >My Account</Button>
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/Home'} startIcon={<HomeIcon style={{ fontSize: 25 }}/>} >Home</Button>
                <div className={classes.float}>
                    <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/'} startIcon={<ExitToAppIcon style={{ fontSize: 25 }}/>} >Sign Out</Button>
                </div>
            </nav>
            <div id="finalPadding">
                <div className="row justify-content-center" id="padding">
                    <div className="col-4">
                    <div>
                        <div className={classes.words}>
                            Thank you for taking the time to check this page out! 
                        </div>
                        <p className={`${classes.para}`}>This project was done simply because I am a card trader. If I am interested in purchasing or selling a card, I want to have the card tracked so I can come back to it whenever I wish to check on its price. Please see the Progress Tracking of this project below.</p>
                    </div>
                    </div>
                    <div className="col-4">
                        <div className={classes.top}>
                            <div className={`${classes.left} ${classes.width}`}>
                                <p className={`${classes.left} ${classes.top} ${classes.size}`}> If interested, feel free to check out my links! </p>
                            </div>
                            <div className={`${classes.padding} ${classes.left}`}>
                                <Button variant="contained" color="primary" type="submit" target="_blank" href={'https://www.linkedin.com/in/eric-jiang-855a16107/'} startIcon={<LinkedInIcon style={{ fontSize: 25 }}/>} >LinkedIn</Button>
                            </div>
                            <div className={`${classes.left} ${classes.padding}`}>
                                <Button variant="contained" color="primary" type="submit" target="_blank" href={'https://github.com/ericjiang107'} startIcon={<GitHubIcon style={{ fontSize: 25 }}/>} >GitHub</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.center} id="padding">
                    <h1> Progress Tracking of this Project </h1> 
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding2">
                                <h3><em><u>Day 1:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Created google docs and created formating for what the site should look like/function. Created basic React on Vscode.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding3">
                                <h3><em><u>Day 2:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Added routes and styling for Login page. Tested firebase google authentication but errors made things extremely difficult. Ended up pausing the authentication and move on to testing the api/database. Got into another error where the .env file was stil being registered despite being added on .gitignore. Issue fixed once .env was deleted/replaced/and committed.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding4">
                                <h3><em><u>Day 3:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Ran into errors where the .env file wasn't being read into the specific files. Had to focus on debugging... Solution: no idea but after attempting to copy and paste the same word over and over again, it magically worked... Rested my brain for Day 3.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding3">
                                <h3><em><u>Day 4:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Updated files and figured out more about how the api works and how to access specific data (i.e. Name, product info, etc). Fixed more bugs and made the image surface on the website. Figured out how to showcase the pricing of each card. Styling needs to be updated but overall, a lot was done today and I learned a lot about how important creating components is and how we can decrease the amount of typing/time using it.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding5">
                                <h3><em><u>Day 5:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Continued error of setting up firebase google sign-in authentication. Some errors include: Property 'auth' does not exist on type 'typeof import... or Property 'signInWithPopup' does not exist on type 'Auth'.ts(2339)... and more. Established a better understanding of how to creating functions and iterating through each data without the need to create new components/lines. Updated one page with more styling and formatting. Decided to switch the attention to creating the Home page as I now have a working component that can be dragged in without the need to write the code for the images again. Will continue further debugging and figuring out signIn for firebase v9.16.6.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding6">
                                <h3><em><u>Day 6:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Continued error of firebase. Fixed for loop issue so now images will show up along with their respective names. Solution: introduce promise.all into the fetch so it's like a nested fetch within a fetch. Changed/updated routing so it will now route to the exact card page with the correct card ID. Updated cards with styling. Updated nav bar with styling and sticky. Added filter search bar for cards section to allow smoother cilent transaction.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding6">
                                <h3><em><u>Day 7:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Added more changes to the nav bar and filter search bar. Found a work around to parse through different set names for differnt cards specific to the designated set and display their information. Finally fixed google authentication signin (solution: uninstalled everything for the 6th time and reinstalled again...suprsingly it worked...). Updated filter options and fixed issue of filter referesh on set cards update. Finaliazed chart with price points for each card set as well... Today was a really good day.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding6">
                                <h3><em><u>Day 8:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Added window.scrollTo function to allow for smoother transisiton when switching sets. More styling and updated the graph with labels and proper styling. Struggling to figure out way to connect front end to back end using either React or Flask. Figured out that I can connect backend and frontend via Firestore since we are using Google authentication. Still accounting errors (again with firebase...) seems like to be able to connect both, we will have to update firebase to it's newest version.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding3">
                                <h3><em><u>Day 9:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Connected firestore backend to react frontend to access user Name. Solution: continued looking for documentation from the firestore site. Created function to add card (productId) to firestore and store data. Then connected that data to User page and showcase the parsed productId card image and name. Also created a remove function which does the same thing as adding the card.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4" id="padding5">
                                <h3><em><u>Day 10:</u></em></h3>
                            </div>
                            <div className="col-4" id="border">
                                <p>Wanted to make improvements to the website such as adding a background to the login page, improve on the filter system, make the dropdown menu scrollable, and more. Still working on it but it seems to be more of styling than creating fucntions for some of these. Added filter option to the "My Account" page so if the user has a lot of cards bookmarked, they can easily find the cards they are looking for. Updated login Page visual. Reason why I cannot add a filter all search bar if the user knows the name but doesn't know the set the card comes in is because the database only allows up to 300 request per minute.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}