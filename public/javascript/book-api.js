// Event listeners for the search button
document.querySelector("#submit-button").addEventListener("click", searchBook);
document.querySelector("#submit").addEventListener("click", searchBook);

//Place saved Local storage item into search bar
var storedItem = localStorage.getItem('search-input');
console.log(storedItem);
function storedBook(){
  document.getElementById("search-input").value = storedItem;
  searchBook();
  getBeer();
};

storedBook();


// When user inputs the search bar and clicked search button, start searching
function searchBook(event) {
  let query = document.querySelector("#search-input").value;
  // Initiate the fetch API
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
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
  //Save the search within Local Storage
  localStorage.setItem("search-input", query);
}

// Start searching the lists when user clicks entry key
document
  .querySelector("#search-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.querySelector("#submit-button").click();
    }
  });
