"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>LA${
              data.languages[0].name
            }NG</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforebegin", msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
// AJAX Call Country 1
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener("load", function () {
// console.log(this.responseText);
// const [data] = JSON.parse(this.responseText);
// console.log(data);
// // Render Country 1
// renderCountry(data);

// Get neighbour Country 2
// const [neighbour] = data.borders;
// if (!neighbour) return;
// AJAX Call Country 2
// const request2 = new XMLHttpRequest();
// request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener("load", function () {
// console.log(this.responseText);
// const data2 = JSON.parse(this.responseText);
// console.log(data2);

// renderCountry(data2, "neighbour");
// renderCountry(data2, "neighbour");
//   });
// });
// };

// getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("germany");
// getCountryData()

//////////////////////////////////////
// SetTimeOut Function
setTimeout(() => {
  console.log("1 second pass");
  setTimeout(() => {
    console.log("2 seconds passs");
  }, 2000);
  setTimeout(() => {
    console.log("3 seconds passs");
  }, 3000);
}, 1000);

///////////////////////////////////////
// Using Async-await to fetch data
const whereAmI = async function (country) {
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))

  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error("problem getting country");

    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);

    // Returning value from Async function
    return `You are in ${data[0].capital[0]}`;
  } catch (err) {
    console.error(err);
  }
};

// whereAmI("hhdhd")
whereAmI("portugal")
  .then((city) => console.log(city))
  .catch((err) => renderError(`Something is missing ${err}`));
