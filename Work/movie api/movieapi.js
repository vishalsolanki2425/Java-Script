document.querySelector("#btn").addEventListener("click", ()=> {
    let moviename = document.querySelector("#moviename")
    let movieDetail = document.querySelector("#movieDetail");
    movieDetail.innerHTML = ""

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2fb9c164`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let result = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${data.Poster} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.Title}</h5>
    <p class="card-text">${data.Plot}</p>
    <p class="card-text">${data.Year}</p>
    <p class="card-text">${data.Language}</p>
  </div>
</div>`
movieDetail.innerHTML = result;
    })
    .catch(err => console.log(err));

    moviename.value = ""
});