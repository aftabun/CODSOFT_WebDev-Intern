// toggale
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

// slide
let items = document.querySelectorAll(".list .item");
let models = document.querySelectorAll(".content .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".list .item.active");
  let modelActiveOld = document.querySelector(".content .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  modelActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  models[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

// video pause and play
function togglePlay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  play.classList.toggle("active");
  pause.classList.toggle("active");
}
function pauseVideo() {
  let items = document.querySelectorAll(".list .item");
  items.forEach((video) => {
    video.pause();
  });
  togglePlay();
}
function playVideo() {
  let items = document.querySelectorAll(".list .item");
  items.forEach((video) => {
    video.play();
  });
  togglePlay();
}
