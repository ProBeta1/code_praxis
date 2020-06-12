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

## App for now is customised to just post problems

## Steps to add new Problems to DB

- Create the model like models/Dp.js
- Create routes like routes/dpRoutes.js
- Include them in root file index.js
- Create a service in client like services/postDpProblem.js
- Make corresponding changes in pages/PostTheProblems.js