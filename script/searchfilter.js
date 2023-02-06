let allInfo = [];
let result = document.getElementById("results");

window.onload = async () => {
  let response = await fetch("https://reqres.in/api/users?page=2");
  let data = await response.json();
  allInfo = data.data;
  let resultsHTML = "";

  allInfo.forEach((user) => {
    resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
  });
  result.innerHTML = resultsHTML;
};
let searchBtn = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let searchQuery = searchInput.value;
  let filteredData = allInfo.filter((user) => user.email.includes(searchQuery));
  let resultsHTML = "";

  filteredData.forEach((user) => {
    resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
  });

  results.innerHTML = resultsHTML;

  searchBtn.addEventListener("click", search);
  searchInput.addEventListener("keyup", search);

  function search(event) {
    event.preventDefault();
    let searchQuery = searchInput.value;
    let filteredData = allInfo.filter((user) =>
      user.email.includes(searchQuery)
    );
    let resultsHTML = "";
    filteredData.forEach((user) => {
      resultsHTML += `<div>
      <img src="${user.avatar}" alt="${user.email}">
      <p>${user.email}</p>
    </div>`;
    });
    results.innerHTML = resultsHTML;
  }
});
