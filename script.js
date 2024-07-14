document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("all-movies");

  fetch("http://localhost:3000/films")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((post) => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";

        movieItem.innerHTML = `
          <img
            src="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
            class="movie-item-image"
          />
          <h4>Lord of the rings</h4>
          <p>4:00PM</p>
        `;
        output.appendChild(movieItem);
      });
    })
    .catch((error) => {
      console.log("error is: ", error);
      output.innerHTML = "Fetch error: " + error.message;
    });
});
