const apiUrl = "https://fakerapi.it/api/v1/";
const personsContainer = document.querySelector(".app__persons--cards");
const personsLoader = document.querySelector(".persons--loader");
const companiesContainer = document.querySelector(".app__companies--cards");
const companiesLoader = document.querySelector(".companies--loader");
const booksContainer = document.querySelector(".app__books--cards");
const booksLoader = document.querySelector(".books--loader");
let pesrsonsArray = [];

function getPersons() {
  personsLoader.classList.remove("hidden");
  fetch(`${apiUrl}persons?_quantity=21&_gender=male&_birthday_start=2005-01-01`)
    .then((res) => res.json())
    .then((persons) => {
      pesrsonsArray = persons.data;
      showPersons(pesrsonsArray);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      personsLoader.classList.add("hidden");
    });
}

function searchPersons(searchInput) {
  let searchText = searchInput.value.toLowerCase();
  let filteredPersons = pesrsonsArray.filter((person) => {
    return (
      person.firstname.toLowerCase().includes(searchText) ||
      person.lastname.toLowerCase().includes(searchText)
    );
  });
  showPersons(filteredPersons);
}

function showPersons(persons) {
  personsContainer.innerHTML = "";
  persons.forEach((person) => {
    personsContainer.innerHTML += `<article class="persons--card">
        <figure class="card--img"><img src=${
          person.image
        } alt="person image"></figure>
        <h3 class="person-name"><span class="static-data"> Name:</span><span class="variable-data person-name">${
          person.firstname + " " + person.lastname
        } </span></h3>
        <span> <span class="static-data">Phone: </span><span class="variable-data">${
          person.phone
        }</span> </span>
        <span> <span class="static-data">Email: </span><span class="variable-data"> ${
          person.email
        }</span></span>
        <span><span class="static-data">Gender:</span><span class="variable-data"> ${
          person.gender
        }</span></span>
        <span><span class="static-data">Birthday:</span><span class="variable-data"> ${
          person.birthday
        }</span></span>
         <button><a href="${
           person.website
         }" target="_blank" >Visit Website</a></button>
    </article>`;
  });
}
getPersons();

function getcompanies() {
  companiesLoader.classList.remove("hidden");
  fetch(`${apiUrl}companies?_quantity=15`)
    .then((res) => res.json())
    .then((companies) => {
      showcompanies(companies.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      companiesLoader.classList.add("hidden");
    });
}
function showcompanies(companies) {
  companies.forEach((company) => {
    companiesContainer.innerHTML += `<article class="companies--card">
            <figure class="card--img"><img src=${company.image} alt="company image"></figure>
            <h3><span class="static-data"> Name:</span><span class="variable-data">${company.name} </span></h3>
            <span> <span class="static-data">Phone: </span><span class="variable-data">${company.phone}</span> </span>
            <span> <span class="static-data">Email: </span><span class="variable-data">${company.email}</span> </span>
            <span> <span class="static-data">Country: </span><span class="variable-data">${company.country}</span> </span>
            <span> <span class="static-data">Vat: </span><span class="variable-data">${company.vat}</span> </span>
            <button><a href="${company.website}" target="_blank" >Visit Website</a></button>   
        </article>`;
  });
}
getcompanies();

function getbooks() {
  booksLoader.classList.remove("hidden");
  fetch(`${apiUrl}books?`)
    .then((res) => res.json())
    .then((books) => {
      showbooks(books.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      booksLoader.classList.add("hidden");
    });
}
function showbooks(books) {
  books.forEach((book) => {
    booksContainer.innerHTML += `<article class="books--card">
                <figure class="card--img"><img src=${book.image} alt="book image"></figure>
                <h3> <span class="static-data">Title: </span><span class="variable-data">${book.title}</span> </h3>
                <span> <span class="static-data">Author: </span><span class="variable-data">${book.author}</span> </span>
                <span> <span class="static-data">Genre: </span><span class="variable-data">${book.genre}</span> </span>
                <span> <span class="static-data">Date published: </span><span class="variable-data">${book.published}</span> </span>
                <span> <span class="static-data">Publisher: </span><span class="variable-data">${book.publisher}</span> </span>
          
                
            </article>`;
  });
}
getbooks();
