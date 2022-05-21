const express = require('express');
const router = require('express').Router();
import fetch from 'node-fetch';


const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    method: 'post',
    body:JSON.stringify(body),
    headers: {'Content-Type' : 'application/json'}
})
.then((res) => res.json())
.then((data) => {
  // Filter the search results by author, title, and subtitle
  let output = "";
  data.items.forEach((book) => {
    output += `
      <div class="results-box">
          <ul>
               <li>
                <img src= ${book.volumeInfo.imageLinks.smallThumbnail}/>
                  <p><b>Title:</b> ${book.volumeInfo.title}</p>
                  <p><b>Author:</b> ${book.volumeInfo.authors}</p>
                <a href=${book.volumeInfo.canonicalVolumeLink}><button class="book-info"><b>See this book</b></button></a>
                </li>
                </ul>
                <hr>
      </div>
          `;
  });
  // Display the search result
  document.querySelector("#output").innerHTML = output;
})
// Throw an error message when something went wrong during the search
.catch((error) => console.log(error));

// Display "Search results of" text when clicked the search button
document.querySelector(".text").innerHTML = `Search results for: "${query}"`;


// Start searching the lists when user clicks entry key
document
.querySelector("#search-input")
.addEventListener("keyup", function (event) {
if (event.keyCode === 13) {
  document.querySelector("#submit-button").click();
}
});


module.exports = router;
