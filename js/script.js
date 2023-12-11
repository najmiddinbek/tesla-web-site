let iconList = document.querySelector(".icon-list");
let iconX = document.querySelector(".icon-x");
let navNav = document.querySelector(".navbar-navigation");
let container = document.querySelector(".list");
let list = document.querySelector(".result");
let btns = document.querySelectorAll(".btn1");
let allBtn = document.querySelector(".all");

iconList.addEventListener("click", (e) => {
  e.preventDefault();
  navNav.style.right = "0";
});

navNav.addEventListener("click", (e) => {
  e.preventDefault();
  navNav.style.right = "-100%";
});



const cards = [
  {
    name: "Porsche",
    model: "Turbo S",
    img: "/public/img/about card 1.png",
    statistic: "3.7 356Km/h  Electric",
    price: "$179,400",
    carCardIcon: "/public/icon/about card icon.svg",
  },
  {
    name: "Porsche",
    model: "Taycan",
    img: "/public/img/brand 2.png",
    statistic: "3.7 356Km/h Electric",
    price: "$179,400",
    carCardIcon: "/public/icon/about card icon.svg",
  },
  {
    name: "Porsche",
    model: "Turbo S Cross",
    img: "/public/img/brand3.png",
    statistic: "3.7 356Km/h Electric",
    price: "$179,400",
    carCardIcon: "/public/icon/about card icon.svg",
  },
];

cards.forEach(function (card) {
  const newCard = document.createElement("div");
  const carsMainDiv = document.createElement("div");
  const carName = document.createElement("h5");
  const carModel = document.createElement("p");
  const carImg = document.createElement("img");
  const carPrice = document.createElement("h3");
  const carStatistic = document.createElement("h4");
  const carCardIcon = document.createElement("img");

  carName.textContent = card.name;
  carModel.textContent = card.model;
  carPrice.textContent = card.price;
  carStatistic.textContent = card.statistic;

  carImg.setAttribute("alt", card.name);
  carImg.setAttribute("src", card.img);
  carImg.setAttribute("class", "card-main-img");
  carsMainDiv.setAttribute("class", "cars-div");
  carModel.setAttribute("class", "about-right-paragrf");
  carCardIcon.setAttribute("src", card.carCardIcon);
  carCardIcon.setAttribute("class", "car-card-icon");
  carPrice.setAttribute("class", "car-price");

  carStatistic.innerHTML = ` 
  <div class="car-static">
    <div class="span">
      <img src="/public/icon/time icon.svg" alt=""> 
      <p>3.7 Sec</p>
    </div> 
    <div class="span">
      <img src="/public/icon/up icon.svg" alt=""> 
      <p>356 Km/h</p>
  </div> 
  </div>
  <div class="span">
  <img src="/public/icon/fuel.icon.svg" alt="">
  <p>Electric</p> <br>
  </div>
  `;

  carsMainDiv.appendChild(carName);
  carsMainDiv.appendChild(carModel);
  carsMainDiv.appendChild(carImg);
  carsMainDiv.appendChild(carStatistic);
  carsMainDiv.appendChild(carPrice);
  carsMainDiv.appendChild(carCardIcon);

  newCard.appendChild(carsMainDiv);
  container.appendChild(newCard);
});

var data = [
  {
    img: "/public/img/featured1.png",
    name: "Model X",
    type: "Tesla",
    price: "$98,900",
    image: "/public/icon/about card icon.svg",
  },
  {
    img: "/public/img/featured2.png",
    name: "Model 3",
    type: "Tesla",
    price: "$45,900",
    image: "/public/icon/about card icon.svg",
  },
  {
    img: "/public/img/featured3.png",
    name: "E-tron",
    type: "Audi",
    price: "$175,900",
    image: "/public/icon/about card icon.svg",
  },
  {
    img: "/public/img/featured5.png",
    name: "Boxster 987",
    type: "Porsche",
    price: "$126,900",
    image: "/public/icon/about card icon.svg",
  },
  {
    img: "/public/img/featured6 (1).png",
    name: "Panamera",
    type: "Porsche",
    price: "$126,900",
    image: "/public/icon/about card icon.svg",
  },
];

let activeType = "Tesla";
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    list.innerHTML = "";
    activeType = e.target.innerHTML.toLowerCase();
    data.forEach((item) => {
      if (item.type.toLowerCase() == activeType) {
        item.type = item.type.charAt(0).toUpperCase() + item.type.slice(1);
        let listItem = document.createElement("h1");
        let listImg = document.createElement("img");
        let cardIcon = document.createElement("img");
        listItem.innerHTML = `
        <div class="futured-card">
        <div class="futured-card-type">${item.type}</div>
        <div class="about-right-paragrf">${item.name}</div>
        <img class="future-cars-img" src="${item.img}" alt="${item.name}">
        <div class="car-price">${item.price}$ <img class="car-card-icon" src="${item.image}" alt="${item.image}"> </div>
        </div>
        `;
        listImg.setAttribute("src", item.img);
        cardIcon.setAttribute("src", item.image);
        list.appendChild(listItem);
      }
    });
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

allBtn.addEventListener("click", () => {
  list.innerHTML = "";
  activeType2 = "all";

  data.forEach((item) => {
    const listItem = document.createElement("h1");
    const img = document.createElement("img");
    let cardIcon = document.createElement("img");
    img.setAttribute("src", item.img);
    img.setAttribute("class", "img");
    listItem.appendChild(img);
    listItem.innerHTML = `
        <div class="futured-card">
        <div class="futured-card-type">${item.type}</div>
        <div class="about-right-paragrf">${item.name}</div>
        <img class="future-cars-img" src="${item.img}" alt="${item.name}">
        <div class="car-price">${item.price}$ <img class="car-card-icon" src="${item.image}" alt="${item.image}"> </div>
        </div>
        `;
    cardIcon.setAttribute("src", item.image);
    list.appendChild(listItem);
  });

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  allBtn.classList.add("active");
});

list.innerHTML = "";
activeType2 = "all";

data.forEach((item) => {
  const listItem = document.createElement("h1");
  const img = document.createElement("img");
  let cardIcon = document.createElement("img");
  img.setAttribute("src", item.img);
  img.setAttribute("class", "img");
  listItem.appendChild(img);
  listItem.innerHTML = `
        <div class="futured-card">
        <div class="futured-card-type">${item.type}</div>
        <div class="about-right-paragrf">${item.name}</div>
        <img class="future-cars-img" src="${item.img}" alt="${item.name}">
        <div class="car-price">${item.price}$ <img class="car-card-icon" src="${item.image}" alt="${item.image}"> </div>
        </div>
        `;
  cardIcon.setAttribute("src", item.image);
  list.appendChild(listItem);
});

btns.forEach((btn) => {
  btn.classList.remove("active");
});
allBtn.classList.add("active");
