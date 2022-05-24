function executeUpvote(rating) {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }

}

async function upvote1ClickHandler(event) {
  event.preventDefault();
executeUpvote(1);
}
async function upvote1ClickHandler(event) {
  event.preventDefault();
executeUpvote(1);
}
async function upvote2ClickHandler(event) {
  event.preventDefault();
executeUpvote(2);
}
async function upvote3ClickHandler(event) {
  event.preventDefault();
executeUpvote(3);
}async function upvote4ClickHandler(event) {
  event.preventDefault();
executeUpvote(4);
}
async function upvote5ClickHandler(event) {
  event.preventDefault();
executeUpvote(5);
}

document.querySelector('.upvote-btn1').addEventListener('click', upvoteClickHandler);
document.querySelector('.upvote-btn2').addEventListener('click', upvoteClickHandler);
document.querySelector('.upvote-btn3').addEventListener('click', upvoteClickHandler);
document.querySelector('.upvote-btn4').addEventListener('click', upvoteClickHandler);
document.querySelector('.upvote-btn5').addEventListener('click', upvoteClickHandler);