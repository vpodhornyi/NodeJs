String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s|[-"([{])+\S/g, c => c.toUpperCase())
}
const str = 'Cwm fjord bank glyphs vext quiz\' a pangram';

console.log(str.toJadenCase()); //Cwm Fjord Bank Glyphs Vext Quiz' A Pangram
