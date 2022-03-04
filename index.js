const baseUrl = "http://localhost:3000";

fetch(baseUrl + `/mountains/${Math.floor(Math.random() * 5) + 1}`)
  .then((res) => res.json())
  .then((mountainData) => renderMountain(mountainData));

function renderMountain(mountain) {
  const image = document.querySelector("#mountain-image");
  const name = document.querySelector("#mountain-name");
  const location = document.querySelector("#mountain-location");
  const likes = document.querySelector("#mountain-likes");
  image.src = mountain.image;
  name.innerText = mountain.name;
  location.innerText = mountain.location;
  likes.innerText = mountain.likes;
}

fetch(baseUrl + "/mountains")
  .then((res) => res.json())
  .then((mountainsData) => renderMountainsList(mountainsData));

function renderMountainsList(mountains) {
  const mountainsList = document.querySelector("#mountains-list");
  mountains.forEach((mountain) => {
    const li = document.createElement("li");
    li.innerText = mountain.name;
    li.addEventListener("click", () => renderMountain(mountain));
    mountainsList.appendChild(li);
  });
}

const likeButton = document.querySelector("#like-button");
likeButton.addEventListener("click", like);

function like() {
  const likes = document.querySelector("#mountain-likes");
  likes.innerText = parseInt(likes.innerText) + 1;
}
