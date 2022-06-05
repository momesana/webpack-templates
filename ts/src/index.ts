import "./index.css";
const containerId = "root";
const container = document.getElementById(containerId);
if (!container) {
  throw Error(`couldn't find element with id ${containerId}!`);
}
container.innerHTML = "<h1>Hello world</h1>";
