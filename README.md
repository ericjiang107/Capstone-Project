## Progress Tracking of Capstone Project: 

**`Day 1:`** 
Created google docs and created formating for what the site should look like/function. Created basic React on Vscode. 

**`Day 2:`** 
Added routes and styling for Login page. Tested firebase google authentication but errors made things extremely difficult. Ended up 
pausing the authentication and move on to testing the api/database. Got into another error where the .env file was stil being
registered despite being added on .gitignore. Issue fixed once .env was deleted/replaced/and committed. 

**`Day 3:`** 
Ran into errors where the .env file wasn't being read into the specific files. Had to focus on debugging...
Solution: no idea but after attempting to copy and paste the same word over and over again, it magically worked...
Rested my brain for Day 3. 

**`Day 4:`** 
Updated files and figured out more about how the api works and how to access specific data (i.e. Name, product info, etc). Fixed more bugs 
and made the image surface on the website. Figured out how to showcase the pricing of each card. Styling needs to be 
updated but overall, a lot was done today and I learned a lot about how important creating components is and how we can decrease the 
amount of typing/time using it. 

**`Day 5:`** 
Continued error of setting up firebase google sign-in authentication. Some errors include: Property 'auth' does not exist on type 'typeof import...
or Property 'signInWithPopup' does not exist on type 'Auth'.ts(2339)... and more. Established a better understanding of how to creating
functions and iterating through each data without the need to create new components/lines. Updated one page with more styling and formatting. 
Decided to switch the attention to creating the Home page as I now have a working component that can be dragged in without the need to 
write the code for the images again. Will continue further debugging and figuring out signIn for firebase v9.16.6.

**`Day 6:`** 
Continued error of firebase. Fixed for loop issue so now images will show up along with their respective names. Solution: introduce promise.all into 
the fetch so it's like a nested fetch within a fetch. Changed/updated routing so it will now route to the exact card page with the correct card ID. 
Updated cards with styling. Updated nav bar with styling and sticky. Added filter search bar for cards section to allow smoother cilent transaction. 
 
**`Day 7:`** 
Added more changes to the nav bar and filter search bar. Found a work around to parse through different set names for differnt cards specific to the
designated set and display their information. Finally fixed google authentication signin (solution: uninstalled everything for the 6th time and 
reinstalled again...suprsingly it worked...). Updated filter options and fixed issue of filter referesh on set cards update. Finaliazed chart with price
points for each card set as well... Today was a really good day. 

**`Day 8:`** 
Added window.scrollTo function to allow for smoother transisiton when switching sets. More styling and updated the graph with labels and proper styling. 
Struggling to figure out way to connect front end to back end using either React or Flask. Figured out that I can connect backend and frontend via 
Firestore since we are using Google authentication. Still accounting errors (again with firebase...) seems like to be able to connect both, we will
have to update firebase to it's newest version. 

**`Day 9:`** 
Connected firestore backend to react frontend to access user Name. Created function to add card (productId) to firestore and store data. Then connected
that data to User page and showcase the parsed productId card image and name. Also created a remove function which does the same thing as adding
the card. 
