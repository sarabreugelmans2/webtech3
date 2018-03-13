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

    this.add(newNote);
  //  document.querySelector('.notes').appendChild(newNote);
    //this.newNote=newNote;
    a.addEventListener("click", this.remove.bind(newNote));
    a.addEventListener("click", this.removeFromStorage.bind(this.title));
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

    /*let newNote = document.querySelector('.card');
    let cln = newNote.cloneNode(true);

    document.querySelector(".notes").appendChild(cln);
    cln.querySelector("p").innerHTML= `${this.title}`;*/
    //saveToStorage(newNote);


    //let title2 = this.title;
    this.saveToStorage(this.title);

  return newNote;
      }

    add(n){
    // HINT🤩
    // this function should append the note to the screen somehow

    document.querySelector('.notes').appendChild(n);
  //  document.querySelector('.notes').appendChild(newNote);
  }



  saveToStorage(note){

    // Store

    //localStorage.note=title2;
  /*  let titles= [];
    titles.push(note);*/

        //console.log(titles);
      //localStorage.setItem(note,JSON.stringify(titles));
    //document.querySelector(".card").innerHTML = localStorage.note;
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
let saveArr=[];
let makeobj= JSON.parse(localStorage.getItem("saveArr"));
    if (localStorage.getItem("saveArr") === null) {
            saveArr.push(note);
            localStorage.setItem("saveArr", JSON.stringify(saveArr));
        }
    else{
      makeobj.push(note);
      localStorage.setItem("saveArr", JSON.stringify(makeobj));
}

console.log(saveArr);
console.log(makeobj);
  }


  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    //this.classList.add("animate");
    //this.addEventListener("transitionend", function(event) {
    //this.remove();});
this.classList.add("animate");
setTimeout(() => this.remove(), 1000);


    }

  removeFromStorage(){


    localStorage.removeItem(this.toString());
  }

}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    this.loadNotesFromStorage();
    // HINT🤩
    // clicking the button should work
  /*  let buttonClick= document.getElementById("btnAddNote");
    buttonClick.addEventListener("click", function(event){
    console.log("yoe"); }, false);*/
    this.textAdd= document.getElementById("txtAddNote").value;
    this.btnAdd= document.getElementById("btnAddNote");

    this.btnAdd.addEventListener("click", this.createNote.bind(this));

  //check to see if the enter key was pressed
/*document.addEventListener("click", function findkey(event) {
     let key = event.keyCode;
     if (key == 13) {
    //if so, run the addTask function
    console.log(Wadup);
     return this.createNote.bind(this);

  }
    else{console.log("FOUUT");}});*/


  //Add.addEventListener("click", this.saveToStorage.bind(this));




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

  /*  for ( var i = 0, len = localStorage.length; i < len; ++i ) {

      let retrieved= new Note( JSON.parse(localStorage.getItem( localStorage.key( i ) ) ));
      retrieved.createElement();
    }*/
    let retrieved=JSON.parse(localStorage.getItem("saveArr"));
    console.log("loadNotesFromStorage " + retrieved);

    //let arrayLength = retrieved.length;
    //console.log(arrayLength);

    if (retrieved != null){
    //for (var i = 0; i < arrayLength; i++) {
      //this.createElement(retrieved[i]);
      let toScreen = new Note(retrieved);
      console.log ("toScreen = " + toScreen);
      toScreen.createElement();}

      else{
        console.log("retrieved is dus null");
      }

/*console.log( "Dit is opgeslagen in loadnotes:"+localStorage.getItem('note'));
let retrieved= new Note( JSON.parse(localStorage.getItem('note')));
retrieved.createElement();*/
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
    this.reset();
  }

  reset(){
    // this function should reset the form
   document.getElementById("myForm").reset();

    document.getElementById("txtAddNote").focus();

  }

}

let app = new App();
//let note1= new Note("Eerste nota");
//note1.createElement();
//console.log(note1.title);
//note1.add();


//note1.add();
/*let newNote = document.createElement('div');
let textNote= document.createTextNode('testje 2');
newNote.appendChild(textNote);
document.querySelector(".notes").appendChild(newNote);
newNote.className="card";*/
