const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
//  Using Fetch method PROMISES
// const requestFetch = fetch("https://restcountries.com/v2/name/portugal");
// console.log(requestFetch);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
// A fetch function return a promise, the promise data (response) is handle by then(), to read the data from response, we need to call json() on the response method. It will return a new promise, we will thne need to call another then().
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData("germany");

//  Using Fetch method PROMISES With other neighbour Country
const requestFetch = fetch("https://restcountries.com/v2/name/portugal");
console.log(requestFetch);

const getCountryData = function (country) {
  //   // Country 2
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      //       // if (!response) return;
      //       // throw new Error("No Neighbour Found!");
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);

      // Getting the neighbour country from the previous country data
      const neighbourFetch = data[0].borders[0];

      // if (!neighbourFetch) return; throw new Error('No Neighbour Found!')

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbourFetch}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(` ${err}`);

      renderError(`Something went wrond ${err.message}. Try again! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  // To catch/detect error, we call second callback function inside the then() OR add Catch()
};

btn.addEventListener("click", () => {
  getCountryData("portugal");
  // getCountryData("dggdhsh");
});
// getCountryData("germany");
