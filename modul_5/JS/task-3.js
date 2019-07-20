class Storage {
  constructor(arr) {
    this.items = arr;
  }
  //- возвращает массив текущих товаров
  getItems() {
    return this.items;
  }
  //- получает новый товар и добавляет его к текущим
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    // this.items = this.items.filter(items => items !== item);
    for (const el of this.items) {
      if (item === el) {
        this.items.splice(this.items.indexOf(el), 1);
      }
    }
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
