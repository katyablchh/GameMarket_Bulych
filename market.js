// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    {
        name: "Мотокоса 43",
        
        price: "5499 ",
        discountPrice: "4497 ",
        couponPrice: "4395",
        
        photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
    },
    {
        name: "Електричний тример 110",
        price: "4497 ",
        discountPrice: "3498",
        couponPrice: "3396",
        photo: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg"
    },
    {
        name: "Електрична газонокосарка 32",
         price: "4497",
        discountPrice: "3297",
        couponPrice: "3195",
        photo: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg"
    },
    {
        name: "Акумуляторний оприскувач 12 N",
        price: "2190 ",
        discountPrice: "1698",
        couponPrice: "1596",
        photo: "https://hotline.ua/img/tx/449/4492289865.jpg"
    }  ,
   
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
if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="bober">
            <div class="item-title">${item.name}</div>
        </div>
        <div class="item-image">
        <img src="${item.photo}"  class="item-image">
           
            
        </div>
        <div class="parts-pay">
            <div><img src="img-market/mono-lapka.png" alt="">6</div>
            <div><img src="img-market/pb.png" alt="">8</div>
        </div>
        <div class="prise">
            <div><span>${item.price}</span><sup>грн</sup></div>
            <div><span>${item.discountPrice}</span><sup>грн</sup></div>
        </div>
        <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.couponPrice}</span><sup>грн</sup></div>
        </div>
    </div>`;
});
} else {
// Вивід повідомлення про не знайдений блок 
console.log('Блок товарів не знайдено');
}
