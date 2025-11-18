const express = require("express");
const app = express();

app.use(express.static("public"));

const movies = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, isClassic: true, director: "Frank Darabont" },
    { id: 2, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, isClassic: false, director: "Christopher Nolan" },
    { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008, isClassic: false, director: "Christopher Nolan" },
    { id: 4, title: "Titanic", genre: "Romance", releaseYear: 1997, isClassic: true, director: "James Cameron" },
    { id: 5, title: "The Matrix", genre: "Sci-Fi", releaseYear: 1999, isClassic: true, director: "The Wachowskis" },
    { id: 6, title: "Avengers: Endgame", genre: "Action", releaseYear: 2019, isClassic: false, director: "Russo Brothers" }
];

app.get("/movies", (req, res) => {
    res.json(movies);
});

app.get("/movies/classics", (req, res) => {
    const classics = movies.filter(m => m.isClassic === true);
    res.json(classics);
});

app.get("/movies/genres", (req, res) => {
    const genres = movies.reduce((acc, movie) => {
        if (!acc[movie.genre]) acc[movie.genre] = 0;
        acc[movie.genre]++;
        return acc;
    }, {});

    const formattedGenres = Object.keys(genres).map(g => ({
        name: g,
        movieCount: genres[g]
    }));

    res.json({ genres: formattedGenres });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});