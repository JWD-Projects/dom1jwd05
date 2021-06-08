let btnFirstName = document.querySelector("#btnFirstName"); // grab button element
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let secondDiv = document.querySelector("#secondDiv");

// console.log(btnFirstName);

// add an event Listener to the button

btnFirstName.addEventListener("click", displaySecBlock);

function displaySecBlock(){
    if (firstName.value == "") {
        errMsg.innerHTML = "Please enter your name";
        errMsg.style.color = "red";
        firstName.focus();
    } else {
        secondDiv.style.display = "block";
        errMsg.innerHTML = "";
    }
}

// ---------------

// create a  birthstones array object
let objBirthStones = [
    {
      stone_name: "Garnet",
      month: 1,
      thumbnail: "garnet.png",
    },
    {
      stone_name: "Amethyst",
      month: 2,
      thumbnail: "amethyst.png",
    },
    {
      stone_name: "Aquamarine",
      month: 3,
      thumbnail: "aquamarine.png",
    },
    {
      stone_name: "Diamond",
      month: 4,
      thumbnail: "diamond.png",
    },
  ];

let btnNext = document.querySelector("#btnNext");
let birthMonth = document.querySelector("#birthMonth")
let thirdDivP = document.querySelector("#thirdDiv > p");
let thirdDivFigure = document.querySelector("#thirdDiv > figure");



;

function displayStone() {
    document.querySelector("#thirdDiv").style.display = "block";
    console.log(birthMonth.value)
    for(i = 0; i <= objBirthStones.length; i++) {
        if (birthMonth.value == objBirthStones[i].month) {
            thirdDivP.innerHTML = `Dear ${firstName.value} your birthstone is ${objBirthStones[i].stone_name}`;
            thirdDivFigure.innerHTML = `<img src="./bsimages/${objBirthStones[i].thumbnail}">`
            break;
        }
    }
}

btnNext.addEventListener("click", displayStone);

