// your code here
const mtnImg = document.querySelector('#mountain-image')
const mtnNameH5 = document.querySelector('#mountain-name')
const mtnLocalH5 = document.querySelector('#mountain-location')
const mtnLikes = document.querySelector('#mountain-likes')
const MtnUl = document.querySelector('ul')





fetch('http://localhost:3000/mountains')
.then(res => res.json())
.then(mountains => randMountain(mountains))

function randMountain(mountains) {
    let mountainImgs = [];



    // DELIVERABLE 1
    randMtn = Math.floor(Math.random()*5)

    mtnImg.src = mountains[randMtn].image
    mtnNameH5.textContent = mountains[randMtn].name
    mtnLocalH5.textContent = mountains[randMtn].location
    mtnLikes.textContent = mountains[randMtn].likes



    // DELIVERABLE 2
    mountains.forEach(mountain => {
        mountainImgs.push(mountain.image)


        const li = document.createElement('li')
        li.textContent = mountain.name
        MtnUl.append(li)

        li.addEventListener('click', () => displayDetail(mountain))
    })



    // DELIVERABLE 3
    const likeBtn = document.querySelector('button')
    likeBtn.addEventListener('click', () => {
        likesNum = parseFloat(mtnLikes.textContent)
        likesNum += 1
        mtnLikes.textContent = likesNum



        // DELIVERABLE 4
        const mtnLiked = mountains.find((mountain) => mtnNameH5.textContent === mountain.name)
        mtnLiked.likes += 1

        const updateLikes = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(mountains)
        };
        // fetch('http://localhost:3000/mountains', updateLikes)

    })
}

function displayDetail(mountain) {
    mtnImg.src = mountain.image
    mtnNameH5.textContent = mountain.name
    mtnLocalH5.textContent = mountain.location
    mtnLikes.textContent = mountain.likes
}
