const button = document.querySelector("button"); //show image button
const authorSpan = document.querySelector(".author"); //image credit
const imgDiv = document.querySelector(".image-container"); //image container
const img = document.querySelector(".img"); //image

const getImage = async function () { //f'n to get random image object
  const res = await fetch("https://picsum.photos/v2/list?limit=100"); //variable to hold API response (100 image array)
  const images = await res.json(); //variable to parse API response and store data (100 image array)
  selectRandomImage(images); //selects image at randomIndex from array
};

const selectRandomImage = function (images) { //f'n to select image at random index from array produced by getImage
  const randomIndex = Math.floor(Math.random() * images.length);  //selects random index value between 0 and 99
  //Math.floor rounds number down, Math.random selects random number between 0 and 1
  const randomImage = images[randomIndex]; //grabs single image at randomIndex from images array produced by getImage
  displayImage(randomImage); //displays random image and properties in browser
};

const displayImage = function(randomImage){ //f'n to display and access properties of random image object
  const author = randomImage.author; //isolates author value from random image produced by getImage
  const imageAddress = randomImage.download_url; //isolates url value from random image produced by getImage
  authorSpan.innerText = author; //displays random image's author information in browser
  img.src = imageAddress; //displays random image's url in browser
  imgDiv.classList.remove("hide"); //removes "hide" class from image div
};

getImage(); //calls f'n to get random image object (placeholder)
