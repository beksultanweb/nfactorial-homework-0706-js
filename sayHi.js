function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // список экспортируемых переменных




//Второй способ через default

  export default class User { // просто добавьте "default"
    constructor(name) {
      this.name = name;
    }
  }