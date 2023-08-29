<div align="center">
<h1> Star Pit </h1>
A sci-fi reader's resource
<br> 

<br>
<b>Built With:</b>
<br>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" /> 
  <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" /> 

[Star Pit DEPLOYED LINK](https://starpit.net/)
</div>


## Abstract: 
A website for sci-fi readers that uses the fetch API to get information from the [Google Books Api](https://developers.google.com/books)and render that data. Users can search for sci-fi books, view information for a specific book, and save them to a 'want to read', 'currently reading', or 'read' shelf. Additionally uses can browse curated lists, which are accessed through the bookshelves enpoint of the Google Books Api. The app uses network requests to access information about sci-fi books, utilizes react router to create a multi-page experience, handles user authentication and data with firebase auth/database, and is e2e tested using Cypress.



## Preview of App:

<div align="center">

<img width="1427" alt="Screen Shot 2023-08-27 at 10 18 02 PM" src="https://github.com/alivaditis/star_pit/assets/123565022/97abe61e-0e58-4b90-b04c-499b7c0ab827">
<img width="1330" alt="Screen Shot 2023-08-27 at 10 17 04 PM" src="https://github.com/alivaditis/star_pit/assets/123565022/ee653352-4b9a-4e18-8b67-9e8ba5e0faac">
<img width="1427" alt="Screen Shot 2023-08-27 at 10 16 16 PM" src="https://github.com/alivaditis/star_pit/assets/123565022/06efee44-93f3-48aa-aece-c81f8f7dfe0c">
<img width="714" alt="Screen Shot 2023-08-27 at 10 15 00 PM" src="https://github.com/alivaditis/star_pit/assets/123565022/d82e16b2-007a-4b3f-825d-40f188f63675">


</div>

## Installation Instructions 
- Fork this repository. 
- Clone it to your local machine using the command: `git clone git@github.com:mbenfowler/sound-stash.git`.
- Run the command: `cd star_pit`
- Run the command: `npm install`
- Run the command: `npm start`
- Once the modules have finished compiling, enter `http://localhost:3000/` into your browser to see the live web page. 



## Context: 
- Mod 3, Week 5: 
  - Current student of Turing School of Software & Design. 
  - Turing is a 7 month program, which offers a total of 4 modules. 
  - This project was completed during the third module that the program has to offer. 
  - Students are required to build a project demonstrating their understanding of React, Browser Router, and Cypres fundamentals.
- Further Iterations:
  - Multiple shelves for 'want to read', 'currently reading', and 'read'
  - Firebase user authentication/database 

## Learning Goals:
- Build a React project in 5 days
- Create a user interface that is easy to use and clearly displays information
- Write DRY, reusable code that follows SRP and trends toward function purity
- Make network requests (using fetch API)
- Further improve React fundamentals
- Test React components & asynchronous JS with Cypress E2E testing
- Practice refactoring
- Create a multi-page UX using Router
