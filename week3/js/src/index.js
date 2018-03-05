class Note {
  constructor(title) {

    // HINT🤩 this.element = this.createElement(title);
    //this.title= title;
this.title=title;
//this.element= this.createElement('title');
  //this.element=this.createElement("DIV");

  }

  createElement(title){


    let newNote = document.createElement('DIV');
    newNote.classList.add("card");

    //TEKST
    let p = document.createElement('p');
    let text = document.createTextNode(`${this.title} `);
    p.appendChild(text);
    newNote.appendChild(p);

    //REMOVETEKST
    let a = document.createElement('a');
    let linkText = document.createTextNode(" remove");
    a.appendChild(linkText);
    a.href = "#";
    a.classList.add("card-remove");
    newNote.appendChild(a);

  document.querySelector('.notes').appendChild(newNote);
  this.newNote=newNote;
  a.addEventListener("click", this.remove.bind(newNote));
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

    /*let newNote = document.querySelector('.card');
    let cln = newNote.cloneNode(true);

    document.querySelector(".notes").appendChild(cln);
    cln.querySelector("p").innerHTML= `${this.title}`;*/


    return newNote;
      }

    add(){
    // HINT🤩
    // this function should append the note to the screen somehow

  //  document.querySelector('.notes').appendChild(newNote);
  }



  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }

  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.classList.add("animate");
    this.querySelector(".animate").remove();

    //this.remove();
       

  }


}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
  /*  let buttonClick= document.getElementById("btnAddNote");
    buttonClick.addEventListener("click", function(event){
    console.log("yoe"); }, false);*/
    this.textAdd= document.getElementById("txtAddNote").value;
    console.log(this.textAdd);
    this.btnAdd= document.getElementById("btnAddNote");

    this.btnAdd.addEventListener("click", this.createNote.bind(this));





    // pressing the enter key should also work

/*
document.addEventListener('keyup' ,(event) => {
  const keyName = event.key || event.which;
  if (keyName === "Enter") {
  this.createNote.bind(this);
console.log("Kom op");}}
);
*/

    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }

  createNote(e){
    // this function should create a new note by using the Note() class
    this.textAdd= document.getElementById("txtAddNote").value;
    let note= new Note(this.textAdd);
    note.createElement();
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    //this.reset();
  }

  reset(){
    // this function should reset the form
  }

}

let app = new App();
let note1= new Note("Eerste nota");
note1.createElement();
console.log(note1.title);
note1.add();



//note1.add();
/*let newNote = document.createElement('div');
let textNote= document.createTextNode('testje 2');
newNote.appendChild(textNote);
document.querySelector(".notes").appendChild(newNote);
newNote.className="card";*/
