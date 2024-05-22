// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
  {
    email: "23a_bam@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Боровий Артур",
    gameTitle: "Дід проти москалів",
    gameRepo: "https://github.com/23a-bam/Phaser2ndGame",
    gameDemo: "https://23a-bam.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
    feedbackForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
    marketRepo: "https://github.com/23a-bam/GameMarket_Borovyi",
    marketDemo: "https://23a-bam.github.io/GameMarket_Borovyi/",
    marketPage: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
    finalmarketPage: ""
  },
  {
    email: "23a_gki@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Геча Кирило",
    gameTitle: "Магазин UkraineRog",
    gameRepo: "https://github.com/Kyrylooo/GameMarket_Surname",
    gameDemo: "https://kyrylooo.github.io/Test1/",
    driveFolder: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
    feedbackForm: "https://forms.gle/NN9okEBmpsLw3AmX8",
    marketRepo: "https://github.com/Kyrylooo/Test1",
    marketDemo: "https://kyrylooo.github.io/Test1/",
    marketPage: "https://kyrylooo.github.io/Test1/",
    finalmarketPage: ""
  },
  {
    email: "23a_gmo@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Громова Марина",
    gameTitle: "",
    gameRepo: "https://github.com/Marina745/Phaser2ndGame",
    gameDemo: "https://marina745.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
    feedbackForm: "https://forms.gle/4tsVxrHtBpkLLmdc6",
    marketRepo: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
    marketDemo: "https://marina745.github.io/GameMarket_Hromova/market.html",
    marketPage: "",
    finalmarketPage: ""
  },
  {
    email: "23a_gayu@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Гуменюк Аріна",
    gameTitle: "",
    gameRepo: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
    gameDemo: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
    driveFolder: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
    feedbackForm: "https://forms.gle/rNroPXhu2mFSxcHx8",
    marketRepo: "",
    marketDemo: "",
    marketPage: "",
    finalmarketPage: ""
  },
  {
    email: "23a_dii@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Демидчук Ілля",
    gameTitle: "",
    gameRepo: "https://github.com/zxcursed2008/Phaser2ndGame",
    gameDemo: "https://zxcursed2008.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
    feedbackForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
    marketRepo: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
    marketDemo: "",
    marketPage: "",
    finalmarketPage: ""
  },
  {
    email: "23a_dyem@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Деркач Єлизавета",
    gameTitle: "Царівна жаба",
    gameRepo: "https://github.com/liska228/Phaser2ndGame",
    gameDemo: "https://liska228.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
    feedbackForm: "https://forms.gle/XDzvrjzJhjq758XFA",
    marketRepo: "https://github.com/liska228/GameMarket_Derkach-",
    marketDemo: "https://liska228.github.io/GameMarket_Derkach-/",
    marketPage: "https://liska228.github.io/GameMarket_Derkach-/market.html",
    finalmarketPage: ""
  },
  {
    email: "23a_yedv@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Євланов Данііл",
    gameTitle: "Пригоди Свинки Шмеппи 2",
    gameRepo: "https://github.com/Scoxxy/Phaser2ndGame",
    gameDemo: "https://scoxxy.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
    feedbackForm: "https://forms.gle/vWZ2hn9MopmMy5fc7",
    marketRepo: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
    marketDemo: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
    marketPage: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html",
    finalmarketPage: ""
  },
  {
    email: "23a_bks@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Катя Булич",
    gameTitle: "Червона відьма",
    gameRepo: "https://github.com/katyablchh/Phaser2ndGame",
    gameDemo: "https://katyablchh.github.io/Phaser2ndGame/",
    driveFolder: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
    feedbackForm: "https://forms.gle/dxTCp9vfCCgZwyy97",
    marketRepo: "https://github.com/katyablchh/GameMarket_Bulych",
    marketDemo: "https://katyablchh.github.io/Phaser2ndGame/",
    marketPage: "https://katyablchh.github.io/Phaser2ndGame/",
    finalmarketPage: ""
  },
  {
    email: "23a_kai@liceum.ztu.edu.ua",
    class: "10-А 1",
    name: "Ковальов Андрій",
    gameTitle: "They alive",
    gameRepo: "https://github.com/Andre00785/Phaser1stGame",
    gameDemo: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
    driveFolder: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
    feedbackForm: "https://forms.gle/i7YyjwzaHp7QvXei8",
    marketRepo: "https://github.com/Andre00785/Game_Market_Kovalev",
    marketDemo: "https://andre00785.github.io/Game_Market_Kovalev/",
    marketPage: "https://andre00785.github.io/Game_Market_Kovalev/market.html",
    finalmarketPage: ""
  },

    
    // {
    //     name: "Мотокоса 43",
        
    //     price: "5499 ",
    //     discountPrice: "4497 ",
    //     couponPrice: "4395",
        
    //     photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
    // },
    // {
    //     name: "Електричний тример 110",
    //     price: "4497 ",
    //     discountPrice: "3498",
    //     couponPrice: "3396",
    //     photo: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg"
    // },
    // {
    //     name: "Електрична газонокосарка 32",
    //      price: "4497",
    //     discountPrice: "3297",
    //     couponPrice: "3195",
    //     photo: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg"
    // },
    // {
    //     name: "Акумуляторний оприскувач 12 N",
    //     price: "2190 ",
    //     discountPrice: "1698",
    //     couponPrice: "1596",
    //     photo: "https://hotline.ua/img/tx/449/4492289865.jpg"
    // }  ,
   
 //{
  //  firstName:"Ірина",
  //  lastName:"Боровська-Карандюк",
  //  age:20,
  //  subject:"Українська мова, українська література, зарубіжна література",
  //  photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    
 //},
