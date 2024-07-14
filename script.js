document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("one-movie");

  function selectMovie(id = 1) {
    fetch(`http://localhost:3000/films/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const output = document.getElementById("one-movie");

        output.innerHTML = `
          <div>
            <img
              src=${data.poster}
              class="poster"
            />
            <div class="movie-description">
              <p>Title: ${data.title}</p>
              <p>Description: ${data.description}</p>
              <p>Runtime: ${data.runtime}</p>
              <p>Showtime: ${data.showtime}</p>
              <p>Available Tickets: ${data.tickets_sold}</p>
            </div>
          <button>Buy</button>
        `;
      })
      .catch((error) => {
        output.innerHTML = "Fetch error: " + error.message;
      });
  }

  selectMovie();

  fetch("http://localhost:3000/films")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((movie) => {
        const output = document.getElementById("all-movies");
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";

        movieItem.innerHTML = `
          <img
            src=${movie.poster}
            class="movie-item-image"
          />
          <h4>${movie.title}</h4>
          <p>${movie.runtime}</p>
        `;
        output.appendChild(movieItem);
      });
    })
    .catch((error) => {
      console.log("error is: ", error);
      output.innerHTML = "Fetch error: " + error.message;
    });
});
