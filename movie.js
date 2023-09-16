window.addEventListener("load", () => {
  let imdbID = document.cookie.split("=")[1];
  console.log(imdbID);
  fetchVideoDetails(imdbID);
});

let moviePoster = document.getElementById("movie-details-container");

async function fetchVideoDetails(imdbID) {
  const endpoint = `http://www.omdbapi.com/?i=${imdbID}&apikey=5b5de640`;
  const response = await fetch(endpoint);
  const result = await response.json();
  console.log(result);

  const container = document.createElement("div");
  container.className = "movie-details-container1";
  container.innerHTML = `<div id="movie-poster">
      <img src="${result.Poster}" class="movie-poster">
  </div>
  <div class="movie-details">
      <h2>${result.Title}</h2>
      <p class="movie-year">Actors:${result.Actors}</p>
      <p class="movie-year">Director:${result.Director}</p>
      <p class="movie-year">Type of Movie: ${result.Type}</p>
      <p class="movie-year">Year:  ${result.Year}</p>
      <p class="IMDB">IMDB ID:${result.imdbID}</p>
      <p class="movie-type">Genre:${result.Genre}</p>
  </div>`;
  moviePoster.appendChild(container);
}


// Actors: "Jerdarius Collier, Lolly Mariah, Elizabeth McCoy";
// Awards: "N/A";
// BoxOffice: "N/A";
// Country: "United States";
// DVD: "N/A";
// Director: "Jerdarius Collier";
// Genre: "Short, Action";
// Language: "English";
// Metascore: "N/A";
// Plot: "N/A";
// Poster: "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg";
// Production: "N/A";
// Rated: "N/A";
// Ratings: [];
// Released: "N/A";
// Response: "True";
// Runtime: "N/A";
// Title: "Miles Morales Ultimate Spiderman";
// Type: "movie";
// Website: "N/A";
// Writer: "Jerdarius Collier";
// Year: "2021";
// imdbID: "tt14311386";
// imdbRating: "N/A";
// imdbVotes: "28";
