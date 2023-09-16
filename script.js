// const input_api=document.getElementById("api_key");
// const input_search=document.getElementById("input_search");
// const apikey=input_api.value;
// console.log(apikey);
// console.log(input_search.value);
// const apikey="5b5de640";
// const  search1=
// const form=document.getElementsByTagName("form");

let movies = document.getElementById("movies");
let spinner = document.getElementById("loader");

let button = document.getElementById("button");
function navigateVideoDetails(imdbID) {
  console.log(imdbID);
  document.cookie = `id=${imdbID}; path=/movie.html`;
  window.location.href = "http://127.0.0.1:5500/movie.html";
}

async function fetchMovieDetails(imdbID) {
  const endpoint = `http://www.omdbapi.com/?i=${imdbID}&apikey=5b5de640`;
  const response = await fetch(endpoint);
  const result = await response.json();

  let Poster = result.Poster;

  let container = document.createElement("div");
  container.className = "movie-container";
  container.innerHTML = `
    <div class="movie-container">
    <img src="${Poster}" class="movie-image">
    <h2>${result.Title}</h2>
</div>`;
  container.addEventListener("click", () => {
    navigateVideoDetails(imdbID);
  });
  movies.appendChild(container);
//  
}
// alert("click on image to see more details")

async function fetchResults(search1, apikey) {
  const endpoint = `https://www.omdbapi.com/?s=${search1}&apikey=${apikey}`;

  const response = await fetch(endpoint);
  const result = await response.json();
  console.log(result);
  try {
    spinner.style.display = "none";
    for (let i = 0; i < result.Search.length; i++) {
      fetchMovieDetails(result.Search[i].imdbID);
    }
  } catch (err) {
    spinner.style.display = "block";
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  let apikey = document.getElementById("apiKey").value;
  let search1 = document.getElementById("input_search").value;
  try {
    if (apikey !== "" && search1 !== "") {
      spinner.style.display = "block";
      fetchResults(search1, apikey);
    } else {
      spinner.style.display = "block";
      alert("Some Error Occured");
    }
  } catch (err) {
    alert("Please Enter correct details");
  }
});
