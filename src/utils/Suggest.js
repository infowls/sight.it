import data from './cities.json'

export function getSuggestions(input) {

    const newdata = data.filter((data) => {
        return data.name.substring(0, input.length) === input;
   });

   return newdata.slice(0, 5);
}