import { filterCasas } from '../src/data.js';



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
    expect(filterCasas( personajes,"Gryffindor")).toEqual([{"id": 1,
    "name": "Euan Abercrombie",
    "house": "Gryffindor",
    }]);
  });
});
