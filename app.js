const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "GTA5",
    price: 45,
    colors: [
      {
        code: "black",
        img: "./img/My project(2).png",
      },
      {
        code: "darkblue",
        img: "./img/My project(2).png",
      },
    ],
  },
  {
    id: 2,
    title: "HALF LIFE",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./img/Half-Life-2-PNG-Transparent.png",
      },
      {
        code: "green",
        img: "./img/Half-Life-2-PNG-Transparent.png" ,
      },
    ],
  },
  {
    id: 3,
    title: "POKEMON",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/580b57fcd9996e24bc43c319.png",
      },
      {
        code: "green",
        img: "./img/580b57fcd9996e24bc43c319.png",
      },
    ],
  },
  {
    id: 4,
    title: "MINECRAFT",
    price: 80,
    colors: [
      {
        code: "black",
        img: "./img/minecraft-png-13356.png",
      },
      {
        code: "lightgray",
        img: "./img/minecraft-png-13356.png",
      },
    ],
  },
  {
    id: 5,
    title: "CALL OF DUTY",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/call-of-duty-png-43289.png",
      },
      {
        code: "black",
        img: "./img/call-of-duty-png-43289.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});