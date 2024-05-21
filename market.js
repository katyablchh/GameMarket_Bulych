// Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
 {
    firstName:"Ірина",
    lastName:"Боровська-Карандюк",
    age:20,
    subject:"Українська мова, українська література, зарубіжна література",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    
 },
 {
    firstName:"Василь",
    lastName:"Бабій",
    age:30,
    subject:"Фізична культура",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",

 },
 {
    firstName:"Вікторія",
    lastName:"Нелипович",
    age:20,
    subject:"Математика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
  
 },
 {
    firstName:"Іван",
    lastName:"Севрук",
    age:30,
    subject:"Захист України",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
 },
 {
    firstName:"Анжела",
    lastName:"Лознюк",
    age:20,
    subject:"Українська література",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
  
 },
 {
    firstName:"Наталія",
    lastName:"Зинюк",
    age:20,
    subject:"Хімія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
  
 },
 {
    firstName:"Наталія",
    lastName:"Венцель",
    age:20,
    subject:"Директор",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
  
 },
 {
    firstName:"Лариса",
    lastName:"Забелло",
    age:20,
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
  
 },
 {
    firstName:"Ірина",
    lastName:"Глібко",
    age:20,
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
  
 },
 {
    firstName:"Тарас",
    lastName:"Савінков",
    age:30,
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
  
 },
 {
    firstName:"Марія",
    lastName:"Медведєва",
    age:20,
    subject:"Географія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
  
 },
 {
    firstName:"Віталій",
    lastName:"Шатківський",
    age:30,
    subject:"Інформатика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
  
 },

 ]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");


//Перевірка існування знайденого блоку 
if(itemsDiv) {

    //Вивід знайденого елементу 
    console.log(itemsDiv)
    // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText='Перший Програмно додано текст'
    // itemsDiv.innerText+='Другий Програмно додано текст'

    // //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
    // itemsDiv.innerHTML = '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsArray.forEach((item,index) =>{
       // console.log(item)
       //Спеціальний апостроф - Англійська розкладка - біля кнопки 1~
       //Виводимо на веб сторінку елемент масиву в блок з класом item
       itemsDiv.innerHTML += 
       `
       <div class = "item">
       <h2>Вчитель №${index +1 } з ${itemsArray.length}</h2>
       <p>${item.lastName} ${item.firstName}</p>
       <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class=""</p>
       <p>Вік: ${item.age}</p>
       </div>
       `
    })

    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'}  

} else {

    //Вивід повідомлення про не знайдений блок 
    console.log("Блок товарів не знайдено")
}

//Визначення масиву товарів
// let itemsArray = ['','','','']
// console.log(itemsArray)



console.log(itemsArray)

//Сортування масиву
// itemsArray = itemsArray.sort()


//Виведення в консоль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//    console.log(i +'-й елемент:', itemsArray[i])
// }

//Виведення елементів відсортовоного масиву
// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент:',item)
// })