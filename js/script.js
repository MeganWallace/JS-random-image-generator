const button = document.querySelector("button"); //show image button
const authorSpan = document.querySelector(".author"); //image credit
const imgDiv = document.querySelector(".image-container"); //image container
const img = document.querySelector(".img"); //image

const getImage = async function(){
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json;
  console.log(images);
};

getImage();

