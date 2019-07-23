import users from "./users.js";

// *================= TASk -1
// Получить массив имен всех пользователей (поле name).
const getUserNames = users.map(names => names.name);
console.log(getUserNames);

// *====================TASK -2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  return users.filter(elem => elem.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// *========================TASK - 3
// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
  return users.filter(elem => elem.gender === gender).map(names => names.name);
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn D
// *========================TASK - 4
// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => {
  return users.filter(elem => !elem.isActive);
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// //*========================TASK - 5

// Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => {
  return users.find(element => element.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// *========================TASK - 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// *========================TASKusers- 7
// Получить общую сумму баланса usersполе balance) всех пользователей.
const calculateTotalBalance = users => {
  return users.reduce((acc, value) => acc + value.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916
// *========================TASK - 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(elem => elem.friends.includes(friendName))
    .map(names => names.name);
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// *========================TASK - 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(names => names.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// *========================TASK - 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  // твой код
  let newArr = [];
  users.forEach(user => newArr.push(...user.skills));
  // return newArr.filter((e,i)=> newArr.indexOf(e) >= i);
  const userFind = newArr.reduce((acc, el) => {
    if (acc.indexOf(el) === -1) {
      acc.push(el);
      return acc;
    }
    return acc;
  }, []);
  // console.log(userFind);
  return userFind.sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
