const baseUrl = "http://localhost:3000";

// make fetch request to /mountains/:id to get details about mountain
// get a random number between 1 and 5 to be the mountain ID
fetch(baseUrl + `/mountains/${Math.floor(Math.random() * 5) + 1}`)
  .then((res) => res.json())
  // pass mountain data to function that will add mountain to dom
  .then((mountainData) => renderMountain(mountainData));

function renderMountain(mountain) {
  // select all necessary elements that need to be updated with mountain specific info
  const image = document.querySelector("#mountain-image");
  const name = document.querySelector("#mountain-name");
  const location = document.querySelector("#mountain-location");
  const likes = document.querySelector("#mountain-likes");
  // update elements with mountain specific info
  image.src = mountain.image;
  name.innerText = mountain.name;
  location.innerText = mountain.location;
  likes.innerText = mountain.likes;
}

// fetch list of all mountains
fetch(baseUrl + "/mountains")
  .then((res) => res.json())
  // pass all mountains to function that will render list of mountains
  .then((mountainsData) => renderMountainsList(mountainsData));

function renderMountainsList(mountains) {
  // select the ul that the mountains will be appended to
  const mountainsList = document.querySelector("#mountains-list");
  // iterate over array of mountains
  mountains.forEach((mountain) => {
    // create li for each mountain
    const li = document.createElement("li");
    // update li innerText to mountain name
    li.innerText = mountain.name;
    // add click event listener to li
    // use the same function to render the mountain as we did for the first challenge
    li.addEventListener("click", () => renderMountain(mountain));
    // append mountain li to the dom
    mountainsList.appendChild(li);
  });
}

// select the like button
const likeButton = document.querySelector("#like-button");
// add click event listener to button
likeButton.addEventListener("click", like);

function like() {
  // select the html element that has number of likes
  const likes = document.querySelector("#mountain-likes");
  // reset its likes to be what it was + 1
  // use parse int to change string to integer so that we can do math
  likes.innerText = parseInt(likes.innerText) + 1;
}
