const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gazaslim.jpg") {
    myImage.setAttribute("src", "images/v.webp");
  } else {
    myImage.setAttribute("src", "images/gazaslim.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please Enter Your Name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Gazaslim is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Gazaslim Is Cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
