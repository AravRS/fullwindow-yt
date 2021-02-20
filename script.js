addButton();

function addButton() {
  var theDiv = document.querySelector(".ytp-right-controls");

  const newButton = document.createElement("button");
  newButton.draggable = false;
  newButton.id = "fullWindowBtn";
  newButton.classList.add("player-btn");
  newButton.classList.add("ytp-button");
  newButton.title = "Fullwindow";
  newButton.addEventListener("click", fullWindowHandle);

  const newButtonIcon = document.createElement("img");
  newButtonIcon.id = "fullWindowBtnIcon";
  newButtonIcon.className = "player-btn-img";
  newButtonIcon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACyUlEQVRoge2YPWgUURSFz02MYNiIdpqERASVEEG0EMEfiJDCIkQsBAtrG0mpJqmsApYGtFAQ0giCKGiiYCVoo5BGCIISTBBFIor5QU3MfhYzq+tk3uzsZGfHhf2q3ffuvXPOuzO8NyPVqVOnzn8L0AqMAlPAMtVj2b/mVWB7UvFHgYUqinYxDxx26TSH+HZJU5JaErmvPPOSuszsQ3CiwZFwQf+KH5TULGm4aGxIUi4wlhabJV0Mm3B1YEZSR9FQi5ktAi3yVsM1liazZtYZHHR1oD3wfwDISRooMZYmQU2S3B0gXS3JMLM1el0dqBlq3sCGUgFhbasmpW7nmu9A3UDW1A1kTd1A1tSCgR5Jz1yTJc9CaW5kwFZJJyR1S2rz9XyU9FrSuJnN+XEm6byZjcYt/IeUhO8B7hD9mvoLGAf2JblAKgYAA4aAlTJeKVeBK0BjpgaABmCsDOFBHgIbszQwsg7xBW5lYgA4DuRDBF0DhoFvZZg4XVUDePf9S4eYLX5MG3A3poG3lLqVKmzgSISYXCC2D5iJYeJUIacaG9nJuIFm9kBSl6TLklYiQvsjC1W4A8/jdiCQtx944ch7U00D00kM+LmNwGBI3lI1DXxOasDPz+FtZsXkgSbJ/QysFhWIt3m4+ZQ0Edgr6YnW6vxiZisKmShQ/BH1WFIBPrPlJgDNwIikSUmHQkJmCj9cBiaKft8EetfRicflBAM98oRfktTkCHtUqsgOvO/y6+GpX6sT72QZ+QwA24DbMWsfiLMSvZS3xQfJA7v8WjccMR14h7xzwNeYde/H6+Xf1buOtzu6VjGKMb9OKzAXMj8NvCqj3gKwO7aBSoJ3pPiZYBEK5IlzkEvZRB/Jnq3vwNlMxRcAuok+XgSZBA5mrXsNQD9wD1gKEf0DmADOAJEHzkw/nUsSsEnSTkmtkholvZf0zswWMxVWLX4DTLgQa6qcwYEAAAAASUVORK5CYII=`;

  newButton.appendChild(newButtonIcon);
  theDiv.appendChild(newButton);
}

function fullWindowHandle() {
  window.location.href =
    "https://www.youtube.com/embed/" + getVideoID(window.location.toString());
}

function getVideoID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
