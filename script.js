const projects = [
  "asynchronous",
  "Bankist",
  "forkify",
  "mapty-flowchart",
  "modal",
  "number-guessing",
  "pig",
];

const list = document.getElementById("project-list");

projects.forEach((project) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="./${project}/index.html" target="_blank">
      ${project}
    </a>
  `;
  list.appendChild(li);
});
