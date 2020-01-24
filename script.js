
function getRandomDogImages(numPics){
    console.log(`get ${numPics} dog images`);
    const baseUrl ='https://dog.ceo/api/breeds/image/random/';
    const url = baseUrl + numPics;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            console.log(responseJson);
            displayResults(responseJson);
        })
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function getRandomBreedImages(breed){
    console.log(`get one image of ${breed}`);
    const baseUrl ='https://dog.ceo/api/breed/';
    const url = baseUrl + breed + '/images/random';
    console.log(url);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            console.log(responseJson);
            displayResults(responseJson);
        })
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: breed not found`);
    });
}

function displayResults(responseObj){
    console.log('displaying results...');

    const imageArray = responseObj.message;
    let imageArrayHtml = '';

    if (Array.isArray(imageArray)) {
        for (let i = 0; i < imageArray.length; i++) {
            imageArrayHtml += `<img src=${imageArray[i]} width=200px>`
        };
    } else {
        imageArrayHtml += `<img src=${imageArray} width=200px>`
    }

    $('.search-results').html(imageArrayHtml);
}

function formRandomSubmit() {
    $('#js-form-random').on('submit', function(event) {
        event.preventDefault();
        const searchNumber = $('#searchNumber').val();
        const numPics = parseInt(searchNumber, 10);
        $('.search-results').empty();
        $('#js-error-message').empty();
        //should add a error catch in case user enters something not within range
        if (!searchNumber || searchNumber < 1 || searchNumber > 50) {
            //  throw new Error("Number needs to be an integer between 1 and 50");
            $('#js-error-message').text(`Number needs to be an integer between 1 and 50`);
        } else {
            getRandomDogImages(numPics);
        }
    });
}

function formBreedSubmit() {
    $('#js-form-breed').on('submit', function(event) {
        event.preventDefault();
        const searchBreed = $('#search-breed').val();
        $('.search-results').empty();
        $('#js-error-message').empty();
        if (!searchBreed) {
            $('#js-error-message').text(`Please submit the desired breed`);
        } else  {
            getRandomBreedImages(searchBreed);
        }
    });
}

function handlePage() {
    formRandomSubmit();
    formBreedSubmit();
}

$(handlePage);