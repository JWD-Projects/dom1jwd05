let btnFirstName = document.querySelector("#btnFirstName"); // grab the element
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");

function displayfirstBlock() {
  // write the function
  if (firstName.value == "") {
    errMsg.innerHTML = "Name cannot be left blank";
    document.querySelector("#errMsg").style.color = "#ff0000";
    firstName.style.borderColor = "red";
    firstName.focus();
  } else {
    errMsg.innerHTML = "";
    document.querySelector("#secondDiv").style.display = "block";
    document.querySelector(
      "#welcomeText"
    ).innerHTML = `Welcome ${firstName.value}, pick your month of birth`;
  }
}
btnFirstName.addEventListener("click", displayfirstBlock); // add event listner

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

let btnNxt = document.querySelector("#btnNext");
let birthMonth = document.querySelector("#birthMonth");
let displayP = document.querySelector("#thirdDiv > p");
let displayFigure = document.querySelector("#thirdDiv > figure");
//console.log(displayP);
function displayStone() {
  document.querySelector("#thirdDiv").style.display = "block";
  //console.log(objBirthStones.length);
  for (i = 0; i <= objBirthStones.length; i++) {
    if (birthMonth.value == objBirthStones[i].month) {
      // console.log(`${birthMonth.value } == ${objBirthStones[i].month}`);
      let selected_img = objBirthStones[i].thumbnail;
      // console.log(selected_img);
      // console.log (`${firstName.value}, your birthstone is ${objBirthStones[i].stone_name}`);
      displayP.innerHTML = `Dear ${firstName.value}, your birthstone is ${objBirthStones[i].stone_name}`;
      displayFigure.innerHTML = `<img id="img_${objBirthStones[i].month}" src="./bsimages/${selected_img}" alt="${objBirthStones[i].stone_name}"/>`;
      break;
    }
  }
}

btnNxt.addEventListener("click", displayStone);
