
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="google-books-search"]').value;
    const post_url = document.querySelector('input[name="google-books-search"]').value;
  
    const response = await fetch(`/api/book-search.js`, {
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
  
  document.querySelector('submit-button').addEventListener('submit', newFormHandler);


