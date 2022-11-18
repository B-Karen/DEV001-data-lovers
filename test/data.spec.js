import { filterCasas, ordenar,ordenInv} from '../src/data.js';



describe('filterCasas', () => {
  const personajes = [
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "house": "Gryffindor",

    },
    {
      "id": 2,
      "name": "Stewart Ackerley",
      "house": "Ravenclaw",
    },
    {
      "id": 3,
      "name": "African prince",
      "house": null,

    }];

  it('returns ` personajes que pertenecen a Casa Gryffindor`', () => {
    expect(filterCasas(personajes, "Gryffindor")).toEqual([{
      "id": 1,
      "name": "Euan Abercrombie",
      "house": "Gryffindor",
    }]);
  });
});

//test para funcion de sort

describe(`ordena los hechizos de la A a la Z`, () => {

  it('returns ` hechizos ordenados de la A a la Z`', () => {

    const nombresOrde =
      [{ "name": "Imperio" }, { "name": "Ron" }, { "name": "Flipendo" }]
    const resulta =
      [{ "name": "Flipendo" }, { "name": "Imperio" }, { "name": "Ron" }]
    expect(ordenar(nombresOrde)).toEqual(resulta);
  })
});

describe(`ordena los hechizos de desde la Z a la A`, () => {

  it('returns ` hechizos ordenados de la Z a la A`', () => {

    const nombresOrdeZa =
      [{ "name": "Flipendo" },{ "name": "Imperio" }, { "name": "Ron" }, ]
    const resultaZa =
      [{ "name": "Ron" }, { "name": "Imperio" } ,{ "name": "Flipendo" }]
    expect(ordenInv(nombresOrdeZa)).toEqual(resultaZa);
  })
});