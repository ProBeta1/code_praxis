### App is working now , try logging with a Google account and posting some on Discuss !

## Todos --
- Store the user details on DB , by creating corresponding API and linking with handleSubmit button of CFRegister.js page
- Query to recommend problems
- Problem solving tracker on problems

## Installation instructions 

- Fork this repo
- Clone it locally : git clone (url)
- Open the project in your fav editor : VSCode seems ideal
- Run : npm install
- Create a .env file in the base directory and paste the API_KEY which would be emailed to the team
- After all the packages are configured , enter : npm run dev
- Both the backend and frontend server should start running

## Tech Stack

- MERN
- Tailwind CSS
- Firebase 


## Steps to add new Problems to DB

- Create the model like models/Dp.js
- Create routes like routes/dpRoutes.js
- Include them in root file index.js
- Create a service in client like services/postDpProblem.js
- Make corresponding changes in pages/PostTheProblems.js