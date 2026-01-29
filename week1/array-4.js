//Movie Streaming Platform
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

//2. map() to return: "Inception (8.8)"
const result2 = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log(result2);

//3. reduce() to find average movie rating
const averageRating = movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
console.log(averageRating);

//4. find() movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

//5. findIndex() of "Avengers"
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);
  