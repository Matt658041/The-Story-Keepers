async function newBookSearch(event) {
    event.preventDefault();

    const title = document.querySelector('input[name= "book-search"]').value;
    const post_url = document.querySelector('input[name= "post-url"]').value;

    const response = await fetch('/https://www.googleapis.com/books/v1/volumes?q=${query}`', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
   }
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);