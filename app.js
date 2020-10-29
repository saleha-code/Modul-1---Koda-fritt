//Array for map function.
const locationObjects = ["hostname", "host", "pathname", "href", "port"];

//Map function for location properties.
const buttons = locationObjects
  .map((locationObject) => {
    return `<button class="showbtn" >Show ${locationObject}</button>`;
  })
  .join("");

document.querySelector(".location").innerHTML = buttons;

//querySelectorAll function for getting all elements from class.
const locationProperties = document.querySelectorAll(".showbtn");

//Click event on every button.
locationProperties.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (e) => {
    const locationPropertiesEl = document.createElement("div");
    const property = e.target.innerHTML.slice(5);

    locationPropertiesEl.innerHTML = location[property];
    e.target.parentElement.appendChild(locationPropertiesEl);
  });
});
