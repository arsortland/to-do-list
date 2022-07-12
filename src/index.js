import "./style.css";
import "./todo.js";
//Make basic functional HTML
//Make basic layout
//Make DOM module and object(todo) module work in html.
const sidebar = document.querySelector(".sidebar");
const testing = document.querySelector(".testing");

const createProject = document.querySelector(".createproject");
createProject.addEventListener("click", () => {
  const typein = document.createElement("input");
  const submit = document.createElement("input");
  typein.setAttribute("type", "text");
  submit.setAttribute("type", "submit");
  testing.appendChild(typein);
  testing.appendChild(submit);
  createProject.disabled = true;
  //console.log(typein.value);
  submit.addEventListener("click", () => {
    let newproj = typein.value;
    console.log(newproj);
  });

  // submit.addEventListener("submit", () => (createProject.disabled = false));
  //Make it only apply once each time. Make a button that also needs to be pressed
  //before create button is active again?
});
