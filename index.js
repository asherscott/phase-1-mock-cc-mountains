// your code here
const mtnImg        = document.querySelector('#mountain-image')
const mtnNameH5     = document.querySelector('#mountain-name')
const mtnLocalH5    = document.querySelector('#mountain-location')
const mtnLikes      = document.querySelector('#mountain-likes')
const mtnUl         = document.querySelector('ul')

let mtnLiked;
let mountainsArray;



fetch('http://localhost:3000/mountains')
.then(res => res.json())
.then(mountains => {
    mountainsArray = mountains
    randMountain(mountainsArray)
})



function randMountain(mountains) {

    // DELIVERABLE 1
    randMtn = Math.floor( Math.random() * mountains.length )

    mtnImg.src              = mountains[randMtn].image
    mtnNameH5.textContent   = mountains[randMtn].name
    mtnLocalH5.textContent  = mountains[randMtn].location
    mtnLikes.textContent    = mountains[randMtn].likes
    mtnLiked                = mountains[randMtn]


    // DELIVERABLE 2
    mountainsArray.forEach((mountain) => displayList(mountain))
}



function displayList(mountain) {
    const li = document.createElement('li')
    li.textContent = mountain.name
    mtnUl.append(li)

    li.addEventListener('click', () => displayDetail(mountain))
}



function displayDetail(mountain) {
    mtnImg.src              = mountain.image
    mtnNameH5.textContent   = mountain.name
    mtnLocalH5.textContent  = mountain.location
    mtnLikes.textContent    = mountain.likes
    mtnLiked                = mountain

}



// DELIVERABLE 3
const likeBtn = document.querySelector('button')
likeBtn.addEventListener('click', () => {
    mtnLikes.textContent = parseFloat(mtnLikes.textContent) + 1



    // DELIVERABLE 4
    mtnLiked.likes += 1

    fetch(`http://localhost:3000/mountains/${mtnLiked.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mtnLiked)
    })
})



// DELIVERABLE 5
// BUG: right after creating a new mountain, the likes for that mountain will not persist after first refresh, but will persist for later refreshes
const form = document.querySelector('form')
form.style.display = 'block';
const inputs = document.querySelectorAll('input')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    newMountain()
})



function newMountain() {

    const newMtn = {
        name:       inputs[0].value,
        location:   inputs[1].value,
        image:      inputs[2].value,
        likes:      0,
    }

    fetch(`http://localhost:3000/mountains`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMtn)
    })
    .then(res => res.json())
    .then(mtn => console.log(mtn))

    displayList(newMtn)
}
