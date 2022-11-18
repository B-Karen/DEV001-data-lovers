// estas funciones son de ejemplo

//import data from "./data/harrypotter/data";

// export const filterBook = (data,libro) => {
//     const libroid=libro
//     const filtro = data.filter(data=> data.libro== libroid)
//     return filtro

// }

// Filtro por casas
export const filterCasas = (data, casa) => {
    const filtro = data.filter(element => element.house === casa);
    return filtro;
};

//Ordenar de la A-Z
export const ordenar=(data) =>{ 
  const ordenado = data.sort(function (a,b) {
    if (a.name < b.name) {
        return -1;
    }

  })
  return ordenado
  
  }
  export const ordenInv=(data)=>{
    const inverso= data.reverse();
return inverso}
       
// export const ordenar=(data)=>{
//    data = data.sort(function(a,b) {  
//     return b.data - a.data;
//   });
//   return data;
//  };
//  export const anotherExample = () => {
//    return 'OMG';
//  };