import data from './data/harrypotter/data.js';
// Mostar saga de los libros

//import{filterBook} from './data.js'
//const libros =  document.getElementById("book")



 const saga = data.books
//console.log(filtro) 

  const show =(saga)=>{
   saga.forEach(books => {
    document.getElementById("libro").innerHTML+=
    `<div class="portada" >
        <img src="${books.poster}" alt="">
        <div class="letras">
        <h2> ${books.title}<h2>
        <p> ${books.releaseDay}<p>
        </div>
        <div class="boton">
        <button id="b1"> View More </button>
      </div>
        </div>`
    
   })
  }
  
 show(saga);
 document.getElementById("b1").addEventListener("click", ()=>  {  
  
     }
  
  )



// declaras una variable

//  saga.forEach(title => (title.title) )
 
//  console.log(saga)
   
   //Aqui 

 

 // asignas la variable al innerHTml
 
    //asignas el new libro a la variable 
//     for(let i = 0; i < books.length; i++) {
//    libros.innerHTML+= 
//    `<div class= "portada">
//    <h2>${ books[i].title} </h2>
//    <img src="${books[i].poster}" alt="">
//    <p ${books[i].releaseDay}</p>
//   </div>  ` 
//  }
 
//books.forEach (title => (title.title))

// function titulos (){
//     const title= data.title
//     return ;

//}
 
    
 
//import data from './data/harrypotter/data.js';
//console.log( data.title);