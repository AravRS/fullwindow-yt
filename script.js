addButton();
// const videoLink = window.location.toString();

function addButton() {
  var theDiv = document.getElementsByClassName("ytp-right-controls")[0];

  const newButton = document.createElement("button");
  newButton.draggable = false;
  newButton.id = "fullWindowBtn";
  newButton.classList.add("player-btn");
  newButton.classList.add("ytp-button");
  newButton.title = "fullWindowBtn";
  //   newButton.setAttribute("aria-label", "fullWindowBtn");
  newButton.addEventListener("click", fullWindowHandle);

  const newButtonIcon = document.createElement("img");
  newButtonIcon.id = "fullWindowBtnIcon";
  newButtonIcon.className = "player-btn-img";
  newButtonIcon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABR0lEQVRoge3ZzU3DQBDF8f8AIqdQASKhAOgCGoA6ckbQBx+N0AdUQBJEARbHRI9DcgLvBLysN4j5XVebfc8TW4oDIYSw1SSNJT1ImktaqLzF+qx7SePc8OeSmh5CpzSSzryM5oQ/Bp6AYdZVyNcAp2Y2bVvccTZeUT88wAGrLK28CcyBwxKJOpiZ2ahtwSuwAHaLRfqZpZnttS14X6FtCQ9OFq/AnxAFaosCtUWB2qJAbVGgtihQWxSoLQrU9q8LXAMDywQMgJuuIbwf9dqwd2hm710P/nTWkNX7n6R12S9yJjCRtJ+xH4D1Z0y67s+ZQK9KTGAreAWWvaXYLJnFK/BWIEhXr6kFr8BjgSBdJbN4N/EYeKb+G+oGODGzWdticgJm9gJcsOH5XFgDXKbCf4ukkaQ7SVP19xfTVNKtpKPfuxYhhFDCB2T5tVMtVQy/AAAAAElFTkSuQmCC`;

  newButton.appendChild(newButtonIcon);
  theDiv.appendChild(newButton);
}

function fullWindowHandle() {
  window.location.href = `https://www.youtube.com/embed/${getVideoID(
    window.location.toString()
  )}`;
}

function getVideoID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
