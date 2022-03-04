// your code here
const mtnImg        = document.querySelector('#mountain-image')
const mtnNameH5     = document.querySelector('#mountain-name')
const mtnLocalH5    = document.querySelector('#mountain-location')
const mtnLikes      = document.querySelector('#mountain-likes')
const mtnUl         = document.querySelector('ul')

let mtnLiked;




fetch('http://localhost:3000/mountains')
.then(res => res.json())
.then(mountains => randMountain(mountains))



function randMountain(mountains) {

    // DELIVERABLE 1
    randMtn = Math.floor( Math.random() * 5 )

    mtnImg.src              = mountains[randMtn].image
    mtnNameH5.textContent   = mountains[randMtn].name
    mtnLocalH5.textContent  = mountains[randMtn].location
    mtnLikes.textContent    = mountains[randMtn].likes
    mtnLiked                = mountains[randMtn]



    // DELIVERABLE 2
    mountains.forEach(mountain => {
        const li = document.createElement('li')
        li.textContent = mountain.name
        mtnUl.append(li)

        li.addEventListener('click', () => displayDetail(mountain))
    })



    // DELIVERABLE 3
    const likeBtn = document.querySelector('button')
    likeBtn.addEventListener('click', () => {
        likesNum = parseFloat(mtnLikes.textContent)
        likesNum += 1
        mtnLikes.textContent = likesNum



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
}

function displayDetail(mountain) {
    mtnImg.src              = mountain.image
    mtnNameH5.textContent   = mountain.name
    mtnLocalH5.textContent  = mountain.location
    mtnLikes.textContent    = mountain.likes
    mtnLiked                = mountain

}
