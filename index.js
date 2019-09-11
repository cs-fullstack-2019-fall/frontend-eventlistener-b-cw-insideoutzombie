let onebtnElement = document.getElementById("onebtn");
let twobtnElement = document.getElementById("twobtn")
let titleElement = document.querySelector("title");
let mainElement = document.querySelector("body");

onebtnElement.addEventListener('click', function() {
  titleElement.innerText = 1;
  mainElement.style.backgroundColor = "blue"
  // !! : use classList to change background
  // mainElement.classList.style.backgroundColor("blueBackground");

})

twobtnElement.addEventListener('click', function() {
  titleElement.innerText = 2;
  mainElement.style.backgroundColor = "red"
  // !! : use classList to change background
})
