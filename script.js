// Бургерная Далиды
let menu = {
    beverages: "soda",
    food: "burger",
    additionaly: "french fries",
    totalPrice: 1300,
    availability: true,
    trash: null
};
// присваивание
menu["availability"] = false;

// получение значения свойства
alert(menu["totalPrice"]);

// удаление свойства
delete menu["trash"];
alert(menu);

let employers = ["John", "Anna", "Robert", "Lucy", "Anton", "Gleb", "Sue"];
alert( employers[employers.length-1] );
alert( employers.at(-1) );

alert( employers.pop() );

for (let i = 0; i < employers.length; i++) {
    alert( employers[i] );
}

var arrFilter = employers.filter(function(str) {
    return str.includes("An");
});
  
alert(arrFilter);
alert(employers.slice(1, 3));
//map
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); // 4,3,10

function showName(firstName, lastName, ...rest) {
    alert(firstName + ' ' + lastName + ' - ' + rest);
  }
  
  // выведет: Юлий Цезарь - Император,Рима
  showName("Юлий", "Цезарь", "Император", "Рима");

let i = 1;
while(i<10){
    console.log('while');
}