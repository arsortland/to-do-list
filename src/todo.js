const toDo = (title, description = "", notes = "", date, priority) => {
  return {
    title,
    description,
    notes,
    date,
    priority,
  };
};

const objektet = toDo("EnTittel", "enBeskrivelse", "Notater", "dato", "Pri#1");
console.log(objektet.title);

objektet.title = "EnAnnenTittel";
console.log(objektet.title);

// class ToDO {
//   constructor(title, description, notes, date, priority) {
//     this.title = title;
//     this.description = description;
//     this.notes = notes;
//     this.date = date;
//     this.priority = priority;
//   }
//   get getTitle() {
//     return this.title;
//   }

//   set changeTitle(newTitle) {
//     this.title = newTitle;
//   }

//   changeTitle(newOne) {
//     this._title = newOne;
//     return;
//   }
// }

// const user = new ToDO(
//   "EnTittel",
//   "EnBeskrivelse",
//   "EtNotat",
//   "DatoXX",
//   "Pri#1"
// );

// console.log(user.title);
// user.title = "Gunnar";

// console.log(user.title);
