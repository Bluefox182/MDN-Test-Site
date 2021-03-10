let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/space01.jpg") {
    myImage.setAttribute("src", "images/space02.jpg");
  } else {
    myImage.setAttribute("src", "images/space01.jpg");
  }
};
