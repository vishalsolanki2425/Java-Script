let breedListSelect = document.querySelector("#breedList");

function BreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => {

        for(let breed in data.message){
            let option = document.createElement('option');
            option.value = breed;
            option.innerHTML = breed;
            breedListSelect.append(option)
        }
    })
    .catch(err => console.log(err));
}

BreedList();

document.querySelector("#btn").addEventListener("click", ()=> {
    let breed = breedListSelect.value;
    console.log(breed);

    let imagesDiv = document.querySelector("#images");
    imagesDiv.innerHTML = "";

    fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => res.json())
    .then((data) =>{

         data.message.forEach((item) => {
            let image = document.createElement('img');
            image.setAttribute('src', item)
            image.style.height = "200px"
            image.style.width = "200px"
            image.style.margin = "15px"
            imagesDiv.append(image);
         })

        }).catch(error => console.log(error));
})