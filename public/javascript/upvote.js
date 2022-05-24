async function executeUpvote(rating) {
  console.log(rating);
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/posts/upvote", {
    method: "PUT",
    body: JSON.stringify({
      post_id: id,
      rating: rating
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

async function upvote1ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(1);
}

async function upvote1ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(1);
}

async function upvote2ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(2);
}

async function upvote3ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(3);
}

async function upvote4ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(4);
}

async function upvote5ClickHandler(event) {
  event.preventDefault();
  await executeUpvote(5);
}

document
  .querySelector(".upvote-btn1")
  .addEventListener("click", upvote1ClickHandler);
document
  .querySelector(".upvote-btn2")
  .addEventListener("click", upvote2ClickHandler);
document
  .querySelector(".upvote-btn3")
  .addEventListener("click", upvote3ClickHandler);
document
  .querySelector(".upvote-btn4")
  .addEventListener("click", upvote4ClickHandler);
document
  .querySelector(".upvote-btn5")
  .addEventListener("click", upvote5ClickHandler);
