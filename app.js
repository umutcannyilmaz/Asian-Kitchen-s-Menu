const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/*
ilk divlerimizi çağırıcaz ve bir değişken tanımlıcaz.
Butonlarımız ve ürünlerin yerleşeceği yer.

*/
let mainMenu = document.querySelector(".section-center")
let buttons = document.querySelector(".btn-container")
listerAll();

/*
buton fonksiyonu yazıcaz ve her farklı buton için 
yeniden çalışacak
*/

function btnCreate(btnName) {
  let btn = `<button type="button" id="${btnName}" class="btn btn-outline-dark btn-item" >${btnName}</button>`
  return btn;
}

/*
butonlarımıza yeni ad vererek yukarıdaki fonksiyonu çalıştırıp 
tasarlanan butonu geri alıp buton containerın içine yazdırcaz.
Burada headerBTN() fonskiyonunu yazmaya gerek yok.
Direkt button.innerHTML ye yazdıralabilir.
*/
function headerBTN() {
  buttons.innerHTML = btnCreate("All") + "" + btnCreate("Korea") + "" + btnCreate("Japan") + "" + btnCreate("China")
}
headerBTN(); // headerBTN fonksiyonunu çalıştırdık


let homeMenu = document.querySelector("#All");
let koreaMenu = document.querySelector("#Korea");
let japanMenu = document.querySelector("#Japan");
let chinaMenu = document.querySelector("#China");

// click olduğunda tanımlanan fonksiyonları çalıştır.

let all = homeMenu.addEventListener("click", listerAll)
let korea = koreaMenu.addEventListener("click", listerKorea)
let japan = japanMenu.addEventListener("click", listerJapan)
let china = chinaMenu.addEventListener("click", listerChina)




/*
createObject() adında fonksiyon yazıcaz
ve tüm nesnelerimizi sırayla biçimlendircez.
*/

// Listeleme

function listerAll() {
  let allMenu = " ";
  menu.map((banner) => {
    allMenu += createObject(banner);
  });
  mainMenu.innerHTML = allMenu;
}

// Korea Listeleme
function listerKorea() {
  let allMenu = " ";
  menu.map((banner) => {
    if (banner.category === "Korea") {
      allMenu += createObject(banner);
    }
  });
  mainMenu.innerHTML = allMenu;
}

// Japan Listeleme
function listerJapan() {
  let allMenu = " ";
  menu.map((banner) => {
    if (banner.category === "Japan") {
      allMenu += createObject(banner);
    }
  });
  mainMenu.innerHTML = allMenu;
}

// China Listeleme
function listerChina() {
  let allMenu = " ";
  menu.map((banner) => {
    if (banner.category === "China") {
      allMenu += createObject(banner);
    }
  });
  mainMenu.innerHTML = allMenu;
}

/* <div class="menu-items col-lg-6 col-sm-12"> 
sayfanın tamamı 12 genişliğinde 6 genişliğinde itemler yerleştir 

<img src="${food.img}" alt="${food.title}" ramen="" class="photo">
nesnelerin resmini adını al photo sınıfının özelliğinde yer kapla

<div class="menu-info"> 
menü info flex olduğu için resmin yanına yerleşecek

<h4>${food.title} Ramen</h4>
<h4 class="price">${food.price}</h4>
menü info içine ad ve fiyat yazılacak

<div class="menu-text">
${food.desc}
</div>
menü açıklaması ad fiyat altına yazılacak

nesneleri sırayla bu fonksiyonda çağıracağımız için return kullandık..


*/
function createObject(food) {
  let item =
    `<div class="menu-items col-lg-6 col-sm-12"> 
    <img src="${food.img}" alt="${food.title}" ramen="" class="photo">
      <div class="menu-info">
          <div class="menu-title">
                <h4>${food.title} Ramen</h4>
                <h4 class="price">${food.price}</h4>
          </div>
          <div class="menu-text">
                ${food.desc}
          </div>
      </div>
  </div>`
 return item;
}
