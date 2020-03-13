# Denver Endeavors
Denver Endeavors is an app that facilitates vacation rentals around Denver, Co.

### Introduction
This was a paired project, and the second project of Module 3. It's main focus was to work with asynchronous JavaScript and using nested `fetch` calls.The objectives of this project was to keep state based components to a minimum and leverage more functional components, and become familiar with promises, nested fetch request and handle UI based on acceptance of data. 

### Screenshots
<img width="1440" alt="Screen Shot 2020-03-13 at 5 39 42 PM" src="https://user-images.githubusercontent.com/51575613/76669601-0e4ef280-6552-11ea-8620-0a8e3e178b76.png">
<img width="1440" alt="Screen Shot 2020-03-13 at 5 41 13 PM" src="https://user-images.githubusercontent.com/51575613/76669607-13ac3d00-6552-11ea-9254-ddfaf043fa93.png">
<img width="1440" alt="Screen Shot 2020-03-13 at 5 41 39 PM" src="https://user-images.githubusercontent.com/51575613/76669615-160e9700-6552-11ea-8bf5-aa61c0df88be.png">

### Directions for Use
- On page load you will see a login screen requiring the user to input their name, email, and select their reason for using the app (i.e. 'Business', 'Recreational', or 'Other')
- After selecting the `Continue` button, four cards are displayed, each correlating to a different neighborhood in Denver.
- The user can then select the `View Listings` button to see all available listings in the selected area.
- There is a `View This Listing` on each displayed card that will take you to a page that has more pictures of that particular listing as well as necessary details. It also includes a button that can be used to favorite a particular listing.
- The favorite listings page can be viewed by clicking on the button in the header. The number on the button describes how many listings a user has in their favorites.

### Project Learning Goals  
1. Write squeaky clean, well refactored code using ES6 syntax.
2. Make informed design decisions to create a user-friendly application.
3. Keep state based components to a minimum and leverage more functional components.
4. Use a modular architecture for your application file structure.
5. Think deeply about React Lifecycle Methods.
6. Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
7. Become familiar with routing and how to handle dynamic routes.
8. Use propTypes for every component receiving props.
9. Write tests for React components and some asynchronous functionality.

### Technologies Used
- HTML
- CSS
- React
- Jest
- Enzyme
- NPM
- Git


### How to run on a local machine
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. cd to the directory where you cloned the repo
4. run `npm install`
5. clone down [this repo link](https://github.com/turingschool/VRAD-API "API Data") to a directory outside of the directory from the first repo you cloned.
6. repeat steps 3 & 4 for this new repo
7. clone down the image files from [this repo link](https://github.com/turingschool/VRAD-Assets "App Images") and extract the `image` folder and place it into the `public` folder within the app's directory.
8. cd back to the main app's root directory and run `npm start`
9. cd to the API Data root directory and run `npm start`
10. you should now be able to use the Denver Endeavors app

### This project was created by:
Veronica Andrade https://github.com/VeeAndrade<br>
Johnny Cassidy https://github.com/pJanks
