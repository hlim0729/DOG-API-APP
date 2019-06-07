'use strict';

function getDogImage(numberOfDogs = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Oh no! there are some issues. Please try later again :('));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
   $('.results').html(`<h2>Look at this(these) dog(s)!</h2>`);

   for (let dog of responseJson.message) {
     $('.results').append(
     `<img src="${dog}" class="results-img" width="200" height="100`);
   }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs = $('input[name="numOfDogs"]').val();
    getDogImage( numOfDogs );
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
