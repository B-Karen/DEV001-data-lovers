import data from './data/harrypotter/data.js';
const todosLibros=document.getElementById("libro-boton");
const persons= document.getElementById("characters");
const contenedor =document.getElementById("contenedor");
import{filterCasas} from './data.js'

// Mostar saga de los libros
 const saga = data.books
//Mostrar libros

  const showBooks =(books)=>{
  contenedor.innerHTML="";
   books.forEach(book=> {
    contenedor.innerHTML+=
    `<div class="portada" >
        <img src="${book.poster}" alt="">
        <div class="letras">
        <h2> ${book.title}</h2>
        <p> ${book.releaseDay}</p>
        </div>
        <div class="boton">
        <button class="click" id="b1"> View More </button>
      </div>
        </div>`
    
   })
  }
  
 showBooks(saga);
 
// Funcion para recoorer los personajes
const showCharacters =(characters)=>{
  contenedor.innerHTML="";
    characters.forEach(character => {
     contenedor.innerHTML+=
     
     `<div class="tarjeta-personajes">
     <div class="letras-personajes">  
     <h2> ${character.name} </h2>
      <p>${character.house}</p>
      <p>${character.species}</p>
      </div>
      </div>`  
    })
   }
   
   // Mostrar los personajes al hacer click
 persons.addEventListener("click", ()=>  { 
  const personajes= data.characters;
  showCharacters(personajes)
 })
  //Mostar los libros 
todosLibros.addEventListener("click",() => {
showBooks(saga);
})
 
 const todasCasas= document.querySelectorAll(".casa-indi") ;
 todasCasas.forEach((c =>{
c.addEventListener("click", ()=>{
  contenedor.innerHTML="";
  const showHouse= filterCasas(data.characters,c.id);
  showCharacters(showHouse);
});


}));
 //select.addEventListener("click",() => {
 //const filSelec=select.value;

//  console.log(filterCasas(data.characters, filSelec));
//  })
// const casas= document.querySelectorAll("menu-casas");
// showCharacters.forEach(( casa=> {
//   casa.addEventListener("click", ()=>{
//     contenedor.innerHTML="";
//     filterCasas(casas);
//   })
// }))

   
 


 
    
 
//import data from './data/harrypotter/data.js';
//console.log( data.title);