// {
 //   firstName:"Василь",
  //  lastName:"Бабій",
 //   age:30,
 //   subject:"Фізична культура",
 //   photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",

 //},
 //{
 //   firstName:"Вікторія",
 //   lastName:"Нелипович",
   // age:20,
  //  subject:"Математика",
    //photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
  
 //},
 //{
   // firstName:"Іван",
    //lastName:"Севрук",
    //age:30,
 //   subject:"Захист України",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
 //},
 //{
   // firstName:"Анжела",
   // lastName:"Лознюк",
   // age:20,
   // subject:"Українська література",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
  
 //},
 //{
   // firstName:"Наталія",
   // lastName:"Зинюк",
   // age:20,
   // subject:"Хімія",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
  
// },
 //{
  //  firstName:"Наталія",
   // lastName:"Венцель",
   // age:20,
   // subject:"Директор",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
  
 //},
 //{
  //  firstName:"Лариса",
  //  lastName:"Забелло",
   // age:20,
  //  subject:"Англійська мова",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
  
// },
 //{
  //  firstName:"Ірина",
  //  lastName:"Глібко",
  //  age:20,
   // subject:"Англійська мова",
  //  photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
  
 //},
 //{
  //  firstName:"Тарас",
   // lastName:"Савінков",
  //  age:30,
  //  subject:"Англійська мова",
  //  photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
  
 //},
// {
 //   firstName:"Марія",
  //  lastName:"Медведєва",
   // age:20,
   // subject:"Географія",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
  
 //},
 //{
  //  firstName:"Віталій",
   // lastName:"Шатківський",
   // age:30,
   // subject:"Інформатика",
   // photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
  
// },
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
    
]
// Отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");
// Перевірка існування знайденого блоку 
if (itemsDiv) 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="bober">
            <div class="item-title">${item.email}</div>
            <div class="item-title">${item.group}</div>
        </div>
        <div class="item-image">
        <img src="${item.image}"  class="item-image">
           
        <p><img src="${item.photo}" " class="item-image"></p>
            
        </div>
        <div class="parts-pay">
            <div><a href = "${item.game_github}" target=_blank>Market Github</
            a><div>
            <div><a href = "${item.game_pages}" target=_blank>Market Pages</
            a><div>
            <div><a href = "${item.docs}" target=_blank>Docs</
            a><div>
            <div><a href = "${item.forms}" target=_blank>Forms</
            a><div>
            <div><a href = "${item.gamemarket_github}" target=_blank>Gamemarket_github</
            a><div>
            <div><a href = "${item.gamemarket_pages}" target=_blank>Gamemarket_pages</
            a><div>
            <div><a href = "${item.market_pages}" target=_blank>Market_pages</
            a><div>
           
            
            
          
        
    </div>`;
});