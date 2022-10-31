// estas funciones son de ejemplo


export const filterBook = (data,libro) => {
    const libroid=libro
    const filtro = data.filter(data=> data.libro== libroid)
    return filtro

}

//  export const anotherExample = () => {
//    return 'OMG';
//  };