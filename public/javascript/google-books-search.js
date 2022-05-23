const books = require('google-books-search');
const bodyParser = require('body-parser');



async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="google-books-search"]').value;
    const post_url = document.querySelector('input[name="google-books-search"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);


