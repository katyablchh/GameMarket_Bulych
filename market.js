// Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
 {
    firstName:"Ірина",
    lastName:"Боровська-Карандюк",
    age:20,
    subject:"Українська мова, українська література, зарубіжна література",
    photo:"img/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    width:100,
    height:100
 },
 {
    firstName:"Василь",
    lastName:"Бабій",
    age:30,
    subject:"Фізична культура",
    photo:"img/babiy-vasyl-dmytrovych-683x1024.jpg",
    width:100,
    height:100
 },
 {
    firstName:"Вікторія",
    lastName:"Нелипович",
    age:20,
    subject:"Математика",
    photo:"img/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    width:100,
    height:100
 },
 {
    firstName:"Іван",
    lastName:"Севрук",
    age:30,
    subject:"Захист України",
    photo:"img/sevruk-ivan-hryhorovych-683x1024.jpg",
    width:100,
    height:100
 }
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