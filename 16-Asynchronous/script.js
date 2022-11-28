'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJson = (url, errorMsg = 'Something went wrong...') => {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
    return res.json();
  });
};

const renderError = function (msg) {
  const message = `Something went wrong, ${msg}, Try Again..`;
  console.error(message);

  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//Promises and Fetch Api

const getCountryData = function (country) {
  getJson(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      if (!data[0].borders) throw new Error('No Neighbors Found.');

      const neighbor = data[0].borders[1];

      return getJson(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(renderError);
};

///////////////////////////////////////
/*

// * Promises in parallel

const promises = [
  getJson(`https://restcountries.com/v2/name/egypt`),
  getJson(`https://restcountries.com/v2/name/italy`),
  getJson(`https://restcountries.com/v2/name/oman`),
];

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all(promises);
    console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

// get3Countries('egypt', 'oman', 'emirates');

// * Race

// (async function () {
//   const res = await Promise.race(promises);
//   console.log(res[0]);
// })();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

//Throw error when
Promise.race([getJson(`https://restcountries.com/v2/name/egypt`), timeout(5)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled [ES2020]
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
// .catch(err => console.warn(err)); // only with Promise.all()

//Promise.any [ES2021] -- Return first fulfilled promise.
Promise.any(promises)
  .then(res => console.log(res[0]))
  .catch(err => console.warn(err)); // only if all promises are rejected.



//ES2017: ASYNC - AWAIT

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=366838499085184421535x68931`
    );
    if (!resGeo.ok) throw new Error('Problem Getting location data.');
    const dataGeo = await resGeo.json();

    //Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem Getting Country data.');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} ⛔⛔⛔`);
    renderError(`${err.message} ⛔⛔⛔`);

    //Reject promise returned from async function
    throw err;
  }
};

(async function () {
  console.log('1: Will get Location');
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}⛔`);
  }
  console.log('3: Finished getting Location');
})();

// btn.addEventListener('click', whereAmI);


//Promisifying the Geolocation API.

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return getJson(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=366838499085184421535x68931`,
        'Geocode Error'
      );
    })
    .then(data => {
      if (!data.country) throw new Error('coords are not available');
      return getCountryData(data.country);
    })
    .catch(renderError);
};




const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery Draw is happening.');
  setTimeout(() => {
    if (Math.random() >= 0.5) resolve('You Win 🏆💸💸');
    else {
      reject(new Error('You Lost your Money 😏'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('Waited for 1 Seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 2 Seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 3 Seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 4 Seconds');
  });

// Event Loop , Callback queue, Microtasks queue

console.log('Test Start');

// Callback Queue
setTimeout(() => {
  console.log('Zero Delay Callback Queue');
}, 0);

//Microtask queue , High Priority as Callback queue
Promise.resolve('1. Resolved Promise 0 Delay.').then(res => console.log(res));
Promise.resolve('2. Resolved Promise 0 Delay.').then(res => {
  // for (let i = 0; i < 10 ** 4; i++);
  console.log(res);
});

console.log('Test End');


const getJson = (url, errorMsg = 'Something went wrong...') => {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
    return res.json();
  });
};

const renderError = function (msg) {
  const message = `Something went wrong 😢😢 ${msg}, Try Again..`;
  console.error(message);

  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//Promises and Fetch Api

const getCountryData = function (country) {
  getJson(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      if (!data[0].borders) throw new Error('No Neighbors Found.');

      const neighbor = data[0].borders[1];

      return getJson(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(renderError);
};

btn.addEventListener('click', function () {
  // getCountryData('australia');
  getCountryData('egypt');
});

//Callback Hell.

const getCountryAndNeighbor = function (country) {
  //Ajax Call Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render Country 1
    renderCountry(data);

    //Get Neighbor Country 2
    const neighbors = data.borders;
    neighbors[0] = 'PSE';

    if (!neighbors) return;

    neighbors.forEach(neighbor => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
      request2.send();

      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        //Render Country 2
        renderCountry(data2, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbor('egypt');
*/
