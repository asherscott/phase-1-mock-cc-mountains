# Mountains Mock Code Challenge

You will be building out a simple application that will allow users to view different mountains and like those mountains.

## Setup

Begin by running `json-server --watch db.json` in your console.

Test your server by visiting this route in the browser:

[http://localhost:3000/mountains](http://localhost:3000/mountains)

Once the json server is running, open the index.html file using live server.

## Core Deliverables

As a User, I can:

1. See a random mountain displayed in the #mountain-details div when the page loads. A user will see the mountain's image, name, location and number of likes.

2. See a list of all mountain names at the bottom of the page in the #mountains-list ul when the page loads. A user should be able to click on a mountain in the list, and display the information for that mountain in the #mountain-details div.

3. A user should be able to click on the like button and the number that is displayed on the button should increment by 1. This number of likes does not need to persist upon page refresh.

## Advanced Deliverables

4. When a user clicks on the like button it sends a PATCH request to the `/mountains/:id` endpoint and the like persists in the database.

5. Use JavaScript to find the #new-mountain form that you can see in your HTML file. _do not edit the HTML file_ Once the form create a new mountain that persists and also appears on the list of mountains at the bottom of the page. Like the rest of the mountains it should be clickable so that you can view its details in the #mountain-details div.
