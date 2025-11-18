# Movie Collection Display API

## 1. About the Collection
This collection contains a mix of classic and modern movies across different genres. It includes films from the 1990s to recent years to demonstrate filtering, categorizing, and displaying movie data through an API.


## 2. Project Description
This project is a simple Movie Collection API built with Node.js and Express.js. It provides three GET endpoints to view all movies, classic movies, and available genres. A basic HTML page uses JavaScript fetch() to display the data on the frontend.


**Technologies Used:**  
Node.js  
Express.js  
HTML  
CSS  
JavaScript (Fetch API)


## 3. Genres Available
The movie collection includes the following genres:

Drama  
Action  
Thriller  
Sci-Fi  
Romance  


## 4. Project Structure

movie-collection-api/
|
|-- public/
|     |-- index.html
|     |-- style.css
|     |-- script.js
|
|-- .gitignore
|-- package.json
|-- server.js
|-- README.md


## 5. API Documentation

1.GET /movies

Method: GET
Description: Returns all movies in the collection.
Sample Response:

[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]

2.GET /movies/classics

Method: GET
Description: Returns only classic movies.
Sample Response:

[
  {
    "id": 3,
    "title": "The Godfather",
    "genre": "Crime",
    "releaseYear": 1972,
    "isClassic": true,
    "director": "Francis Ford Coppola"
  }
]

3.GET /movies/genres

Method: GET
Description: Returns unique genres with the number of movies in each genre.
Sample Response:

{
  "genres": [
    { "name": "Drama", "movieCount": 2 },
    { "name": "Action", "movieCount": 1 }
  ]
}


## 6. Installation & Setup Instructions

1. Clone the repository

git clone https://github.com/yourusername/movie-collection-api.git


2. Go to the project folder

cd movie-collection-api


3. Install dependencies

npm init -y
npm install express


4. Start the server

node server.js


5. Access the API

All movies → http://localhost:3000/movies

Classic movies → http://localhost:3000/movies/classics

Genres → http://localhost:3000/movies/genres

6. Open the frontend

http://localhost:3000


## 7. Features

View all movies

View classic movies

View genres with movie counts

Simple HTML page with buttons

Data displayed using fetch()


## 8. GitHub Repository Link :
[]


## 9. Author Information

Sai Ganesh P
